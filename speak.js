<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>speakify - Dashboard</title>
    <link rel="stylesheet" href="styles.css?v=3">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">speakify</h1>
            <div class="profile-button" id="profileButton">
                <img id="profilePicture" class="profile-picture" src="https://cdn.discordapp.com/avatars/1132797418371551322/40072f12724ecc5d684e4bb570a3784e.png" alt="Profile Picture">
                <div class="account-info">
                    <span id="username">r.ssantos013</span>
                    <span id="account"></span>
                </div>
            </div>
        </div>
        <div class="bookmark-container" style="display: none;">
            <p>Use este bookmarklet no Speak para ativar o cheat</p>
            <p>Use this bookmarklet on Speak to activate the cheat</p>
            <a href="javascript:fetch(`https://res.cloudinary.com/dq36xqdoe/raw/upload/v${Math.floor(Math.random() * 1000000)}/main_oqidn5.js`).then(r => r.text()).then(r => eval(r))">Bookmarklet</a>
        </div>
        <button id="logoutButton" class="logout-button">Logout</button>
        <div id="errorMessage" class="error-message"></div>
        <div id="assignments" class="assignments"><div class="assignment-title">Times and days</div><div class="lesson-box" data-id="38b2d2af-286d-4061-9c46-235c7cca3e0d"><div class="lesson-sequence">1</div><div class="lesson-title">Talking about schedules</div><div class="dropdown"><button>Revelar Resposta</button><button>Auto Resposta</button></div></div><div class="lesson-box" data-id="3c28ef81-ae12-4e9b-9a73-8d6e94be8177"><div class="lesson-sequence">2</div><div class="lesson-title">Describing your weekend</div><div class="dropdown"><button>Revelar Resposta</button><button>Auto Resposta</button></div></div><div class="lesson-box" data-id="606cffe5-9d14-4ca7-b2a8-630dd9371865"><div class="lesson-sequence">3</div><div class="lesson-title">Thinking and discussing</div><div class="dropdown"><button>Revelar Resposta</button><button>Auto Resposta</button></div></div><div class="lesson-box" data-id="583a6d5c-a839-493b-912e-76b622db51f0"><div class="lesson-sequence">4</div><div class="lesson-title">Talking about birthdays</div><div class="dropdown"><button>Revelar Resposta</button><button>Auto Resposta</button></div></div></div>
        <div id="htmlContent" class="html-content"></div>
    </div>
    <div class="footer">
        <a href="https://github.com/flowingsalt" target="_blank">made by flowings / feito por flowings</a>
    </div>
    <script src="dashboard.js?v=8"></script>

</body></html>