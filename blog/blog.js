const showdown_converter = new showdown.Converter();

dayjs.extend(dayjs_plugin_relativeTime);

fetch(
	"https://api.github.com/gists/f14a2eea4c69a5fc4f53734e5724d707"
)
	.then((response) => response.json())
	.then((json) => json.files["posts"].content)
	.then((encoded) => atob(encoded))
	.then((decoded) => JSON.parse(decoded))
	.then((json) => {
		console.log(json);
		const posts = json.posts.sort((a, b) => b.timestamp - a.timestamp);
		console.log(posts);

		for (var post of posts) {
			const postId = post.id;
			const postTitle = post.title;
			const postTimestamp = post.timestamp;
			const postContent = post.content;

			const postButton = document.createElement("div");
			postButton.classList.add("post-button");
			postButton.id = postId;
			postButton.addEventListener("click", () => {
				for (var post of posts) {
					document.getElementById(post.id).classList.remove("selected-post");
				}
				const button = document.getElementById(postId);
				button.classList.add("selected-post");
				document.getElementById("viewer-content").innerHTML =
					showdown_converter.makeHtml(postContent);
                document.getElementById("viewer-date").innerHTML = new Date(
                        postTimestamp * 1000
                    ).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    });
                document.getElementById("viewer-relative-time").innerHTML = 
                    dayjs(postTimestamp * 1000).fromNow();
                document.getElementById("viewer-info").style.visibility = "visible";
			});

			const postButtonTitle = document.createElement("p");
			postButtonTitle.classList.add("post-button-title");
			postButtonTitle.innerHTML = postTitle;
			postButton.appendChild(postButtonTitle);

			const postButtonTimestamp = document.createElement("p");
			postButtonTimestamp.classList.add("post-button-timestamp");
			postButtonTimestamp.innerHTML = new Date(
				postTimestamp * 1000
			).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
			});
			postButton.appendChild(postButtonTimestamp);

			document.getElementById("postlist").appendChild(postButton);
		}
	});
