document.addEventListener('DOMContentLoaded', () => {
    function createWorkAndVideoCards(exampleofWorkArray, videoData, mainVideoSrc, containerId = null) {
        let container;


        if (containerId) {
            container = document.getElementById(containerId);
        }
        if (!container) {
            container = document.createElement('div');
            container.id = containerId || `dynamic-container-${Date.now()}`;
            document.body.appendChild(container);
        }

        const mainBoxofWorkAndVideo = document.createElement('div');
        mainBoxofWorkAndVideo.classList.add('main-box-of-work-and-video');

        // Create example-of-work container
        const exampleOfWork = document.createElement('div');
        exampleOfWork.classList.add('example-of-work');

        // Create example-of-work-text container
        const exampleOfWorkText = document.createElement('div');
        exampleOfWorkText.classList.add('example-of-work-text');

        // Append heading, paragraph, and link
        exampleofWorkArray.forEach(element => {
            if (element.heading) {
                const headingContainer = document.createElement('div');
                const heading = document.createElement('p');
                heading.classList.add('example-of-work-heading');
                heading.textContent = element.heading;
                headingContainer.appendChild(heading);
                exampleOfWorkText.appendChild(headingContainer);
            }

            if (element.para) {
                const paraContainer = document.createElement('div');
                const paragraph = document.createElement('p');
                paragraph.classList.add('example-of-work-para');
                paragraph.textContent = element.para;
                paraContainer.appendChild(paragraph);
                exampleOfWorkText.appendChild(paraContainer);
            }

            if (element.link) {
                const linkContainer = document.createElement('div');
                const link = document.createElement('a');
                link.classList.add('example-of-work-link');
                link.href = '#';
                link.textContent = element.link;

                const icon = document.createElement('i');
                icon.className = element.icon;

                link.appendChild(icon);
                linkContainer.appendChild(link);
                exampleOfWorkText.appendChild(linkContainer);
            }
        });

        // Create video container
        const exampleOfWorkVideoContainer = document.createElement('div');
        exampleOfWorkVideoContainer.classList.add('example-of-work-video-container');

        // Append videos
        videoData.forEach(element => {
            const videoContainer = document.createElement('div');

            const video = document.createElement('video');
            video.width = 100;
            video.autoplay = true;
            video.src = element.videoSrc;

            const textContainer = document.createElement('div');
            const videoText = document.createElement('p');
            videoText.classList.add('example-of-work-video-text');
            videoText.textContent = element.title;

            const paraContainer = document.createElement('div');
            const videoPara = document.createElement('p');
            videoPara.classList.add('example-of-work-video-para');
            videoPara.textContent = element.description;

            textContainer.appendChild(videoText);
            paraContainer.appendChild(videoPara);

            videoContainer.appendChild(video);
            videoContainer.appendChild(textContainer);
            videoContainer.appendChild(paraContainer);

            exampleOfWorkVideoContainer.appendChild(videoContainer);
        });

        // Append text and video sections to mainBoxofWorkAndVideo
        mainBoxofWorkAndVideo.appendChild(exampleOfWorkText);
        mainBoxofWorkAndVideo.appendChild(exampleOfWorkVideoContainer);

        // Create main video container
        const exampleMainVideoContainer = document.createElement('div');
        exampleMainVideoContainer.classList.add('example-main-video-container');

        const mainVideo = document.createElement('video');
        mainVideo.width = "100%";
        mainVideo.classList.add('example-main-video');
        mainVideo.autoplay = true;
        mainVideo.src = mainVideoSrc;

        exampleMainVideoContainer.appendChild(mainVideo);

        // Append sections to example-of-work
        exampleOfWork.appendChild(mainBoxofWorkAndVideo);
        exampleOfWork.appendChild(exampleMainVideoContainer);

        // Append example-of-work to container
        container.appendChild(exampleOfWork);
    }



    // Example usage:
    const exampleofWorkArray = [
        { "heading": 'Build perfect docs, together.' },
        { "para": 'Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.' },
        { "link": 'Explore docs & notes', "icon": 'fa-solid fa-arrow-right' },
    ];

    const videoData = [
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/write/write-building-blocks.mp4",
            title: "Building blocks",
            description: "100+ content types to communicate any idea.",
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/write/write-collaboration.mp4",
            title: "Collaborative tools",
            description: "Built for teams to share, suggest, and comment.",
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/write/write-ai.mp4",
            title: "AI-assisted",
            description: "Edit, draft, translate. Ask and AI will help.",
        },
    ];

    // Call the function

    createWorkAndVideoCards(
        exampleofWorkArray,
        videoData,
        'https://www.notion.com/front-static/pages/product/super-duper/write/write-screen-desktop.mp4',
        'intro-building-blocks'
    );


    const exampleofWorkArray2 = [
        { "heading": "Your workflow. Your way." },
        {
            "para": "All your projects, goals, calendars, roadmaps, and more—in one tool—personalized to how you and your team work."
        },
        {
            "link": "Explore projects",
            "icon": "fa-solid fa-arrow-right"
        }
    ];

    const videoData2 = [
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-todos.mp4",
            title: "Tasks and to-dos",
            description: "Tackle any project, big or small."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-customizable.mp4",
            title: "Custom views",
            description: "Visualize work in any format, from calendars to boards."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-automations.mp4",
            title: "Automations",
            description: "Put tedious tasks on autopilot."
        }
    ];

    createWorkAndVideoCards(
        exampleofWorkArray2,
        videoData2,
        'https://www.notion.com/front-static/pages/product/super-duper/plan/plan-screen-desktop.mp4',
        'intro-building-blocks-2'
    );


    const exampleOfWorkArray3 = [
        {
            heading: "Find everything. Instantly."
        },
        {
            para: "No more endless searching. Our built-in AI finds what you're looking for, whether it's stored in Notion or one of your other apps."
        },
        {
            link: "Explore knowledge management",
            icon: "fa-solid fa-arrow-right"
        }
    ];

    const videoData3 = [
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-teamspaces.mp4",
            title: "Teamspaces",
            description: "Dedicated spaces for every team & project."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-integrations.mp4",
            title: "Integrations",
            description: "Connected to all your other tools."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-ai.mp4",
            title: "Just ask AI",
            description: "Trusted answers across your apps."
        }
    ];


    createWorkAndVideoCards(
        exampleOfWorkArray3,
        videoData3,
        'https://www.notion.com/front-static/pages/product/super-duper/organize/organize-screen-desktop.mp4',
        'intro-building-blocks-3'
    );



    const exampleOfWorkArray4 = [
        {
            heading: "Get a brain boost."
        },
        {
            para: "Built right into your workspace, Notion AI is ready to brainstorm, summarize, help you write, and find what you’re looking for."
        },
        {
            link: "Try Notion AI",
            icon: "fa-solid fa-arrow-right"
        }
    ];

    const videoData4 = [
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/ai/ai-answers.mp4",
            title: "Instant answers",
            description: "Ask any question about a team’s docs and projects."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/ai/ai-editor.mp4",
            title: "Personalized editor",
            description: "Generate content that’s always relevant."
        },
        {
            videoSrc: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-ai.mp4",
            title: "AI connectors beta",
            description: "Access info from Slack, Google Drive and more, right inside Notion."
        }
    ];


    createWorkAndVideoCards(
        exampleOfWorkArray4,
        videoData4,
        'https://www.notion.com/front-static/pages/product/super-duper/ai/ai-screen-desktop.mp4',
        'intro-building-blocks-4'
    );

});