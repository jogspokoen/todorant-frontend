export const messages = {
  en: {
    encryption: {
      info:
        'Use this section with the utmost caution! Encryption will not work unless you add a password. There will be two types of tasks: encrypted and unencrypted. All new tasks will be encrypted. Old todos can be converted to be encrypted with the button below. If you lose the password there will be no way to recover tasks.',
      switch: 'Encrypt todos',
      password: 'Password',
      encryptAllButton: 'Encrypt all',
      decryptAllButton: 'Decrypt all',
      confirm:
        'Are you sure you want to encrypt the todos with this password? You will be able to decrypt todos later with the same password. If you lose the password, you will not be able to decrypt todos!',
      disableConfirm:
        'Are you sure you want to remove the key and disable the encryption? This will not decrypt the tasks that are encrypted.',
      errorDecrypting: 'Wrong decryption password',
      repeatPassword: 'Repeat password',
      title: 'Encryption',
    },
    search: 'Search',
    qr: {
      code: 'QR code',
      description: {
        app_login:
          'Use this QR code to login on mobile devices. This picture is a password, do not share it with anyone!',
        web_login:
          'Login in the Todorant mobile app, then go to the Settings, then tap the "Add devices" button under the "Account" section, then scan this QR code to allow login to Todorant here. Remember: this QR code is only valid for 10 minutes!',
      },
    },
    breakdown: {
      request:
        'Looks like you move this task way too much. Please break it down, you can no longer move it to another date. Believe me, it will help to complete the task!',
      button: 'Breakdown',
    },
    warning: 'Warning',
    hashtags: {
      title: 'Hashtags',
      name: 'Hashtag name',
    },
    supportAlert: {
      title: 'Support',
      text:
        'If you have any questions or suggestions, feel free to <a href="mailto:todorant@borodutch.com">send me an email</a>, <a href="https://t.me/borodutch" target="_blank">contact me on Telegram</a> or <a href="https://t.me/todorant_feedback" target="_blank">join our Telegram community group</a>!',
    },
    loginMobile: {
      telegram: {
        headline:
          'Please login with Telegram by entering your Telegram ID in a field below and hitting the "Login" button. You can get your Telegram ID by sending <code>/id</code> to the <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>. Or you can just send <code>/qr</code> to <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a> and scan it in the QR login section!',
        id: '123456789',
        idHint: 'Telegram ID',
        loginButton: 'Login',
        noCredentialsError: 'Please, provide a Telegram ID',
        cannotSendMessageError:
          'Could not send a login request to the user. Please make sure that you started @todorant_bot and that the Telegram ID is correct.',
        waiting:
          'Waiting for the response in <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'Login request was rejected',
      },
    },
    noReport: {
      title: 'No data yet',
      text: 'Go on, complete your first todo and come back!',
    },
    report: {
      title: 'Stats',
      tasksCompleted: 'Tasks completed',
      frogsCompleted: 'Frogs completed',
      share: 'Share this report!',
      hashtag: 'Hashtag',
      shareButton: 'Share',
      url: 'Permanent link to this report',
      shareMessage: 'Check out my productivity report from Todorant!',
      call: 'Want to join?',
      callButton: 'Join Todorant',
      startDate: 'Start date',
      endDate: 'End date',
    },
    title: 'Todorant',
    cookie: {
      button: 'Got it!',
      message: '🍪 This website uses cookies.',
    },
    home: {
      texts: {
        contact: [
          'Still got questions? Contact me directly at ',
          '. Thank you.',
        ],
      },
      signIn: 'Sign in',
      facebook: 'Login with Facebook',
      google: 'Login with Google',
      privacy: 'Privacy policy',
      feedback: {
        title: 'What do the users say?',
        reviews: [
          {
            name: 'Sergey Romanov',
            username: 'Gendoor',
            text:
              'Messages in the subscription part are cute :)\n\nThank you for the simple service thriving for the ideal. Turned out that it not only helps to be productive but also proactive. Little daily improvements confidently enhance life, and the free mind is constantly looking how to fill now emptied todo list so that it could feel the pleasure of completing tasks again and again — and it is a direct route towards improving everything surrounding me.\n\nAll in all, Todorant, no matter how simple at first glance, can become a faithful ally in any business. Thank you, Nikita, for unleashing the aspects of true productivity and sharing them with us in a convenient solution.\n\nThankful Todorant subscriber.',
          },
          {
            name: 'Dinislam Sad',
            username: 'Azerzet',
            text:
              "The main advantages that I, and I'm sure others, liked.\n1. Simple and convenient interface.\n2. Missed tasks automatically become frogs, and an option to make a task a frog initially.\n3. /done command is a must, and thank you for it, Nikita. I used Todoist, Wunderlist, Bitrix24. All of them are overcomplicated.\n4. Telegram bot.",
          },
          {
            name: 'Aleksei Kaut',
            username: 'aleksei_kaut',
            text:
              'After I created the first tasks and switched to the "Current" tab — I was surprised that I had only one task and that I needed to complete it before moving on. This idea with one task and concentration on it struck me, it seems obvious, but I couldn\'t use it before.\n\nI usually tracked tasks and ideas in Notes, which should be done soon, but I did not approach it as a system. I have been using the service for a couple of weeks, not very actively, but I think this is a very strong way to systemize the affairs and tasks.\n\nThank you for your work!',
          },
          {
            name: 'Anton',
            username: 'mas1311',
            text:
              'Tested Todorant. At first, I was skeptical (I tried a lot of planning services already), but I realized that it works effectively and is very easy to use.\n\nPlus, for reasons unknown to me, when all the tasks are completed for the day, strong satisfaction appears, which was absent in other planners (there was something like "well, that was everything... or not?").\n\nThank you for your work!',
          },
          {
            name: 'Willsey Paslen',
            username: 'WillseyPaslen',
            text:
              'Thanks for the great service. Enough time has passed so that I can say — it helps me. Thanks, Nikita 😁 And good luck with the app.',
          },
          {
            name: 'Igor Malinkin',
            username: 'sxe4kilo',
            text:
              'I started to do at least something with Todorant, so my productivity went up from 0.',
          },
          {
            name: 'Vladimir Dubenko',
            username: 'dubenko_v',
            text:
              "Your service is awesome in terms of at least three things:\n1. Convenient — it is minimalistic!\n2. It instills a habit.\n3. Strange as it may seem, it doesn't force you to think rationally.\n\nI'm irrational by nature, I can't just lead 1 project (I burn out quickly). My life is multitasking! 3 projects in parallel are easy, but 3 is not enough... 7 sounds more like it. And your service allows you to achieve this. It is the alternation of tasks that prevents the brain from burning out in one particular direction. And somehow, magically, it alternates tasks from one project to another.",
          },
          {
            name: 'Maksim Alekseyevich',
            username: 'MMAradiology',
            text:
              'I can\'t say that using Todorant changed my life. Can I say that this is a meaningful and very useful application/website? Yes, thousand times yes.\n\nI like Todorant, it lets me free up my "operating memory" and allows me to think about solving problems, not about remembering them. As Nikita (the creator) correctly wrote — with constant and correct use, tasks that used to cast true biblical fear will stop appearing. And this will not happen because the complex tasks will stop coming. It will become clear to you (and to me, and everyone) that "the road will be overpowered by those walking", "the way to the thousand miles begins with one step".',
          },
          {
            name: 'Kiku Reise',
            username: 'Kiku_Reise',
            text:
              "I've arranged my work, programming and hobby tasks. Even this review was written thanks to Todorant. Just one task, no complications. That's the whole point of the app — it helped me to concentrate without constantly shuffling my todos.\n\nOf course, you can set tasks and forget about them, but for me, it's easier to go back to a minimalistic application with one task, rather than to spend half a day looking for what task to work on now out of a hundred planned in Telegram or Notion.\n\nI was especially pleased with the update with hashtags — now all stats are on the palm of my hand, I can track and share with friends how many tasks I have completed this month.\n\nThank you a lot for Todorant!",
          },
        ],
      },
      act: 'Act!',
      apple: 'Login with Apple',
      crossplatform: {
        title: 'Truly cross-platform',
      },
      mobile: 'Login with mobile app',
    },
    menu: {
      darkMode: {
        on: 'Dark mode: on',
        off: 'Dark mode: off',
      },
      logout: 'Logout',
    },
    support:
      'Something isn\'t clear? Contact me at <a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'Could not log in with Facebook',
        google: 'Could not log in with Google',
        telegram: 'Could not log in with Telegram',
        apple: 'Could not log in with Apple',
        mobile: 'Could not log in with mobile app',
      },
      internal: 'Internal server error',
      loadTodos: 'Could not fetch todos',
      todo: {
        textLenght: 'Todos should have text',
        dateOrMonth: 'Todos should have either date or month set',
        more1500: "Todos can't have more than 1500 characters.",
      },
      invalidForm: 'Please, fill in the required fields',
      report: 'Could not load report',
      appleFirefox:
        'Unfortunately, there is <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1628361">a bug</a> with Apple sign-in on Firefox. Until it is resolved, please, use other web browsers to login with Apple — and then merge it with other social accounts on Todorant. Sorry for the inconvenience.',
      delegate: {
        invalidToken: 'Invite link is no longer valid',
      },
      epic: {
        numberError: 'Should be a number',
        greaterThanZeroError: 'Should be greater than 0',
      },
      tag: {
        whitespaces: "Tags shouldn't contain spaces",
      },
    },
    close: 'Close',
    notFound: 'Page not found',
    todo: {
      create: {
        title: 'Add todos',
        text: 'Text of the todo',
        textHint: 'You can add a link to an email or a website',
        placeholder: 'Todo',
        frog: "It's a frog!",
        date: 'Exact day',
        month: 'Or month',
        tooltip:
          'Tasks should always be: actionable ("Find best flights to Mexico" vs "Go to Mexico"); as small and exact as possible ("Dust the displays" vs "Clean the house").',
        goFirst: 'Add on the top',
      },
      list: {
        completed: 'Show completed',
        delegated: 'Show the tasks that I delegated',
      },
      edit: {
        title: 'Edit',
      },
    },
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    deleteHeadline: 'Are you sure you want to delete "{name}"?',
    current: 'Current',
    planning: 'Planning',
    created: 'Created',
    breakdownInfo: 'Use breakdown when the current task is too broad',
    howto: {
      title: 'How to use Todorant?',
      premise:
        'Below are the main principles that you should follow to productively exploit all the features provided by Todorant. It is easy as 1-2-3, just with a few more steps.',
      bonus: {
        title: 'Bonus features',
        rules: [
          'Use keyboard shortcuts when on desktop! You can (a)dd, (b)reakdown, switch to (c)urrent, mark as (d)one and switch to (p)lanning. To add an additional task slot while adding tasks, you can use Ctrl+Shift+A.',
        ],
      },
    },
    skipped: 'Skipped',
    moveUp: 'Move to today',
    settings: {
      title: 'Settings',
      showTodayOnAddTodo: 'Default to today when creating a todo',
      firstDayOfWeek: 'First day of the week',
      newTodosGoFirst: 'New todos are added on top of the list',
      preserveOrderByTime: 'Preserve exact time order',
      general: 'General',
      integrations: 'Integrations',
      connected: 'Connected',
      notConnected: 'Not connected',
      googleCalendar: 'Google Calendar',
      disconnectConfirm: 'Are you sure you want to disconnect this service?',
      account: 'Account',
      duplicateTagInBreakdown: 'Copy hashtags during a breakdown',
      export: 'Export data',
      hotkeys: 'Hotkeys',
      startTimeOfDay: 'Start of the day',
      username: 'Name',
      telegram: 'Telegram',
      coloredCardBackgrounds: 'Color tasks with hashtag colors',
      newLineOnReturn: 'Insert new line on enter',
      removeCompletedFromCalendar:
        'Remove completed todos from Google Calendar',
    },
    allDoneTitle: 'Congratulations!',
    allDoneText:
      '🥳 You did it! All the tasks for today are done, go get rest or maybe dance a little 💃',
    noTodosTitle: 'To infinity!',
    noTodosText:
      "You don't have any todos for today. If you want to work — add a new todo for today or take the todos from future days.",
    addTodoTime: 'Exact time',
    completed: 'Completed',
    planningText:
      'Looks like you have some planning to do! Please, redistribute the outstanding tasks below to unlock the "Current" tab and to keep being productive. Cheers!',
    rules: [
      'As soon as you get an actionable task (receive an email, phonecall, text, or if you see anything of interest that has to be put on your todo list) — create a todo for it right away. Do not wait, you will forget about it if you do not take it down.',
      'Todos should always be actionable and as explicit as possible. If a task takes less than 2 minutes, then do it right away and record it as completed.',
      'You either add a specific date or select a month while creating a todo. You cannot pick current month without selecting a specific date. This is done to relax your mind. If you trust the system and put everything that needs to be done on the correct date — you will encounter it at the right time. Huge amount of willpower is wasted on being constantly stressed about "that other thing that I need to deal with but I am not quite sure what it was". Learn to trust and relax.',
      'First thing you do each month is planning ahead. You take all the tasks assigned to the current month and you sort them in the correct dates. It allows you to filter out outdated tasks and keep your mind in peace with, knowing exactly what you need to do this month.',
      'First thing you do in the morning is planning your day. Have a glance at your Planning section. Can you handle everything? Distribute tasks that cannot be dealt with today. Redistribute any tasks left undone from the previous days.',
      'Unless it is an emergency, do not look at the planning section after you have finished planning. It will be way better psychologically if you only focus on one task, so keep your eyes on the Current section. Trust the system, it remembers everything. Do your job and relax your mind.',
      'Current section contains only one task that you need to focus on — nothing else. You can have more than one task a day, the amount of tasks as well as progress bar is displayed for your convenience. You are not allowed to jump between tasks — you should deal with every task linearly, one by one.',
      'Frogs are special types of tasks you generally do not want to deal with. Usually they are the tasks left behind for months and even years. Todorant ensures that you handle frogs first thing every day. In the morning your willpower reserve is large enough to handle even the most outrageous tasks. And after you finally deal with a frog — you receive just enough happiness to be smiling throughout the whole day. You feel proud of yourself when you deal with frogs.',
      'You are allowed to skip current task — but try to do so as rarely as possible. You cannot skip a frog. If you failed to complete a task and had to redistribute it twice, it becomes a frog.',
      'If the current task is too high level, then break it down to a list of subtasks. As soon as you break it down, the task is marked as completed.',
      'Add as much relevant information about the todo as possible. Add links to specific emails (gmail on web allows you to do this), websites, notes (like evernote), documents (like dropbox), leave phone numbers or add any information you might need to complete the task. Todorant is not meant to be a point of reference for you — instead it should act as a catalogue of links to the reference information relevant to specific todos.',
      'Feel free to join our multi-language group on Telegram to share experience and tricks on how to be more productive — @todorant_feedback! Your feedback about the service — suggestions, wishes and complaints — are highly welcome.',
      'Use the edit mode (the list order icon on top) on the Planning page to change the task order. If you want to assign a task to a specific week, just assign it to Monday and reassign it during the planning phase on Monday morning.',
      'Todorant does not have and will never have repeating tasks — the only thing they do well causing anxiety by hanging over you as unfinished tasks. If you need to complete repeating tasks — add all of them manually, your brain will thank you for conscious tasks.',
      'Todorant does not have the concept of "Projects" as it has proven itself to be demotivating, some of the "folder" never get open. Projects "Fitness" and "Self-improvement" send their regards. Instead, use #hashtags.',
      'Frogs will always appear on the top of the list.',
      'Todorant does not have notifications about the upcoming tasks with the exact time set. However, feel free to use Google Calendar integration so that Google can annoy you with notifications, not Todorant.',
    ],
    earlyAdopter: 'Early adopter 🦄',
    active: 'Active',
    inactive: 'Inactive',
    trial: 'Trial',
    weekday1: 'Monday',
    weekday2: 'Tuesday',
    weekday3: 'Wednesday',
    weekday4: 'Thursday',
    weekday5: 'Friday',
    weekday6: 'Saturday',
    weekday0: 'Sunday',
    introTitle: 'Welcome!',
    introButton: 'Intro message',
    introBack: "Let's go!",
    back: 'Back',
    soundEffects: 'Sound effects',
    emptyHashtags:
      'Hashtag list is empty for now. Create your first task with a #hashtag to add the first hashtag here!',
    refreshRequest:
      'There is a new version of Todorant available. Please refresh the page to get the new shiny stuff 🦄',
    refresh: 'Refresh',
    heroProfileTitle: 'Hero profile',
    infoHero:
      "This is the profile page of you — the hero! Complete tasks and earn points to achieve higher and higher ranks!\n\nYou won't know the whole list of ranks until you achieve the highest! Remember: the only way to get to the top is through the everyday sequence of small steps.",
    rank: '🔥 Your rank 🔥',
    'rank-1Title': 'Dark matter infinity being 😈',
    'rank-1Description':
      "You have achieved the rank no human was able to achieve before! Congratulations, here is your pie: 🍰. It's not a lie this time.",
    rank0Title: 'Subzero −273.15 °C 🥶',
    rank0Description: "It'd be a lot cooler if it could.",
    rank5Title: 'V is for Vroductivive 👺',
    rank5Description:
      'Remember kids, if you drop productivity for less than 5 seconds and pick it up, you are safe!',
    rank13Title: 'Happy Freddy 😱',
    rank13Description:
      'You know what day it is. It is the day Jason bakes a cake for you. Every day is this day now.',
    rank42Title: 'Fisher 🐬',
    rank42Description: 'So long! And thanks for all the fish!',
    rank69Title: 'Nice master! 😝',
    rank69Description: 'The nicest rank there is. Period.',
    rank85Title: 'Mark-85 🦄',
    rank85Description: 'One can say your productivity is made of Iron.',
    rank100Title: '100% force user ⚡️',
    rank100Description:
      '100 done, infinity to go! Keep going every day, it is worth it!',
    rank221Title: 'Sherlock 😎',
    rank221Description: 'You solved the productivity, well, good for you!',
    rank256Title: 'Happy plumber 👾',
    rank256Description:
      '8 bits of productivity later you still think of good old games.',
    rank300Title: 'Spartan 💪',
    rank300Description:
      'Clear your mind, simplify the routines, spend the next 100 points as a true Spartan!',
    rank404Title: '❓❓❓',
    rank404Description: 'Rank not found.',
    rank777Title: 'Lucky grandmaster! 🍀',
    rank777Description:
      'This rank only lasts 23 points. Make it count, it is your lucky day!',
    rank800Title: 'T-800 🤖',
    rank800Description:
      'You are the terminator of dreadful frogs. Go terminate a few!',
    rank1337Title: '3L1T3 🧑‍💻',
    rank1337Description: 'Productivity hacking is initiated... Hacking...',
    rank1338Title: '3L1T3 (Hacked) 🧑‍💻',
    rank1338Description: 'Hacked productivity successfully!',
    rank2048Title: 'Chess master ♔',
    rank2048Description:
      'You prefer productivity over endless pointless time-killing games, right? RIGHT?',
    rank9000Title: 'Over 9000 power user 🏋️',
    rank9000Description: 'You lift the tasks like they are nothing!',
    rank12800Title: 'Doctor Manhattan ⚛',
    rank12800Description:
      'You breakdown the tasks like you split the atoms. Keep up the good work!',
    homeShort: {
      headline: 'Productivity systems fail.',
      headline2: 'Todorant works.',
      feature1: 'Focus on one task at a time',
      feature2: 'Always add a date or a month to a task',
      feature3: 'Complete unpleasant tasks (frogs) first',
      feature4: 'Keep your inbox empty',
      differenceTitle: "What's the difference?",
      differenceText1:
        'All other productivity apps focus on storing, organizing and automating endless lists of tasks. Todorant focuses on the only thing that matters: it makes you complete the tasks.',
      differenceText2:
        'Todorant uses a carefully crafted set of limits and praise to punish bad behaviour and support good habits. It affects the primitive part of the brain to make it crave completing todos like people crave sugar.',
      differenceText3:
        "I've read and tried 20+ productivity books and methodologies. When all of them failed one by one I combined their components and simplified the result. This is how Todorant was created.",
    },
    googleCalendarDisableSuccess: 'Google Calendar disabled',
    googleCalendarEnableSuccess: 'Google Calendar enabled',
    spread: {
      hint:
        'Choose tasks to spread, choose dates to spread over, press a button and see how selected tasks spread evenly between the selected dates',
      spreading: 'Spreading',
      chooseTasks: 'Click on the tasks to spread',
      between: 'between',
      chooseDates: 'Click on the dates to spread over',
    },
    level: 'Level',
    points: 'points',
    pointsTillNextLevel: 'points to unlock the next level',
    accept: 'Accept',
    delegate: {
      title: 'Delegation',
      noDelegators:
        "You don't have any delegators yet. Ask for an invite link to become someone's delegate.",
      noDelegates:
        "You don't have any delegates yet. Share the invite link with the people who you want to make delegates",
      noDelegatedTasks: "You don't have any more newly delegated tasks.",
      link: 'Delegate invite link',
      linkDescription:
        'People can become your delegates by following this link. Delegates will only see the tasks that you delegated to them.',
      resetConfirmation:
        "Are you sure that you want to reset the link? The current link won't work anymore!",
      delegators: 'Delegators',
      delegates: 'Delegates',
      inviteSuccess: 'Success! Now this user can delegate tasks for you.',
      inviteConfirm: 'Are you sure you want to become a delegate of this user?',
      deleteDelegateConfirmation:
        'Are you sure you want to delete this delegate? You will no longer be able to delegate tasks to this delegate.',
      deleteDelegatorConfirmation:
        'Are you sure you want to delete this delegator? This delegator will no longer be able to delegate tasks to you.',
      pickDelegateField: 'Delegate',
      noDelegatorsShort: "You don't have any delegators yet",
      noDelegatedTasksTo: "You haven't delegated any tasks yet.",
      noDelegatesShort: "You don't have any delegates yet",
    },
    epic: {
      intoEpic: 'Make an Epic',
      epicGoal: 'Epic goal',
      name: 'Epic name',
      epicForeword:
        'Select the number of tasks that has to be completed with this hashtag. This will turn the hashtag into an epic. The epic progress will be displayed on the Current page.',
    },
    success: 'Success!',
    notLogginedBody: 'Please, login at ',
    settingsActions: {
      swipeActions: 'Swipe actions',
    },
    cannotLoadTitle: 'Uh oh!',
    cannotLoadText: 'Could not load your todos, maybe the Internet is down?',
    deleteAllHashtagsConfirm: 'Are you sure you want to delete all hashtags?',
    deleteAll: 'Delete all',
    apps: 'Apps',
    next: 'Next',
    letsGo: "Let's go!",
    introText0:
      "Hi there! It's Nikita, the creator of Todorant. I'm so glad you've downloaded Todorant because it means that you too will soon benefit from unlimited productivity.",
    introText1:
      'Most of the people who end up here are like me: tried what feels like all productivity tools but none of them were just right.',
    introText2:
      'Let me show you how Todorant became the last and the only productivity tool for me and what will happen to you in the next 3-4 weeks. Just scroll or use the buttons on the bottom!',
    introText3:
      "First thing that will happen to you after you enter all of your tasks to Todorant will be that it will seem to others like you can remember everything. You won't need to do anything extra, the system will just work.",
    introText4:
      "This is why my wife loves the fact that I use Todorant. Before, I kept forgetting things and obligations that didn't seem important to me, but were important for my wife.",
    introText5:
      "Now every time I make a commitment or a promise, I add it to Todorant and when the time comes, I'm aware of what needs to be done and can plan accordingly.",
    introText6:
      'Second thing that will happen to you will be the ease of mind. You will stop stressing out about undone tasks and tasks you think you forgot about.',
    introText7:
      'You will always know what you need to be working on at any moment and will stay in the "Flow Zone" longer achieving goals and completing tasks.',
    introText8:
      "Even though I support over a dozen services used by more than 20 000 000 people, I never feel stressed anymore. I always have the current task in front of me and I'm always aware that if I make progress then I'll achieve the goal eventually.",
    introText9:
      'Third thing that will happen to you will be a super-human like planning power. You will be able to accurately estimate the length and the ETA of any task.',
    introText10:
      'Every time a colleague or a friend asks me when a particular thing will be done, I always check Todorant and see when the task is scheduled to be worked on. Most of the time, I can accurately give them estimates that are quite realistic.',
    introText11:
      'I personally never have to rush anything now. I never have to have "crunch time" anymore! I complete tasks at a comfortable pace and people around can trust me.',
    introText12:
      'Know that you are in a good company. Thousands of users trust their productivity to Todorant daily, myself included.',
    introText13:
      'If you ever have any questions about the app — just click on the "i" button in the top right. If you can\'t find an answer there, find my personal contacts under the "Support" section in the settings and shoot me a message!',
    introText14:
      'There is one more thing to note though! To fully control superpower, you need to learn how to use it. Make sure to read "How to use Todorant" in the settings!',
    introText15:
      'Good luck with Todorant! I hope it will transform your life to the better as it did mine!',
    introText0web:
      "Hi there! It's Nikita, the creator of Todorant. I'm so glad you've decided to try Todorant because it means that you too will soon benefit from unlimited productivity.",
    introText2web:
      'Let me show you how Todorant became the last and the only productivity tool for me and what will happen to you in the next 3-4 weeks. Just use the buttons on the bottom to advance!',
    introText14web:
      'There is one more thing to note though! To fully control superpower, you need to learn how to use it. Make sure to read "How to use Todorant" by tapping the info button in the top right corner!',
    edit: 'Edit',
    settingsObject: {
      showMoreByDefault: 'Show more when adding todos by default',
    },
    googleCalendarHint:
      'Only the tasks created in Todorant with an exact time will be synced to Google Calendar',
    googleCalendarGotIt: 'Got it!',
    frogsAlert: {
      title: "Stop! It's illegal",
      text:
        "Don't break the rules. If you have any frogs today — finish them first, break them down, move them to future days or remove the frog flag from them. Please, just don't ignore the frogs!",
    },
    to: 'To',
    from: 'From',
    unEpicInfo: 'Reset epic',
    unEpicConfirm: 'Are you sure you want to reset the epic?',
    breakdownMessage: {
      title: 'Repetitive task',
      text:
        'This is a repetitive task, do you want to break down it or complete it?',
      complete: 'Complete',
    },
  },
  ru: {
    encryption: {
      info:
        'Используйте эту секцию с максимальной осторожностью! Шифрование не будет работать, если вы не введете пароль. Дальше будет два типа задач: зашифрованные и незашифрованные. Все новые задачи будут зашифрованными. Старые задачи можно будет зашифровать, нажав на кнопку ниже. Если вы потеряете пароль, восстановить задачи будет невозможно.',
      switch: 'Шифровать задачи',
      password: 'Пароль',
      encryptAllButton: 'Зашифровать все',
      decryptAllButton: 'Расшифровать все',
      confirm:
        'Уверены, что хотите шифровать все задачи паролем? Вы сможете расшифровать задачи этим же паролем. Если вы потеряете пароль, у вас не получится расшифровать задачи!',
      disableConfirm:
        'Уверены, что хотите убрать пароль и выключить шифрование? Это действие не расшифрует зашифрованные задачи.',
      errorDecrypting: 'Неправильный пароль расшифровки',
      repeatPassword: 'Повторите пароль',
      title: 'Шифрование',
    },
    search: 'Поиск',
    qr: {
      code: 'QR код',
      description: {
        app_login:
          'Используйте этот QR код, чтобы войти в вашу учетную запись на мобильных устройствах. Это изображение — пароль, никому его не передавайте!',
        web_login:
          'Залогиньтесь в мобильном приложении Тудуранта, зайдите в Настройки, нажмите на "Добавить устройства" в секции "Аккаунт" и просканируйте этот QR код для того, чтобы разрешить войти в вашу учетную запись в браузере. Помните: этот QR код работает только 10 минут!',
      },
    },
    breakdown: {
      request:
        'Похоже, вы переносите эту задачу слишком часто. Пожалуйста, разбейте ее на более мелкие задачи, вы больше не можете ее переносить. Поверьте, это поможет вам завершить задачу!',
      button: 'Разбить',
    },
    warning: 'Внимание',
    hashtags: {
      title: 'Хештеги',
      name: 'Название хештега',
    },
    supportAlert: {
      title: 'Поддержка',
      text:
        'Если у вас есть какие-либо вопросы или предложения, <a href="mailto:todorant@borodutch.com">напишите мне имеил</a>, <a href="https://t.me/borodutch" target="_blank">в Телеграм</a> или <a href="https://t.me/todorant_feedback" target="_blank">присоединитесь к нашей группе сообщества в Телеграме</a>!',
    },
    loginMobile: {
      telegram: {
        headline:
          'Пожалуйста, зайдите через Телеграм, введя свой Телеграм ID в поле ниже и нажав "Войти". Вы можете узнать свой Телеграм ID, отправив <code>/id</code> в <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>. Или вы можете отправить команду <code>/qr</code> в <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a> и просканировать его в секции логина через QR код!',
        idHint: 'Телеграм ID',
        loginButton: 'Войти',
        noCredentialsError: 'Пожалуйста, укажите Телеграм ID',
        cannotSendMessageError:
          'Не получилось отправить запрос на логин пользователю. Пожалуйста, убедитесь, что вы начали чат с @todorant_bot и что Телеграм ID правильный.',
        waiting:
          'Ожидаем ответа в <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'Запрос на вход был отвергнут',
      },
    },
    noReport: {
      title: 'Недостаточно данных',
      text: 'Давайте, выполните свою первую задачу и возвращайтесь сюда!',
    },
    report: {
      title: 'Отчет',
      tasksCompleted: 'Задач завершено',
      frogsCompleted: 'Лягушек завершено',
      share: 'Поделитесь отчетом с друзьями!',
      hashtag: 'Хештег',
      shareButton: 'Поделиться',
      url: 'Постоянная ссылка на этот отчет',
      shareMessage: 'Посмотрите на мой отчет продуктивности в Тудуранте!',
      call: 'Хотите присоединиться?',
      callButton: 'Присоединиться к Тудуранту',
      startDate: 'Дата начала',
      endDate: 'Дата конца',
    },
    title: 'Тудурант',
    cookie: {
      button: 'Понятненько!',
      message: '🍪 Этот веб сайт использует печеньки.',
    },
    home: {
      texts: {
        contact: ['Остались вопросы? Напишите мне на ', '. Спасибо.'],
      },
      signIn: 'Войти',
      facebook: 'Войти через Фейсбук',
      google: 'Войти через Гугл',
      privacy: 'Политика конфиденциальности',
      feedback: {
        title: 'Что говорят пользователи?',
        reviews: [
          {
            name: 'Sergey Romanov',
            text:
              'Милые сообщения в разделе подписки Тудуранта :)\n\nБлагодарю за простой и стремящийся к идеальному сервис. Оказалось, что он помогает быть не только продуктивным, но и проактивным. Маленькие улучшения каждый день уверенно подтягивают за собой отстающие звенья, а свободный от задач разум постоянно ищет, чем бы заполнить опустевший список задач, чтобы снова и снова получать удовольствие от их выполнения и связанных с этим перемен — и это прямой путь к улучшению всего, что меня окружает.\n\nВ общем, Тудурант, каким бы простым он ни казался на первый взгляд, способен стать верным соратником в любых делах. Спасибо, Никита, что осознал аспекты истинной продуктивности и поделился ими с нами в удобном решении.\n\nБлагодарный подписчик Тудуранта.',
          },
          {
            name: 'Dinislam Sad',
            text:
              'Главные плюсы, которые лично мне да и уверен остальным также понравились.\n1. Простой и удобный интерфейс.\n2. Пропущенные задачи автоматически становятся лягушками, и также возможность изначально отметить задачу "лягушкой".\n3. Категория /done это просто необходимость, и спасибо за это, Никита. Я юзал Тудуист, Вундерлист, Мои Дела. Все эти программы перегруженные слишком.\n4. Телеграм бот.',
          },
          {
            name: 'Aleksei Kaut',
            text:
              'После того как создал первые задачи и переключился на вкладку "Текущие" — офигел от того, что передо мной только одна задача и что надо завершить ее перед тем как идти дальше. Эта идея с одной задачей и концентрацией на ней меня поразила, вроде очевидно, но раньше так не мог.\n\nЯ обычно писал в Notes задачи и идеи, что нужно сделать в ближайшем времени, но не подходил к этому как к системе. Пользуюсь сервисом пару недель и не очень активно, но думаю это очень сильный подход к систематизации дел и задач.\n\nСпасибо за твою работу!',
          },
          {
            name: 'Anton',
            text:
              'Протестировал тудурант. Сначала был скепсис (уж очень много перепробовал сервисов по планированию), но понял, что действительно эффективно работает и очень прост в использовании.\n\nПлюс, по неизвестной мне причине, когда выполняются все задачи на день появляется мощная гордость и удовлетворение, что отсутствовало в других планировщиках (там было что то в формате "ну вроде все.. или нет?").\n\nСпасибо за твои работы!',
          },
          {
            name: 'Willsey Paslen',
            text:
              'Спасибо за отличный сервис. Прошло достаточно времени, чтобы точно можно было сказать — мне он помогает. Спасибо, Никита 😁 И удачи с приложением.',
          },
          {
            name: 'Игорь Малинкин',
            text:
              'с Тударантом я хоть что-то начал делать, так что моя производительность поднялась с 0.',
          },
          {
            name: 'Владимир Дубенко',
            text:
              'Твой сервис потрясный в плане, как минимум, трех вещей:\n1. Удобен — вот реально ничего лишнего!\n2. Прививает привычку, как ты там писал в каком-то из постов, прям с языка снял в тот момент: мы — это набор привычек.\n3. Как ни странно, не заставляет рационально мыслить.\n\nЯ по своей натуре иррационален, я не могу просто вести 1 проект (я быстро выгораю). Я живу только многозадачностью! 3 проекта параллельно легко, но мало... 7 — вот это интересней. И твой сервис позволяет этого достигать. Именно чередование задач не дает возможности мозгу выгорать в одном конкретном направлении. А каким-то магическим образом чередует задачи с одного проекта на другой.',
          },
          {
            name: 'Maksim Alekseyevich',
            username: 'MMAradiology',
            text:
              'Сказать, что пользование Тудурантом изменило мою жизнь, я не могу. Сказать, что это значимое и очень полезное приложение/сайт? Да, хоть тысячу раз.\n\nМне Тудурант нравится, и он позволяет освободить свою "операционную память", позволить себе мыслить над решением проблемы, а не над её запоминанием. Как правильно написал Никита (создатель) — при постоянном и правильном использовании перестанут появляться задачи, которые раньше внушали поистине библейский страх. И это будет происходит не из-за того, что перестают поступать сложные задачи. Тебе (и мне, и всем) станет понятно — "дорогу осилит идущий", "путь в тысячу ли начинается с одного шага".',
          },
          {
            name: 'Kiku Reise',
            text:
              'Я разгрузил свои задачи по работе, программированию и хобби. И даже этот отзыв написал благодаря фокусу от Тудуранта. Всего одна задача, никаких усложняющих приоритетов. В этом вся фишка сервиса — он помог мне сконцентрироваться, и не распыляясь поочередно выполнить таски.\n\nКонечно, можно проставить задачи и забить, но лично мне проще возвращаться к минималистичному приложению с одной задачкой, нежели пол дня искать в сохраненках Телеграма или Notion какую бы задачу сейчас выполнить из сотни запланированных.\n\nОсобенно порадовало обновление с хештегами — теперь вся статистика как на ладони, могу трекать и делиться с друзьями сколько задач по разработке я выполнил в этом месяце.\n\nБольшое спасибо за Тудурант!',
          },
        ],
      },
      act: 'Действуйте!',
      apple: 'Войти через Эппл',
      crossplatform: {
        title: 'По-настоящему кросс-платформенный',
      },
      mobile: 'Войти через мобильное приложение',
    },
    menu: {
      darkMode: {
        on: 'Темная тема: вкл',
        off: 'Темная тема: выкл',
      },
      logout: 'Выйти',
    },
    support:
      'Что-то непонятно? Пишите мне на <a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'Не получилось зайти через Фейсбук',
        google: 'Не получилось зайти через Гугл',
        telegram: 'Не получилось зайти через Телеграм',
        apple: 'Не получилось зайти через Эпл',
        mobile: 'Не получилось зайти через мобильное приложение',
      },
      internal: 'Внутренняя ошибка сервера',
      loadTodos: 'Не получилось загрузить задачи',
      todo: {
        textLenght: 'Задачи должны иметь текст',
        dateOrMonth: 'Задачам нужно выставлять либо точную дату, либо месяц',
        more1500: 'Задача не может иметь более 1500 символов',
      },
      invalidForm: 'Пожалуйста, заполните необходимые поля',
      report: 'Не получилось загрузить отчет',
      appleFirefox:
        'К сожалению, это <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1628361">баг</a> в Firefox. Пока его не поправят, пожалуйста, используйте другой браузер для логина через Эппл — а после объедините аккаунты с другими соцсетями в Тудуранте. Прошу прощения за неудобства.',
      delegate: {
        invalidToken: 'Ссылка-приглашение больше не работает',
      },
      epic: {
        numberError: 'Должно быть цифрой',
        greaterThanZeroError: 'Должно быть больше 0',
      },
      tag: {
        whitespaces: 'В теге не должно быть пробелов',
      },
    },
    close: 'Закрыть',
    notFound: 'Страница не найдена',
    todo: {
      create: {
        title: 'Добавить задачи',
        text: 'Текст задачи',
        textHint: 'Сюда можно добавить ссылку на имеил или веб сайт',
        placeholder: 'Задача',
        frog: 'Это лягушка!',
        date: 'Точный день',
        month: 'Или месяц',
        tooltip:
          'Задачи должны быть: указывающими на следующее действие ("Найти лучшие билеты в Мексику на агрегаторе билетов", а не "Полететь в Мексику"); наиболее маленькими и понятными ("Протереть дисплей", а не "Прибраться дома").',
        goFirst: 'Добавить наверх',
      },
      list: {
        completed: 'Показать завершенные',
        delegated: 'Показать делегированные мной задачи',
      },
      edit: {
        title: 'Редактирование',
      },
    },
    cancel: 'Отменить',
    save: 'Сохранить',
    delete: 'Удалить',
    deleteHeadline: 'Вы уверены, что хотите удалить "{name}"?',
    current: 'Текущее',
    planning: 'Планирование',
    created: 'Создано',
    breakdownInfo: 'Используйте разбивку, если текущая задача слишком широкая',
    howto: {
      title: 'Как пользоваться Тудурантом?',
      premise:
        'Ниже описаны основные принципы, которых вы должны придерживаться, чтобы максимально продуктивно пользоваться всеми функциями Тудуранта. Это просто, как 1-2-3, просто на несколько шагов побольше.',
      bonus: {
        title: 'Бонусные функции',
        rules: [
          'Пользуйтесь шорткатами на клавиатуре на десктопе! Вы можете (a) — добавить, (b) — разбить, переключиться на (c) — текущее, пометить как (d) — выполненное и переключиться на (p) — планирование. Чтобы добавить дополнительную задачу, когда добавляете задачи, пользуйтесь Ctrl+Shift+A.',
        ],
      },
    },
    skipped: 'Пропущено',
    moveUp: 'Перенести на сегодня',
    settings: {
      title: 'Настройки',
      showTodayOnAddTodo:
        'Устанавливать сегодняшнюю дату автоматически при создании задачи',
      firstDayOfWeek: 'Первый день недели',
      newTodosGoFirst: 'Новые задачи добавляются в начало списка',
      preserveOrderByTime: 'Следить за порядком задач с точным временем',
      general: 'Общее',
      integrations: 'Интеграции',
      connected: 'Подключено',
      notConnected: 'Не подключено',
      googleCalendar: 'Google Calendar',
      disconnectConfirm: 'Уверены, что хотите отключить этот сервис?',
      account: 'Аккаунт',
      duplicateTagInBreakdown: 'Копировать хештеги при разбивке',
      export: 'Экспорт данных',
      hotkeys: 'Горячие клавиши',
      startTimeOfDay: 'Начало дня',
      username: 'Имя',
      telegram: 'Телеграм',
      coloredCardBackgrounds: 'Окрашивать задачи цветами хештегов',
      newLineOnReturn: 'Переносить строку на enter',
      removeCompletedFromCalendar:
        'Удалять задачи из Гугл Календаря после выполнения',
    },
    allDoneTitle: 'Поздравляем!',
    allDoneText:
      '🥳 Вы это сделали! Все задачи на сегодня выполнены, идите отдохните — ну или потанцуйте немного 💃',
    noTodosTitle: 'Вперед!',
    noTodosText:
      'На сегодня у вас нет задач. Хотите поработать — добавьте новые задачи на сегодня или заберите задачи с других дней.',
    addTodoTime: 'Точное время',
    completed: 'Завершено',
    planningText:
      'Похоже, вам нужно заняться планированием! Пожалуйста, перераспределите оставшиеся задачи ниже для того, чтобы разблокировать секцию "Текущее", и для того, чтобы оставаться продуктивными. Удачи!',
    rules: [
      'Как только у вас появляется задача (получаете имеил, звонок, сообщение или просто видите что-то интересное, что нужно добавить в ваш список задач) — сразу же создавайте задачу. Не ждите: вы забудете про эту задачу, если её не запишете.',
      'Задачи всегда должны быть призывом к действию и как можно более понятными. Если задача займет меньше двух минут — сделайте ее сразу и создайте в списке задач как выполненную.',
      'При создании задачи вы указываете точную дату или месяц. Вы не можете выбрать текущий месяц без определенной даты. Это сделано для того, чтобы снять напряжение с мозга. Если вы доверяете системе и добавляете все, что нужно, на правильные даты — то вы будете выполнять задачи в подходящее время. Огромное количество силы воли тратится зря на постоянный стресс вроде "той вещи, которую мне нужно сделать, но я точно не помню, что это за вещь". Научитесь доверять и расслабляться.\n',
      'Первая вещь, которую вам нужно будет сделать в начале каждого месяца — это планирование. Вы берете все задачи на текущий месяц и расфасовываете их в нужные даты. Это позволяет вам отфильтровать задачи, которые более не актуальны, и помогает вам оставаться в полном спокойствии, четко осознавая, что вам нужно будет делать в этом месяце.',
      'Первым делом каждым утром вы будете планировать. Посмотрите на секцию "Планирование". Вы сможете все это сделать? Раскидайте задачи, с которыми сегодня не справитесь, на другие дни. Раскидайте также и задачи, которые остались незаконченными с предыдущих дней.',
      'Кроме чрезвычайных случаев, никогда не смотрите на секцию планирования после окончания процесса планирования. Вам психологически будет гораздо проще, если вы будете сфокусированы только на одной задаче за раз, так что смотрите только на секцию "Текущее". Доверяйте системе, она помнит все. Работайте и расслабляйте свой мозг.',
      'В секции "Текущее" всегда есть максимум одна задача, на которой вы должны фокусироваться — больше ничего. У вас может быть больше одной задачи в день, количество задач и прогресс показаны для вашего удобства. Вам нельзя прыгать между задачами — вы должны работать линейно, выполняя одну задачу за раз.',
      'Лягушки — это особый тип задач, которые вы не хотите делать. Обычно это задачи, которые вы не делаете месяцами и даже годами. Тудурант заставляет вас разбираться с лягушками первым делом каждый день. Утром ваши резервы силы воли достаточно большие, чтобы справиться даже с самыми неприятными задачами. А после победы над лягушкой вы получите достаточный заряд счастья, чтобы сиять улыбкой весь день. Вы будете собой гордиться, что наконец-то справляетесь с лягушками.',
      'Вам разрешено пропускать текущую задачу, но делайте это как можно реже. Если вы не смогли выполнить задачу, и вам пришлось её перераспределить дважды — она становится лягушкой.',
      'Если текущая задача слишком высокоуровневая, разбейте её на список подзадач. Как только вы разбили задачу на подзадачи, она отмечается как завершенная.',
      'Добавляйте настолько много важной информации в задачи, насколько сможете. Добавляйте ссылки на имейлы (gmail позволяет это делать), веб сайты, заметки (как evernote), документы (например, dropbox), оставляйте телефонные номера или добавляйте любую информацию, которая может быть важной для решения задачи. Тудурант не должен быть главным хранилищем и каталогом ваших данных, но местом, где ссылки на необходимые для задач данные, хранятся сразу с определенными задачами.',
      'Не стесняйтесь присоединяться к нашей группе в Телеграме для обмена опытом о том, как становиться продуктивнее — @todorant_feedback! Ваши отзывы о работе сервиса — предложения, пожелания и жалобы — крайне приветствуются.',
      'Переносите задачи на странице "Планирования" для изменения порядка. Если вы хотите создать задачу на определенную неделю — просто добавьте ее на понедельник и перераспределите во время планирования утром понедельника.',
      'В Тудуранте нет и никогда не будет автоматически повторяющихся задач — единственное, в чем они помогают — это создание атмосферы страха, накапливаясь невыполненным грузом. Если нужно внести повторяющуюся задачу — внесите ее вручную, ваш мозг скажет вам спасибо за осмысленную задачу.',
      'В Тудуранте нет концепта "Проектов", так как он показал себя демотивирующим, некоторые папки просто никогда не открываются. Проекты "Фитнес" и "Саморазвитие" передают привет. Вместо этого, используйте #хештеги.',
      'Лягушки всегда находятся сверху в списке.',
      'В Тудуранте нет напоминаний о задачах с точным временем. Однако вы можете включить интеграцию с Гугл Календарем, чтобы вам надоедали нотификации Гугл, а не Тудурант.',
    ],
    earlyAdopter: 'Ранний адоптер 🦄',
    active: 'Активная',
    inactive: 'Неактивная',
    trial: 'Триал',
    weekday1: 'Понедельник',
    weekday2: 'Вторник',
    weekday3: 'Среда',
    weekday4: 'Четверг',
    weekday5: 'Пятница',
    weekday6: 'Суббота',
    weekday0: 'Воскресенье',
    introTitle: 'Добро пожаловать!',
    introButton: 'Вступительное сообщение',
    introBack: 'Поехали!',
    back: 'Назад',
    soundEffects: 'Звуковые эффекты',
    emptyHashtags:
      'Список хештегов пока что пуст. Добавьте свою первую задачу с #хештегом, чтобы добавить сюда первую позицию!',
    refreshRequest:
      'Доступна новая версия Тудуранта. Пожалуйста, обновите страницу, чтобы получить новые блестящие функции 🦄',
    refresh: 'Обновить',
    heroProfileTitle: 'Профиль героя',
    infoHero:
      'Это ваш профиль — профиль героя! Завершайте задачи и зарабатывайте очки, чтобы выбивать все более и более высокие ранги!\n\nВы не увидите полный список рангов, пока не добьетесь самого высокого! Помните: единственный способ добраться до самого верхнего ранга — это ежедневная цепочка из маленьких шажков.',
    rank: '🔥 Ваш ранг 🔥',
    'rank-1Title': 'Существо бесконечности темной материи 😈',
    'rank-1Description':
      'Вы достигли ранга, которого ни один смертный еще не достигал! Поздравляю, вот ваш тортик: 🍰. В этот раз, это не ложь.',
    rank0Title: 'Сабзиро −273.15 °C 🥶',
    rank0Description: 'Было бы еще холоднее, если бы могло.',
    rank5Title: 'В значит Вродуктивность 👺',
    rank5Description:
      'Помните дети, если вы уронили продуктивность на пол менее, чем на 5 секунд, то все должно быть нормально!',
    rank13Title: 'Веселый Фредди 😱',
    rank13Description:
      'Вы знаете, что сегодня за день. Сегодня Джейсон печет вам торт. Такой день теперь каждый день.',
    rank42Title: 'Рыбак 🐬',
    rank42Description: 'Всего хорошего, и спасибо за рыбу!',
    rank69Title: 'Найс мастер! 😝',
    rank69Description: 'Самое клевое число из чисел. Точка.',
    rank85Title: 'Марк-85 🦄',
    rank85Description: 'Можно сказать, ваша продуктивность сделана из железа.',
    rank100Title: '100% пользователь силы ⚡️',
    rank100Description:
      '100 за спиной, бесконечность впереди! Выполняйте задачи каждый день, это того стоит!',
    rank221Title: 'Шерлок 😎',
    rank221Description: 'Вы разгадали секрет продуктивности. Молодец!',
    rank256Title: 'Счастливый сантехник 👾',
    rank256Description:
      '8 бит продуктивности спустя вы все еще вспоминаете теплые и ламповые игры на Денди.',
    rank300Title: 'Спартанец 💪',
    rank300Description:
      'Очистите ваши мысли, упростите свои рутины, проведите следующие 100 очков как настоящий спартанец!',
    rank404Title: '❓❓❓',
    rank404Description: 'Ранг не найден.',
    rank777Title: 'Удачливый грандмастер! 🍀',
    rank777Description:
      'На этом ранге вы будете всего лишь 23 очка. Сделайте так, чтобы вами можно было гордиться. Сегодня ваш счастливый день!',
    rank800Title: 'T-800 🤖',
    rank800Description:
      'Вы просто терминатор мерзких лягух. Идите, уничтожьте пару!',
    rank1337Title: '3L1T3 🧑‍💻',
    rank1337Description:
      'Хакинг продуктивности начат... Хакирование в процессе...',
    rank1338Title: '3L1T3 (хакнуто) 🧑‍💻',
    rank1338Description: 'Продуктивность хакнута успешно!',
    rank2048Title: 'Мастер шахмат ♔',
    rank2048Description:
      'Вы предпочитаете продуктивность разным бессмысленным играм, которые просто убивают время, правда? ПРАВДА?',
    rank9000Title: 'Овер 9000 силы 🏋️',
    rank9000Description: 'Вы поднимаете задачи, как будто они ничего не весят!',
    rank12800Title: 'Доктор Манхэттен ⚛',
    rank12800Description:
      'Вы разбиваете задачи, как будто расщипляете атомы. Продолжайте быть офигенными!',
    homeShort: {
      headline: 'Системы продуктивности не работают.',
      headline2: 'Тудурант работает.',
      feature1: 'Фокусируйтесь на одной задаче за раз',
      feature2: 'Добавляйте дату или месяц каждой задаче',
      feature3: 'Делайте неприятные задачи (лягушки) в начале дня',
      feature4: 'Держите папку "входящие" пустой',
      differenceTitle: 'В чем отличие Тудуранта?',
      differenceText1:
        'Все остальные инструменты продуктивности фокусируются на хранении, организации и автоматизации бесконечных списков задач. Тудурант фокусируется на том, что важно: он заставляет вас завершать задачи.',
      differenceText2:
        'Тудурант использует тактики наказаний и похвалы для поддержания хороших привычек и отказа от плохого поведения. Он воздействует на примитивную часть мозга и прививает зависимость к выполнению задач по тем же принципам, по которым работает привыкание к сахару.',
      differenceText3:
        'Я прочитал более 20 книг про продуктивность и попробовал все методологии из них. Когда я провалил буквально каждую из систем продуктивности, я разбил их на составляющие, собрал из разбитых частей одну большую методологию и упростил результат. Это то, как был создан Тудурант.',
    },
    googleCalendarDisableSuccess: 'Гугл Календарь успешно отключен',
    googleCalendarEnableSuccess: 'Гугл Календарь успешно подключен',
    spread: {
      hint:
        'Выберите задачи для распределения, выберите дни для распределения, нажмите на кнопку, и выбранные задачи распределятся ровным слоем по выбранным датам',
      spreading: 'Распределяем',
      chooseTasks: 'Нажмите на задачи для распределения',
      between: 'между',
      chooseDates: 'Нажмите на даты для распределения',
    },
    level: 'Уровень',
    points: 'очков',
    pointsTillNextLevel: 'очков до следующего уровня',
    accept: 'Принять',
    delegate: {
      title: 'Делегирование',
      noDelegators:
        'У вас пока что нет людей, которые могут делегировать вам задачи. Получите ссылку-приглашение человека, от которого вы хотите принимать задачи.',
      noDelegates:
        'У вас пока что нет людей, которым вы можете делегировать задачи. Передайте ссылку-приглашение людям, которым вы хотите делегировать — и они станут вашими делегатами.',
      noDelegatedTasks:
        'Пока что у вас нет новых задач, которые вам делегировали.',
      link: 'Ссылка-приглашение',
      linkDescription:
        'Делитесь этой ссылкой с людьми, которым вы хотите делегировать задачи. Пройдя по ссылке, человек станет вашим делегатом. Этот человек не сможет увидеть никакие задачи, кроме тех, которые вы ему делегировали.',
      resetConfirmation:
        'Уверены, что хотите сбросить ссылку-приглашение? Существующая ссылка больше не будет работать!',
      delegators: 'Пользователи, которые делегируют вам задачи',
      delegates: 'Пользователи, которым вы делегируете задачи',
      inviteSuccess:
        'Получилось! Теперь этот пользователь может делегировать вам задачи.',
      inviteConfirm:
        'Вы точно хотите стать делегатом этого пользователя и получать от него задачи?',
      deleteDelegateConfirmation:
        'Вы точно хотите убрать этого делегата из списка? Вы больше не сможете делегировать задачи этому пользователю.',
      deleteDelegatorConfirmation:
        'Вы точно хотите убрать этого делегатора из списка? Этот пользователь больше не сможет делегировать вам задачи.',
      pickDelegateField: 'Делегировать',
      noDelegatorsShort:
        'У вас пока что нет людей, которые могут делегировать вам задачи',
      noDelegatedTasksTo: 'Пока что у вас нет задач, которые вы делегировали.',
      noDelegatesShort:
        'У вас пока что нет людей, которым вы можете делегировать задачи',
    },
    epic: {
      intoEpic: 'Сделать эпиком',
      epicGoal: 'Цель эпика',
      name: 'Название эпика',
      epicForeword:
        'Укажите количество задач, которые нужно выполнить по этому хештегу. Это превратит хештег в эпик. Прогресс эпиков показывается на Текущем.',
    },
    success: 'Успех!',
    notLogginedBody: 'Пожалуйста, войдите в аккаунт на ',
    settingsActions: {
      swipeActions: 'Действия свайпами',
    },
    cannotLoadTitle: 'Ай-я-яй!',
    cannotLoadText:
      'Не получилось загрузить задачи, может, что-то с Интернетом?',
    deleteAllHashtagsConfirm: 'Уверены, что хотите удалить все хэштеги?',
    deleteAll: 'Удалить все',
    apps: 'Приложения',
    next: 'Дальше',
    letsGo: 'Поехали!',
    introText0:
      'Привет! Это Никита, создатель Тудуранта. Я так рад, что вы скачали Тудурант — ведь это означает, что и вы скоро разблокируете безграничную продуктивность!',
    introText1:
      'Большинство людей, которые оказываются здесь, похожи на меня: ощущение, как будто попробовали все существующие приложения продуктивности, но ни одно из них не сработало.',
    introText2:
      'Давайте я расскажу вам, почему Тудурант стал моим последним и единственным приложением продуктивности и как ваша жизнь изменится в следующие 3-4 недели. Просто прокручивайте страницу вправо или пользуйтесь кнопками ниже!',
    introText3:
      'Во-первых, со стороны будет все выглядеть так, как будто вы вообще ничего не забываете. Вам не нужно будет ничего дополнительно для этого делать, система просто будет работать.',
    introText4:
      'Это то, почему моей жене нравится, что я пользуюсь Тудурантом. Раньше, я часто забывал вещи, которые мне казались недостаточно важными, но были важными для моей жены.',
    introText5:
      'Теперь каждый раз, когда мы о чем-то договариваемся, я сразу добавляю это в Тудурант. А когда приходит время, я знаю точно, что нужно сделать — и планирую с умом.',
    introText6:
      'Во-вторых, вы полностью освободите свой мозг, перестанете стрессовать по поводу невыполненных задач и задач, о которых вы возможно забыли.',
    introText7:
      'Вы всегда будете знать, над чем работать прямо сейчас и будете дольше оставаться в "зоне продуктивности", выполняя задачи и достигая целей.',
    introText8:
      'Несмотря на то, что я поддерживаю десяток сервисов, которыми пользуется больше 20 000 000 людей, я больше никогда не стрессую. У меня всегда перед глазами текущая задача, и я всегда осознаю, что если я добиваюсь прогресса, то в итоге я обязательно приду к цели.',
    introText9:
      'В-третьих, вы заполучите супергеройскую силу точного планирования. Вы всегда сможете предсказать, сколько займет и когда будет выполнено то или иное задание.',
    introText10:
      'Каждый раз, когда коллега или друг меня спрашивает о какой-либо задаче, я просто смотрю в Тудурант и четко говорю, когда я этой задачей займусь. Чаще всего, я достаточно реалистично предсказываю, что и когда будет готово.',
    introText11:
      'У меня больше нет никаких авралов. Мне не приходится засиживаться после рабочих часов! Я заканчиваю задачи в комфортном темпе, а люди вокруг доверяют мне.',
    introText12:
      'Знайте, что вы в хорошей компании! Тысячи людей доверяют свою продуктивность Тудуранту, включая меня.',
    introText13:
      'Если у вас остались какие-либо вопросы про приложение — просто нажмите на кнопку "i" справа вверху. А если и там вы не найдете ответ, то просто зайдите в "Поддержку" в настройках, там мои личные контакты. Не стесняйтесь, пишите мне!',
    introText14:
      'Стоит отметить еще одну вещь! Чтобы использовать суперсилу по-полной, вам нужно научиться ее контролировать. Обязательно прочитайте "Как пользоваться Тудурантом" в настройках!',
    introText15:
      'Удачи с Тудурантом! Надеюсь, вашу жизнь он преобразит так же, как преобразил мою!',
    introText0web:
      'Привет! Это Никита, создатель Тудуранта. Я так рад, что вы решили попробовать Тудурант — ведь это означает, что и вы скоро разблокируете безграничную продуктивность!',
    introText2web:
      'Давайте я расскажу вам, почему Тудурант стал моим последним и единственным приложением продуктивности и как ваша жизнь изменится в следующие 3-4 недели. Просто пользуйтесь кнопками ниже, чтобы продвинуться дальше!',
    introText14web:
      'Стоит отметить еще одну вещь! Чтобы использовать суперсилу по-полной, вам нужно научиться ее контролировать. Обязательно прочитайте "Как пользоваться Тудурантом", нажав на кнопку справа вверху!',
    edit: 'Редактировать',
    settingsObject: {
      showMoreByDefault:
        'Сразу показывать расширенные настройки добавления задачи',
    },
    googleCalendarHint:
      'В Гугл Календарь будут синхронизироваться только задачи, созданные в Тудуранте с точным временем',
    googleCalendarGotIt: 'Понятно!',
    frogsAlert: {
      title: 'Стоп! Это нелегально',
      text:
        'Не нарушайте правила. Если у вас есть сегодня лягушки, то завершите их, разбейте их, перенесите их на будущие даты или уберите у них статус лягушки. Пожалуйста, не игнорируйте лягушек!',
    },
    to: 'Для',
    from: 'От',
    unEpicInfo: 'Сбросить эпик',
    unEpicConfirm: 'Вы уверены, что хотите сбросить эпик?',
    breakdownMessage: {
      title: 'Повторяющаяся задача',
      text: 'Это повторяющаяся задача, вы хотите ее разбить или завершить?',
      complete: 'Завершить',
    },
  },
  ua: {
    encryption: {
      info:
        'Використовуйте цю секцію з максимальною обережністю! Шифрування не працюватиме, якщо ви не введете пароль. Далі буде два типи задач: зашифровані та незашифровані. Всі нові задачі будуть зашифрованими. Старі задачі можна буде зашифрувати, натиснувши на кнопку нижче. Якщо ви втратите пароль, відновити задачі буде неможливо.',
      switch: 'Шифрувати задачi',
      password: 'Пароль',
      encryptAllButton: 'Зашифрувати всі',
      decryptAllButton: 'Розшифрувати всі',
      confirm:
        'Впевнені, що хочете шифрувати всі задачі паролем? Ви зможете розшифрувати задачі цим же паролем. Якщо ви втратите пароль, у вас не вийде розшифрувати задачі!',
      disableConfirm:
        'Впевнені, що хочете прибрати пароль і вимкнути шифрування? Це дія не розшифрує зашифровані задачі.',
      errorDecrypting: 'Неправильний пароль розшифровки',
      repeatPassword: 'Повторіть пароль',
      title: 'Шифрування',
    },
    search: 'Пошук',
    qr: {
      code: 'QR код',
      description: {
        app_login:
          'Використовуйте цей QR код, щоб ввійти у ваш обліковий запис на мобільних пристроях. Це зображення - пароль, нікому не передавайте його!',
        web_login:
          'Залогіньтеся у мобільному додатку Тудуранта, зайдіть в налаштування, натисніть на "Додати пристрої" в секції "Аккаунт" і проскануйте цей QR код для того, щоб дозволити ввійти в ваш обликовий запис в браузері. Пам`ятайте : цей QR код працює тільки 10 хвилин!',
      },
    },
    breakdown: {
      request:
        'Схоже, ви занадто часто переміщуєте цю задачу. Будь ласка, розбийте її на дрібніші підзадачі, ви більше не можете переміщувати цю задачу на іншу дату. Повірте, це допоможе виконати завдання!',
      button: 'Розбити',
    },
    warning: 'Увага',
    hashtags: {
      title: 'Хештеги',
      name: 'Назва хештега',
    },
    supportAlert: {
      title: 'Підтримка',
      text:
        'Якщо у вас є якісь питання або пропозиції, <a href="mailto:todorant@borodutch.com">напишіть мені на імейл</a>, <a href="https://t.me/borodutch" target="_blank">в Телеграм</a> або <a href="https://t.me/todorant_feedback" target="_blank">приєднуйтесь до нашої групи в Телеграмі</a>!',
    },
    loginMobile: {
      telegram: {
        headline:
          'Для входу через Telegram введіть свій Telegram ID та натисніть "Увійти". Ви можете дізнатись свій Telegram ID, написавши <code>/id</code> до <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>. Або можете відправити <code>/qr</code> до <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a> та відсканувати його в секції QR Вхід!',
        idHint: 'Телеграм ID',
        loginButton: 'Увійти',
        noCredentialsError: 'Будь ласка, вкажіть Телеграм ID',
        cannotSendMessageError:
          'Не вийшло відправити запит на логін користувачу. Будь ласка, впевніться, що ви розпочали чат з @todorant_bot і що Телеграм ID правильний',
        waiting:
          'Чекаю відповіді від <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'Запит на вхід було відхилено',
      },
    },
    noReport: {
      title: 'Дані ще відсутні',
      text: 'Мерщій виконувати свою першу задачу і повертайтесь сюди!',
    },
    report: {
      title: 'Звіт',
      tasksCompleted: 'Задач завершено',
      frogsCompleted: 'Жаб завершено',
      share: 'Поділіться цим звітом!',
      hashtag: 'Хештег',
      shareButton: 'Поділитися',
      url: 'Постійне посилання на цей звіт',
      shareMessage: 'Перегляньте мій звіт продуктивності від Тудуранта!',
      call: 'Бажаєте приєднатись?',
      callButton: 'Приєднатися до Тудуранту',
      startDate: 'Дата початку',
      endDate: 'Дата закінчення',
    },
    title: 'Тудурант',
    cookie: {
      button: 'Зрозуміло!',
      message: '🍪 Цей вебсайт використовує кукіз.',
    },
    home: {
      texts: {
        contact: [
          'Залишились запитання? Напишіть мені за адресою ',
          '. Дякую.',
        ],
      },
      signIn: 'Увійти',
      facebook: 'Увійти через Facebook',
      google: 'Увійти через Google',
      privacy: 'Політика конфіденційності',
      feedback: {
        title: 'Що кажуть користувачі?',
        reviews: [
          {
            name: 'Sergey Romanov',
            text:
              "Милі повідомлення у розділі підписки Тудуранту :) Дякую за простий сервіс, що прагне до ідеалу. Виявилося, що він допомагає бути не тільки продуктивним, але й проактивним. Маленькі покращення кожен день впевнено підтягують за собою відстаючі ланки, а вільний від задач розум постійно шукає, чим заповнити спорожнілий список задач, щоб знов і знов отримувати задоволення від їх виконання і пов'язаних з цим змін — і це прямий шлях до покращення всього, що мене оточує. Загалом, Тудурант, яким би простим він не здавався на перший погляд, здатен стати вірним соратником у будь-яких справах. Дякую, Микито, що усвідомив аспекти істинної продуктивності та поділився ними із нами у зручному рішенні. Вдячний підписник Тудуранту.",
          },
          {
            name: 'Dinislam Sad',
            text:
              'Головні плюси, які особисто мені, та і впевнений, іншим також сподобалися.\n1. Простий і зручний інтерфейс.\n2. Пропущені завдання автоматично стають жабами, а також можливість спочатку відмітити завдання "жабою".\n3. Категорія /done це просто необхідність, і дякую за це, Микито. Я юзав Тудуіст, Вундерліст, Мої Справи. Всі ці програми занадто перевантажені.\n4. Телеграм-бот.',
          },
          {
            name: 'Aleksei Kaut',
            text:
              'Після того, як створив свої перші завдання і переключився на вкладку "Поточні" — офігів від того, що переді мною тільки одне завдання і що необхідно завершити його перед тим, як іти далі. Ця ідея з єдиним завданням і концентрацією на ньому мене вразила, здавалося б очевидно, але раніше так не міг.\n\nЯ зазвичай писав в Notes завдання та ідеї, що потрібно зробити найближчим часом, але не підходив до цього як до системи. Користуюся сервісом кілька тижнів і не дуже активно, але думаю, що це дуже сильний підхід до систематизації справ і завдань.\n\nДякую за твою роботу!',
          },
          {
            name: 'Anton',
            text:
              'Протестував Тудурант. Спочатку був скепсів (дуже вже багато перепробував сервісів з планування), але зрозумів, що дійсно ефективно працює і дуже простий у використанні.\n\nПлюс, за невідомою мені причини, коли виконуються всі завдання на день і з\'являється потужна гордість і задоволення, що було відсутньо у інших сервісах планування (там було щось у форматі "ну здається все.. чи ні?").\n\nДякую за твої роботи!',
          },
          {
            name: 'Willsey Paslen',
            text:
              'Дякую за чудовий сервіс. Пройшло достатньо часу, щоб можна було точно сказати — мені від допомагає. Дякую, Микито😁. І удачі з додатком.',
          },
          {
            name: 'Ігор Малінкін',
            text:
              'З Тудурантом я почав хоч щось робити, так що моя продуктивність піднялася з 0.',
          },
          {
            name: 'Володимир Дубенко',
            text:
              'Твій сервіс приголомшливий у плані, як мінімум, трьох речей:\n1. Зручний — от взагалі нічого зайвого!\n2. Прищеплює звичку, як ти там писав у якомусь з постів, прям з язику зняв у той момент: ми — це набір звичок.\n3. Як не дивно, змушує раціонально мислити.\n\nЯ за своєю натурою ірраціональний, я не можу просто вести 1 проект (я швидко вигоряю). Я живу тільки багатозадачністю! 3 проекти паралельно — легко, але мало... 7 — ось це вже цікавіше. І твій сервіс дозволяє цього досягати. Саме чергування завдань не дозволяє мозку вигоряти у одному конкретному напрямку. А якимось магічним чином чергує завдання з одного проекту на інший.',
          },
          {
            name: 'Maksim Alekseyevich',
            username: 'MMAradiology',
            text:
              'Сказати, що використання Тудуранту змінило моє життя, я не можу. Сказати, що це дуже значимий і корисний додаток/сайт? Так, хоч тисячу разів.\n\nМені Тудурант подобається, і він дозволяє звільнити свою "операційну пам\'ять", дозволити собі мислити над вирішенням проблеми, а не над її запам\'ятовуванням. Як правильно писав Микита (творець) — при при постійному і правильному використанні перестануть з\'являтися завдання, які раніше вселяли воістину біблійський страх. І це буде відбуватися не через те, що перестають поступати складні завдання. Тобі (і мені, і всім) стане зрозуміло — "дорогу здолає той, хто йде", "шлях в тисячу лі починається одного кроку".',
          },
          {
            name: 'Kiku Reise',
            text:
              'Я розвантажив свої завдання по роботі, програмування та хобі. Навіть цей відгук написав завдяки фокусу від Тудуранту. Всього одне завдання, та ніяких ускладнюючих пріоритетів. У цьому вся фішка сервісу — він допоміг мені сконцентруватися, та не розпорошуючись по черзі виконати таски.\n\nЗвичайно, можна проставити завдання й забити, але мені простіше повертатися до мінімалістичного додатка з однією задачею, ніж пів дня шукати в Телеграмi або Notion щоб виконакти одне завдання із сотні запланованих.\n\nОсобливо сподобалося оновлення з хештегами — тепер вся статистика як на долоні, можу трекать та ділитися з друзями скільки завдань з розробки я виконав у цьому місяці.\n\nЩиро дякую за Тудурант!',
          },
        ],
      },
      act: 'Дійте!',
      apple: 'Увійти через Apple',
      crossplatform: {
        title: 'По-справжньому крос-платформний',
      },
      mobile: 'Ввійти через мобільний додаток',
    },
    menu: {
      darkMode: {
        on: 'Темна тема: увімк.',
        off: 'Темна тема: вимк.',
      },
      logout: 'Вийти',
    },
    support:
      'Щось незрозуміло? Пишіть мені на <a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'Не вдалося зайти через Facebook',
        google: 'Не вдалося зайти через Google',
        telegram: 'Не вдалося зайти через Telegram',
        apple: 'Не вдалося зайти через Apple',
        mobile: 'Не вдалося зайти через мобільний додаток',
      },
      internal: 'Внутрішня помилка серверу',
      loadTodos: 'Не вдалося завантажити задачі',
      todo: {
        textLenght: 'Задачі повинні мати текст',
        dateOrMonth: 'Задачам необхідно виставляти або точний день, або місяць',
        more1500: 'Задачам не може мати більше 1500 символів',
      },
      invalidForm: 'Будь ласка, заповніть необхідні поля',
      report: 'Не вдалося завантажити звіт',
      appleFirefox:
        'Нажаль, це помилка входу <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1628361">a bug</a> у Apple через браузер Firefox. Доки це не виправлять, будь ласка, використовуйте інший браузер для входу через Apple, а після цього об\'єднайте акаунт з іншими соціальними аккаунтами в Тудуранті. Вибачте за незручності.',
      delegate: {
        invalidToken: 'Посилання-запрошення більше не працює',
      },
    },
    close: 'Закрити',
    notFound: 'Сторінку не знайдено',
    todo: {
      create: {
        title: 'Додати задачі',
        text: 'Текст задачі',
        textHint: 'Сюди можна додати посилання на email або вебсайт',
        placeholder: 'Задача',
        frog: 'Це жаба!',
        date: 'Точний день',
        month: 'Або місяць',
        tooltip:
          'Задачі завжди мають бути: такими, які можна виконати ("Знайти найкращі квитки у Мексику на агрегаторі квитків", а не "Полетіти у Мексику"); щонайменшими і зрозумілими ("Протерти дісплей", а не "Прибратися вдома").',
        goFirst: 'Додати зверху',
      },
      list: {
        completed: 'Показати завершені',
      },
      edit: {
        title: 'Редагування',
      },
    },
    cancel: 'Скасувати',
    save: 'Зберегти',
    delete: 'Видалити',
    deleteHeadline: 'Ви впевнені, що бажаєте видалити "{name}"?',
    current: 'Поточне',
    planning: 'Планування',
    created: 'Створено',
    breakdownInfo:
      "Використовуйте розбивку, якщо поточна задача занадто об'ємна",
    howto: {
      title: 'Як користуватися Тудурантом?',
      premise:
        'Нижче описані основні принципи, яких ви повинні дотримуватися, щоб максимально продуктивно користуватися усіма функціями Тудуранту. Це просто, як 1-2-3, але на декілька кроків більше.',
      bonus: {
        title: 'Бонусні функції',
        rules: [
          'Користуйтеся клавіатурними скороченнями на десктопі! Ви можете (a) — додати, (b) — розбити, перемкнутися на (c) — поточне, відмітити як (d) — виконане і переключитися на (p) — планування.',
        ],
      },
    },
    skipped: 'Пропущено',
    moveUp: 'Перенести на сьогодні',
    settings: {
      title: 'Налаштування',
      showTodayOnAddTodo:
        'Встановлювати сьогоднішню дату автоматично при створенні завдань',
      firstDayOfWeek: 'Перший день тижня',
      newTodosGoFirst: 'Нові завдання додаються на початок списку',
      preserveOrderByTime: 'Зберегти точний порядок часу',
      general: 'Загальне',
      integrations: 'Iнтеграції',
      connected: "З'єднано",
      notConnected: "Не з'єднано",
      googleCalendar: 'Google Calendar',
      disconnectConfirm: 'Впевнені, що хочете відключити цей сервіс?',
      account: 'Обліковий запис',
      duplicateTagInBreakdown: 'Копіювати хештеги при розбивці',
      export: 'Експорт даних',
      hotkeys: 'Гарячі клавіші',
      startTimeOfDay: 'Початок дня',
      username: "Ім'я",
      telegram: 'Телеграм',
      coloredCardBackgrounds: 'Замальовувати задачі кольорами хештегів',
      newLineOnReturn: 'Переносити рядок на enter',
      removeCompletedFromCalendar:
        'Видаляти задачі з Гугл Календаря після виконання',
    },
    allDoneTitle: 'Вітаємо!',
    allDoneText:
      '🥳 Ви зробили це! Всі завдання на сьогодні зроблено, відпочиньте або трішки потанцюйте 💃',
    noTodosTitle: 'Нумо!',
    noTodosText:
      'У Вас сьогодні немає жодних завдань. Якщо Ви хочете попрацювати—додайте нове завдання на сьогодні або візьміть завдання з майбутнього.',
    addTodoTime: 'Точний час',
    completed: 'Виконано',
    planningText:
      'Схоже, вам треба зайнятись плануванням! Будь-ласка перерозподіліть невирішені завдання, щоб розблокувати розділ "Поточне" і для того, щоб залишатися продуктивними. Удачі!',
    rules: [
      "Щойно у вас з'являється завдання (отримаєте електронний лист, телефонний дзвінок, текст або якщо Ви побачите щось цікаве, що має бути внесено до Вашого списку завдань) — створіть його зараз. Не чекайте, бо Ви забудете про це, якщо не запишете.",
      'Завдання завжди має бути закликом до дії та щонайточнішим. Якщо завдання займає менше 2 хвилин, виконайте його відразу та позначте як виконане.',
      'Під час створення завдання Ви або вказуєте точну дату, або місяць. Ви не можете обрати поточний місяць без певної дати. Це зроблено для того, щоб розслабити Ваш мозок. Якщо Ви довіряєте системі та додаєте в неї все, що потрібно, на правильні дати — то Ви будете зустрічатися з завданнями в правильний час. Величезна кількість сили волі витрачається даремно на постійне хвилювання на зразок "тієї речі, яку мені потрібно зробити, але я точно не пам\'ятаю, що це за річ". Навчіться довіряти і відпочивати.',
      'Перше, що Ви робите щомісяця — це плануєте заздалегідь. Ви берете усі завдання, призначені на поточний місяць, і впорядковуєте їх у правильні дати. Це дозволяє відпорядкувати застарілі завдання та зберігати спокій у думках, точно знаючи, що Вам потрібно зробити цього місяця.',
      'Перше, що Ви робите вранці — це плануєте свій день. Погляньте на розділ «Планування». Ви можете впоратися з усим? Розподіліть завдання, які сьогодні не вдається виконати. Перерозподіліть будь-які завдання, які не були виконані за попередні дні.',
      "Якщо це не надзвичайна ситуація, не дивіться на розділ планування після того, як закінчили його. Психологічно буде набагато ліпше, якщо Ви зосередитесь лише на одному завданні, тому стежте за розділом «Поточне». Довіряйте системі, вона запам'ятовує все. Робіть свою роботу і розслабте свій розум.",
      'Розділ «Поточне» містить лише одне завдання, на якому потрібно зосередитися — більше нічого. Ви можете мати більше одного завдання на день. Кількість завдань, а також смуга виконання відображаються для Вашої зручності. Вам не дозволяється стрибати між завданнями — Ви повинні виконувати кожне завдання по черзі.',
      'Жаби — це особливий вид завдань, які Ви не хочете робити. Зазвичай, це завдання, які Ви не робите місяцями і навіть роками. Todorant змушує Вас розбиратися насамперед з жабами  кожен день. Вранці ваші запаси сили волі чималі, щоб впоратися навіть з найнеприємнішими завданнями. А після перемоги над жабою Ви отримаєте достатній заряд щастя, щоб сяяти усмішкою весь день. Ви будете собою пишатися, що нарешті справляєтеся з жабами.',
      'Ви можете пропустити поточне завдання — але намагайтеся робити це якомога рідше. Не можна пропустити жабу. Якщо Ви не виконали завдання і довелося перерозподілити його двічі, воно стає жабою.',
      "Якщо поточне завдання занадто високого рівня, то розбийте його на список підзавдань. Тільки-но Ви розіб'єте його, завдання позначається як виконане.",
      'Додайте якомога більше відповідних відомостей про завдання. Додайте посилання на конкретні електронні листи (gmail в Інтернеті дозволяє це зробити), вебсайти, записки (наприклад, evernote), документи (наприклад, DropBox), залишайте номери телефонів або додайте будь-які відомості, які можуть знадобитися для виконання завдання. Todorant не повинен бути головним сховищем і текою Ваших даних, але має бути місцем, де посилання на необхідні для завдань дані зберігаються одразу з певними завданнями.',
      'Не соромтеся приєднатись до нашої багатомовної групи у Telegram, щоб поділитися досвідом та підказками щодо підвищення плідності — @todorant_feedback! Ваші відгуки про сервіс — пропозиції, побажання та скарги — дуже корисні.',
      'Використовуйте режим редагування (значок порядку переліку вгорі) в розділі «Планування», щоб змінити порядок завдання. Якщо Ви хочете призначити завдання певному тижню, просто призначте його на понеділок і перерозподіліть його на етапі планування у вранішній понеділок.',
      'У Todorant немає і ніколи не буде повторюваних завдань — єдине, на що вони добре роблять, так це викликають занепокоєння, навішуючи над Вами невиконані завдання. Якщо Вам потрібно виконати повторювані завдання — додайте їх уручну, Ваш мозок буде вдячний Вам за свідомі завдання.',
      'Todorant не має поняття "Проєкти", бо воно показало себе демотивуючим, деякі з "тек" ніколи не будуть відкриті. Проєктам "Фітнес" та "Самовдосконалення" передаються «вітання». Натомість використовуйте #хештеги.',
      'Жаби завжди з’являються у верхній частині списку.',
      'У Тудуранте немає нагадувань про завдання з точним часом. Однак ви можете включити інтеграцію з Гугл Календарем, щоб вам набридав нотифікації Гугл, а не Тудурант.',
    ],
    earlyAdopter: 'Ранній користувач 🦄',
    active: 'Задіяна',
    inactive: 'Незадіяна',
    trial: 'Випробування',
    weekday1: 'Понеділок',
    weekday2: 'Вівторок',
    weekday3: 'Середа',
    weekday4: 'Четвер',
    weekday5: 'П’ятниця',
    weekday6: 'Субота',
    weekday0: 'Неділя',
    introTitle: 'Ласкаво просимо!',
    introButton: 'Вступне повідомлення',
    introBack: 'Ходімо!',
    back: 'Назад',
    soundEffects: 'Звукові ефекти',
    emptyHashtags:
      'Список хештегів поки що порожній. Додайте свою першу задачу з #хештегом, щоб додати сюди першу позицію!',
    refreshRequest:
      'Доступна нова версія Тудуранта. Будь ласка, поновіть сторінку, щоб отримати нові блискучі функції 🦄',
    refresh: 'Оновити',
    heroProfileTitle: 'Профіль героя',
    infoHero:
      'Це ваш профіль — профіль героя! Виконуйте задачі і отримуйте очки, щоб вибивати все більш і більш високі ранги!\n\nВи не побачите повний список рангів, доки не досягнете самого високого! Пам\'ятайте: єдиний спосіб досягти самого верхнього рангу — це щоденний ланцюжок з маленьких кроків.',
    rank: '🔥 Ваш ранг 🔥',
    'rank-1Title': 'Істота нескінченності темної матерії 😈',
    'rank-1Description':
      'Ви досягли рангу, якого ще жоден смертний ще не досягав! Вітаю, ось ваш тортик: 🍰. На цей раз це не брехня.',
    rank0Title: 'Сабзіро −273.15 °C 🥶',
    rank0Description: 'Було б ще холодніше, якби могло.',
    rank5Title: 'П значить Продуктивність 👺',
    rank5Description:
      "Пам'ятайте діти, якщо ви впустили продуктивність на підлогу менше ніж на 5 секунд, то все має бути нормально!",
    rank13Title: 'Веселий Фредді 😱',
    rank13Description:
      'Ви знаєте, що сьогодні за день. Сьогодні Джейсон пече для вас торт. Такой день тепер щодня.',
    rank42Title: 'Рибак 🐬',
    rank42Description: 'Усього хорошого, і дякую за рибу!',
    rank69Title: 'Найс майстер! 😝',
    rank69Description: 'Найкрутіше число з чисел. І крапка.',
    rank85Title: 'Марк-85 🦄',
    rank85Description: 'Можна сказати, ваша продуктивність зроблена із сталі.',
    rank100Title: '100% користувач сили ⚡️',
    rank100Description:
      '100 за спиною, нескінченність попереду! Виконуйте завдання щодня, воно того варте!',
    rank221Title: 'Шерлок 😎',
    rank221Description: 'Ви розгадали секрет продуктивності. Молодець!',
    rank256Title: 'Щасливий сантехнік 👾',
    rank256Description:
      'Через 8 біт продуктивності ви все ще думаєте про старі добрі ігри.',
    rank300Title: 'Спартанець 💪',
    rank300Description:
      'Очистіть ваші думки, спростіть свої рутини, проведіть наступні 100 очок як справжній спартанець!',
    rank404Title: '❓❓❓',
    rank404Description: 'Ранг не знайдено.',
    rank777Title: 'Успішний грандмайстер! 🍀',
    rank777Description:
      'На цьому ранзі ви будете лише впродовж 23 очок Зробіть так, щоб ви могли пишатися цими очками. Сьогодні ваш щасливий день!',
    rank800Title: 'T-800 🤖',
    rank800Description:
      'Ви просто термінатор мерзенних жаб. Йдіть, знищте пару!',
    rank1337Title: '3L1T3 🧑‍💻',
    rank1337Description:
      'Злом продуктивності розпочато... Хакінг в процесі...',
    rank1338Title: '3L1T3 (хакнуто) 🧑‍💻',
    rank1338Description: 'Продуктивность успішно хакнута!',
    rank2048Title: 'Майстер шахів ♔',
    rank2048Description:
      'Ви віддаєте перевагу продуктивності, аніж різним безглуздим іграм, які просто вбивають час, правда? ПРАВДА?',
    rank9000Title: 'Овер 9000 сили 🏋️',
    rank9000Description: 'Ви піднімаєте задачі, ніби вони нічого не важать!',
    rank12800Title: 'Доктор Манхеттен ⚛',
    rank12800Description:
      'Ви разбиваєте задачі, ніби розщиплюєте атоми. Продовжуйте бути офігенним!',
    homeShort: {
      headline: 'Системи продуктивності не працюють.',
      headline2: 'Тудурант працює.',
      feature1: 'Фокусуйтеся на одному завданню за раз',
      feature2: 'Додавайте дату або місяць кожного завдання',
      feature3: 'Робіть неприємні завдання (жаби) на початку дня',
      feature4: 'Тримайте папку "вхідні" порожньою',
      differenceTitle: 'У чому відмінність Тудуранта?',
      differenceText1:
        'Всі інші інструменти продуктивності фокусуються на зберіганні, організації та автоматизації нескінченних списків завдань. Тудурант фокусується на тому, що важливо: він змушує вас завершувати завдання.',
      differenceText2:
        'Тудурант використовує тактики покарань і похвали для підтримки хороших звичок і відмови від поганої поведінки. Він впливає на примітивну частина мозку і прищеплює залежність до виконання завдань за тими ж принципами, за якими працює звикання до цукру.',
      differenceText3:
        'Я прочитав більше 20 книг про продуктивність і спробував все методології з них. Коли я провалив буквально кожну з систем продуктивності, я розбив їх на складові, зібрав з розбитих частин одну велику методологію і спростив результат. Це те, як був створений Тудурант.',
    },
    googleCalendarDisableSuccess: 'Гугл Календар успішно відключений',
    googleCalendarEnableSuccess: 'Гугл Календар успішно підключений',
    spread: {
      hint:
        'Оберіть задачі для розподілу, виберіть дні для розподілу, нажміть на кнопку, і обрані задачі розподіляться рівним слоєм по обраним датам',
      spreading: 'Розподілємо',
      chooseTasks: 'Нажміть на задачі для розподілу',
      between: 'між',
      chooseDates: 'Нажміть на дати для розподілу',
    },
    level: 'Рівень',
    points: 'очків',
    pointsTillNextLevel: 'очків до наступного рівня',
    accept: 'Прийняти',
    delegate: {
      title: 'Делегування',
      noDelegators:
        'У вас поки що немає людей, котрі мають змогу делегувати вам задачі. Отримайте посилання-запрошення людини, від якої ви хочете отримувати задачі.',
      noDelegates:
        'У вас поки що немає людей, котрим ви маєте змогу делегувати задачі. Передайте посилання-запрошення людям, котрим ви хочете делегувати — і вони стануть вашими делегатами.',
      noDelegatedTasks:
        'Поки що у вас немає нових задач, котрі вам делегували.',
      link: 'Посилання-запрошення',
      linkDescription:
        'Поділіться цим посиланням з людьми, яким ви хочете делегувати задачі. Пройшовши за посиланням, людина стане вашим делегатом. Ця людина не зможе побачити жодних завдань, крім тих, які ви їй делегували.',
      resetConfirmation:
        'Ви впевнені, що хочете скинути посилання-запрошення? Існуюче посилання більше не працюватиме!',
      delegators: 'Користувачі, котрі делегують вам задачі',
      delegates: 'Користувачі, котрім ви делегуєте задачі',
      inviteSuccess:
        'Вийшло! Тепер цей користувач може делегувати вам завдання.',
      inviteConfirm:
        'Ви точно хочете стати делегатом цього користувача та отримувати від нього задачі?',
      deleteDelegateConfirmation:
        'Ви точно хочете прибрати цього делегата зі списку? Ви більше не зможете делегувати задачі цьому користувачеві.',
      deleteDelegatorConfirmation:
        'Ви точно хочете прибрати цього делегатора зі списку? Цей користувач більше не зможе делегувати вам задачі.',
      pickDelegateField: 'Делегувати',
      noDelegatorsShort:
        'У вас поки що немає людей, які можуть делегувати вам задачі',
      noDelegatedTasksTo: 'Поки що у вас немає задач, які ви делегували.',
      noDelegatesShort:
        'У вас поки що немає людей, яким ви можете делегувати завдання',
    },
    epic: {
      intoEpic: 'Зробити епіком',
      epicGoal: 'Ціль епіка',
      name: 'Назва епіка',
      epicForeword:
        'Вкажіть кількість задач, котрі необхідно виклонати по цьому хештегу. Це перетворить хештег в епік. Прогрес епіків відображається на Поточному.',
    },
    success: 'Успіх!',
    notLogginedBody: 'Будь ласка, ввійдіть в запис на ',
    settingsActions: {
      swipeActions: 'Дії свайпами',
    },
    cannotLoadTitle: 'Ай-я-яй!',
    cannotLoadText:
      'Не вдалося загрузити задачі, можливо, щось з Інтернетом?',
    deleteAllHashtagsConfirm: 'Впевнені, що хочете видалити всі хештеги?',
    deleteAll: 'Видалити все',
    apps: 'Додатки',
    next: 'Далі',
    letsGo: 'Поїхали!',
    introText0:
      'Привіт! Це Нікіта, творець Тудуранта. Я так радий, що ви скачали Тудурант — адже це означає, що і ви скоро розблокуєте безмежну продуктивність!',
    introText1:
      'Більшість людей, що опиняються тут, схожі на мене: відчуття, ніби спробували всі існуючі програми продуктивності, але жодна з них не спрацювала.',
    introText2:
      'Давайте я розповім вам, чому Тудурант став моїм останнім та єдиним додатком продуктивності і як ваше життя зміниться у наступні 3-4 тижні. Просто прокручуйте сторінку вправо або користуйтеся кнопками нижче!',
    introText3:
      'По-перше, з боку все виглядатиме так, ніби ви взагалі нічого не забуваєте. Вам не потрібно нічого додатково для цього робити, система просто буде працювати.',
    introText4:
      'Це те, чому моїй дружині подобається, що я користуюсь Тудурантом. Раніше я часто забував речі, які мені здавались недостатньо важливими, але були важливими для моєї дружини.',
    introText5:
      'Тепер щоразу, коли ми про щось домовляємося, я одразу додаю це до Тудуранта. А коли настає час, я знаю точно, що потрібно зробити — і планую з розумом.',
    introText6:
      'По-друге, ви повністю звільните свій мозок, перестанете стресувати з приводу невиконаних завдань та завдань, про які ви, можливо, забули.',
    introText7:
      'Ви завжди будете знати, над чим працювати прямо зараз і довше залишатиметеся в "зоні продуктивності", виконуючи завдання та досягаючи цілей.',
    introText8:
      'Незважаючи на те, що я підтримую десяток сервісів, якими користується понад 20 000 000 людей, я більше ніколи не стресую. У мене завжди перед очима поточне завдання, і я завжди усвідомлюю, що якщо я домагаюся прогресу, то в результаті я обов`язково прийду до мети.',
    introText9:
      'По-третє, ви отримаєте супергеройську силу точного планування. Ви завжди зможете передбачити, скільки займе і коли буде виконано те чи інше завдання.',
    introText10:
      'Щоразу, коли колега чи друг мене запитує про якесь завдання, я просто дивлюся в Тудурант і чітко говорю, коли я цим завданням займуся. Найчастіше я досить реалістично передбачаю, що і коли буде готово.',
    introText11:
      'У мене більше немає жодних авралів. Мені не доводиться засиджуватися після робочого годинника! Я закінчую завдання в комфортному темпі, а люди довкола довіряють мені.',
    introText12:
      'Знайте, що ви у гарній компанії! Тисячі людей довіряють свою продуктивність Тудуранту, включаючи мене.',
    introText13:
      'Якщо у вас залишилися питання про програму — просто натисніть на кнопку "i" справа вгорі. А якщо і там ви не знайдете відповіді, то просто зайдіть у "Підтримку" в налаштуваннях, там мої особисті контакти. Не соромтеся, пишіть мені!',
    introText14:
      'Варто зазначити ще одну річ! Щоб використати суперсилу по-повній, вам потрібно навчитися її контролювати. Обов`язково прочитайте "Як користуватись Тудурантом" у налаштуваннях!',
    introText15:
      'Удачі з Тудурантом! Сподіваюся, ваше життя він змінить так, як змінив моє!',
    introText0web:
      'Привіт! Це Нікіта, творець Тудуранта. Я так радий, що ви скачали Тудурант — адже це означає, що і ви скоро розблокуєте безмежну продуктивність!',
    introText2web:
      'Давайте я розповім вам, чому Тудурант став моїм останнім та єдиним додатком продуктивності і як ваше життя зміниться у наступні 3-4 тижні. Просто користуйтеся кнопками нижче, щоб просунутися далі!',
    introText14web:
      'Варто зазначити ще одну річ! Щоб використати суперсилу по-повній, вам потрібно навчитися її контролювати. Обов`язково прочитайте "Як користуватися Тудурантом", натиснувши кнопку праворуч вгорі!',
    edit: 'Редагувати',
    settingsObject: {
      showMoreByDefault:
        'Відразу показувати розширені налаштування додавання задачі',
    },
    googleCalendarHint:
      'У Google Календар синхронізуватимуться лише завдання, створені в Тудуранті з точним часом',
    googleCalendarGotIt: 'Зрозуміло!',
    frogsAlert: {
      title: 'Стоп! Це нелегально!',
      text:
        'Не порушуйте правила. Якщо у вас є сьогодні жаби, то виконайте їх, розбийте їх, перенесіть їх на майбутні дати або заберіть у них статус жаби. Будь ласка, не ігнорируйте жаб!',
    },
    to: 'Для',
    from: 'Від',
    unEpicInfo: 'Скинути епік',
    unEpicConfirm: 'Ви впевнені, що хочете скинути епік?',
    breakdownMessage: {
      title: 'Задача, що повторюється',
      text: 'Ця задача повторюється, ви хочете її розбити чи завершити?',
      complete: 'Завершити',
    },
  },  
  it: {
    encryption: {
      info:
        'Usa questa sezione con la massima cautela! La crittografia non funzionerà se non si aggiunge una password. Esistono due tipi di attività: crittografate e non crittografate. Tutte le nuove attività saranno crittografate. I vecchi compiti possono essere convertiti per essere crittografati con il pulsante in basso. Se perdi la password non ci sarà modo di recuperare le attività.',
      switch: 'Attività criptate',
      password: 'Password',
      encryptAllButton: 'Cripta tutto',
      decryptAllButton: 'Decrepita tutto',
      confirm:
        'Sei sicuro di voler crittografare le attività con questa password? Sarai in grado di decifrare attività in seguito con la stessa password. Se perdi la password, non sarai in grado di decriptare le attività!',
      disableConfirm:
        'Sei sicuro di voler rimuovere la password e disabilitare la crittografia? Questo non decripterà le attività che sono state criptate.',
      errorDecrypting: 'Password di decriptazione errata',
      repeatPassword: 'Ripetere la password',
      title: 'Crittografia',
    },
    search: 'Ricerca',
    qr: {
      code: 'Codice QR',
    },
    breakdown: {
      request:
        "Sembra che tu abbia spostato troppo questo compito. Si prega di scomporlo, non è più possibile spostarlo in un'altra data. Credimi, aiuterà a completare l'attività!",
      button: 'Arresto',
    },
    warning: 'Avviso',
    hashtags: {
      title: 'Hashtags',
    },
    supportAlert: {
      title: 'Supporto',
      text:
        'Se hai delle domande o dei suggerimenti, sentiti libero di <a href="mailto:todorant@borodutch.com">mandarmi un\'email</a>, <a href="https://t.me/borodutch" target="_blank">scrivermi su Telegram</a> oppure <a href="https://t.me/todorant_feedback" target="_blank">entrare nel gruppo Telegram della nostra community</a>!',
    },
    loginMobile: {
      telegram: {
        headline:
          'Prego, accedi con Telegram inserendo il tuo ID Telegram e premendo il bottone "Login". Puoi ottenere il tuo ID Telegram inviando <code>/id</code> su <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>. Oppure puoi anche semplicemente inviare <code>/qr</code> a <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a> e scansionare la foto nella sezione login con codice QR!',
        idHint: 'ID Telegram',
        loginButton: 'Login',
        noCredentialsError: 'Per favore, inserisci un ID Telegram',
        cannotSendMessageError:
          "Impossibile inviare la richiesta di accesso all'utente. Assicurati di aver avviato @todorant_bot e che l'ID di Telegram sia corretto.",
        waiting:
          'In attesa della risposta su <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'Richiesta di login respinta',
      },
    },
    noReport: {
      title: 'Ancora nessun dato',
      text: 'Vai, completa la tua prima attività e torna!',
    },
    report: {
      title: 'Statistiche',
      tasksCompleted: 'Attività completate',
      frogsCompleted: 'Rane completate',
      share: 'Condividi questi dati!',
      hashtag: 'Hashtag',
      shareButton: 'Condividi',
      url: 'Link permanente a questi dati',
      shareMessage: 'Guarda le statistiche della mia produttività da Todorant!',
      call: 'Vuoi iscriverti?',
      callButton: 'Iscriviti a Todorant',
      startDate: "Data d'inizio",
      endDate: 'Data di fine',
    },
    title: 'Todorant',
    cookie: {
      button: 'Ho capito!',
      message: '🍪 Questi sito utilizza cookies.',
    },
    home: {
      texts: {
        contact: [
          'Hai ancora domande? Contattami direttamente a ',
          '. Grazie.',
        ],
      },
      act: 'Agire!',
    },
    todo: {
      create: {
        placeholder: 'Attività',
        frog: 'È una rana!',
      },
    },
    cancel: 'Annulla',
    save: 'Salva',
    delete: 'Elimina',
    current: 'Corrente',
    planning: 'Pianificazione',
    skipped: 'Saltato',
    allDoneTitle: 'Congratulazioni!',
    allDoneText:
      "🥳 Ce l'hai fatta! Le attività di oggi son state completate, riposati o balla un po' 💃",
    noTodosTitle: "Verso l'infinito!",
    noTodosText:
      "Non hai attività per oggi. Se vuoi fare qualcosa aggiungi un'attività per oggi o fai quelle dei prossimi giorni.",
    addTodoTime: 'Ora esatta',
    completed: 'Completato',
    planningText:
      'Sembra che tu abbia qualche programmazione da fare! Per favore, ridistribuisci i compiti in sospeso qui sotto per sbloccare la scheda "Corrente" e continuare ad essere produttivo. Buona fortuna!',
    rules: [
      "Non appena ricevi un compito realizzabile (ricevere un'e-mail, una telefonata, un testo o se vedi qualcosa di interessante che deve essere messo nella tua lista delle cose da fare) — crea subito una cosa da fare. Non aspettate, ve ne dimenticherete se non lo togliete.",
      "Le attività dovrebbero essere sempre realizzabili e il più possibile esplicite. Se un'attività richiede meno di 2 minuti, allora fatela subito e registratela come completata.",
      "È possibile aggiungere una data specifica o selezionare un mese durante la creazione di un'attività. Non è possibile scegliere il mese corrente senza selezionare una data specifica. Questo viene fatto per rilassare la mente. Se vi fidate del sistema e mettete tutto ciò che deve essere fatto nella data corretta — lo incontrerete al momento giusto. Si spreca un'enorme quantità di forza di volontà per essere costantemente stressati da \"quell'altra cosa di cui ho bisogno di occuparmi, ma non sono del tutto sicuro di cosa fosse\". Impara a fidarti e a rilassarti.",
      'La prima cosa da fare ogni mese è pianificare in anticipo. Prendete tutti i compiti assegnati al mese in corso e ordinateli nelle date corrette. Questo vi permette di filtrare i compiti obsoleti e di mantenere la mente serena, sapendo esattamente cosa dovete fare questo mese.',
      'La prima cosa da fare la mattina è pianificare la giornata. Guardate la sezione Pianificazione. Siete in grado di gestire tutto? Distribuite i compiti che non possono essere svolti oggi. Ridistribuite tutti i compiti lasciati in sospeso dai giorni precedenti.',
      "A meno che non si tratti di un'emergenza, non guardate la sezione di pianificazione dopo aver finito di pianificare. Sarà molto meglio psicologicamente se vi concentrerete su un solo compito, quindi tenete d'occhio la sezione Corrente. Fidatevi del sistema, ricorda tutto. Fate il vostro lavoro e rilassate la mente.",
      "La sezione corrente contiene un solo compito sul quale è necessario concentrarsi — nient'altro. È possibile avere più di un compito al giorno, la quantità di compiti così come la barra di avanzamento viene visualizzata per comodità. Non è consentito saltare da un compito all'altro: ogni compito deve essere affrontato in modo lineare, uno per uno.",
      'Le rane sono tipi speciali di compiti che in genere non si vogliono affrontare. Di solito sono i compiti lasciati per mesi e persino anni. Todorant fa in modo di gestire le rane come prima cosa ogni giorno. Al mattino la vostra riserva di forza di volontà è abbastanza grande da poter gestire anche i compiti più oltraggiosi. E dopo aver finalmente a che fare con una rana — si riceve la felicità sufficiente per sorridere per tutto il giorno. Vi sentite orgogliosi di voi stessi quando avete a che fare con le rane.',
      "È consentito saltare l'attività corrente — ma cercate di farlo il più raramente possibile. Non si può saltare una rana. Se non riuscite a completare un compito e dovete ridistribuirlo due volte, diventa una rana.",
      "Se l'attività corrente è di livello troppo alto, allora scomporla in una lista di sottoattività. Non appena la si suddivide, l'attività viene contrassegnata come completata.",
      "Aggiungete quante più informazioni rilevanti possibili sulle cose da fare. Aggiungete link a specifiche e-mail (gmail sul web vi permette di farlo), siti web, note (come evernote), documenti (come dropbox), lasciate numeri di telefono o aggiungete tutte le informazioni necessarie per completare l'operazione. Todorant non vuole essere un punto di riferimento per voi, ma dovrebbe agire da catalogo di link alle informazioni di riferimento relative a specifiche attività.",
      'Sentitevi liberi di unirvi al nostro gruppo multilingue su Telegram per condividere esperienze e trucchi su come essere più produttivi — @todorant_feedback! I vostri commenti sul servizio — suggerimenti, desideri e reclami — sono benvenuti.',
      "Utilizzare la modalità di modifica (l'icona dell'ordine di lista in alto) nella pagina di pianificazione per modificare l'ordine delle attività. Se si desidera assegnare un compito ad una settimana specifica, è sufficiente assegnarlo al lunedì e riassegnarlo durante la fase di pianificazione il lunedì mattina.",
      "Todorant non ha e non avrà mai compiti ricorrenti — l'unica cosa che fanno bene è causare ansia che ricade su di voi come compiti incompiuti. Se avete bisogno di completare i compiti ripetuti — aggiungeteli tutti manualmente, il vostro cervello vi ringrazierà per averci pensato.",
      'Todorant non ha il concetto di "Progetti" in quanto ha dimostrato di essere demotivante, alcune delle "cartelle" non si aprono mai. I progetti "Fitness" e "Automiglioramento" mandano i loro saluti. Usa invece gli #hashtag.',
      'Le rane appariranno sempre in cima alla lista.',
      "Todorant non dispone di notifiche sui prossimi compiti con l'ora esatta impostata. Tuttavia, sentitevi liberi di utilizzare l'integrazione di Google Calendar in modo che Google possa infastidirvi con le notifiche, non Todorant.",
    ],
    earlyAdopter: 'Pioniere 🦄',
    active: 'Attivo',
    inactive: 'Inattivo',
    trial: 'Prova',
    weekday1: 'Lunedì',
    weekday2: 'Martedì',
    weekday3: 'Mercoledì',
    weekday4: 'Giovedì',
    weekday5: 'Venerdì',
    weekday6: 'Sabato',
    weekday0: 'Domenica',
    introTitle: 'Benvenuto!',
    introButton: 'Messaggio di benvenuto',
    introBack: 'Andiamo!',
    back: 'Indietro',
    soundEffects: 'Effetti sonori',
    emptyHashtags:
      "L'elenco degli hashtag è vuoto per ora. Create il vostro primo compito con un #hashtag per aggiungere il primo hashtag qui!",
    refreshRequest:
      'È disponibile una nuova versione di Todorant. Si prega di aggiornare la pagina per ottenere il nuovo materiale lucido 🦄',
    refresh: 'Aggiorna',
    homeShort: {
      headline: 'I sistemi di produttività falliscono.',
      headline2: 'Todorant funziona.',
      feature1: 'Concentrarsi su un compito alla volta',
      feature2: "Aggiungere sempre una data o un mese a un'attività",
      feature3: 'Completare prima i compiti sgradevoli',
      feature4: 'Tieni vuota la tua casella di posta in arrivo',
      differenceTitle: 'Qual è la differenza?',
      differenceText1:
        "Tutte le altre app per la produttività si concentrano sull'archiviazione, l'organizzazione e l'automazione di liste infinite di attività. Todorant si concentra sull'unica cosa che conta: ti fa completare i compiti.",
      differenceText2:
        'Todorant usa una serie di limiti e di elogi accuratamente studiati per punire i cattivi comportamenti e sostenere le buone abitudini. Colpisce la parte primitiva del cervello per fargli desiderare di completare i todos come le persone desiderano lo zucchero.',
      differenceText3:
        'Ho letto e provato più di 20 libri e metodologie di produttività. Quando tutti hanno fallito uno ad uno ho combinato i loro componenti e semplificato il risultato. È così che è stato creato il Todorant.',
    },
    googleCalendarDisableSuccess: 'Google Calendar disabilitato',
    googleCalendarEnableSuccess: 'Google Calendar abilitato',
  },
  'pt-BR': {
    encryption: {
      info:
        'Use esta seção com o máximo cuidado! A criptografia não funcionará, a menos que você adicione uma senha. Haverá dois tipos de tarefas: criptografadas e não criptografadas. Todas as novas tarefas serão criptografadas. Todos as antigas podem ser convertidas para criptografadas com o botão abaixo. Se você perder a senha, não haverá como recuperar as tarefas.',
      switch: 'Encriptar tarefas',
      password: 'Senha',
      encryptAllButton: 'Encriptar tudo',
      decryptAllButton: 'Descriptografar tudo',
      confirm:
        'Tem certeza de que deseja criptografar as tarefas com esta senha? Você poderá descriptografar todos mais tarde com a mesma senha. Se você perder a senha, não poderá descriptografar as tarefas!',
      disableConfirm:
        'Tem certeza de que deseja remover a chave e desativar a criptografia? Isso não descriptografará as tarefas criptografadas.',
      errorDecrypting: 'Senha de descriptografia incorreta',
      repeatPassword: 'Repita a senha',
      title: 'Criptografia',
    },
    search: 'Procurar',
    qr: {
      code: 'QR code',
    },
    breakdown: {
      request:
        'Parece que você está movendo muito essa tarefa. Por favor, divida-o, pois você não poderá mais movê-lo para outra data. Acredite, isso ajudará a você concluir a tarefa!',
      button: 'Decompor',
    },
    warning: 'Cuidado',
    hashtags: {
      title: 'Hashtags',
    },
    supportAlert: {
      title: 'Ajuda',
      text:
        'Se você tem qualquer dúvida ou sugestão, sinta-se a vontade para <a href="mailto:todorant@borodutch.com">enviar-me um email</a>, <a href="https://t.me/borodutch" target="_blank">contact me on Telegram</a> ou<a href="https://t.me/todorant_feedback" target="_blank">entrar na nossa comunidade no Telegram</a>!',
    },
    loginMobile: {
      telegram: {
        headline:
          'Faça o login no Telegram digitando seu Telegram ID no campo abaixo e clicando no botão "Login". Você pode obter seu Telegram ID enviando<code>/id</code> para o <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>. Ou você pode simplesmente enviar <code>/qr</code> para <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a> e scan isto na seção de QR Login!',
        noCredentialsError: 'Por favor, forneça um ID Telegram',
        cannotSendMessageError:
          'Não foi possível enviar a solicitação de login para o usuário. Verifique se você iniciou o @todorant_bot e se o ID do Telegram está correto.',
        waiting:
          'Aguardando a resposta em<a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'Login foi rejeitado',
      },
    },
    noReport: {
      title: 'Nenhum dado ainda',
      text: 'Vá em frente, complete o seu primeiro trabalho e volte aqui!',
    },
    report: {
      title: 'Estatísticas',
      tasksCompleted: 'Tarefas completadas',
      frogsCompleted: 'Sapos completados',
      share: 'Compartilhe este relatório',
      hashtag: 'Hashtag',
      shareButton: 'Compartilhar',
      url: 'Link permanente para este relatório',
      shareMessage: 'Confira meu relatório de produtividade do Todorant!',
      call: 'Quer se juntar?',
      callButton: 'Junte-se a Todorant',
      startDate: 'Data inicial',
      endDate: 'Data final',
    },
    cookie: {
      button: 'Entendi!',
      message: '🍪 Este website usa cookies.',
    },
    home: {
      texts: {
        contact: [
          'Ainda tem perguntas? Entre em contato comigo diretamente em',
          '. Muito Obrigado.',
        ],
      },
      signIn: 'Acessar',
      facebook: 'Conecte-se com Facebook',
      google: 'Conecte-se com Google',
      privacy: 'Política de Privacidade',
      feedback: {
        title: 'O que os usuários dizem?',
        reviews: [
          null,
          null,
          null,
          null,
          null,
          {
            text:
              'Comecei a fazer pelo menos alguma coisa com Todorant, por isso a minha produtividade subiu de 0.',
          },
        ],
      },
      act: 'Agir!',
      apple: 'Conecte-se com Apple',
    },
    menu: {
      darkMode: {
        on: 'Modo escuro: ativado',
        off: 'Modo escuro: desativado',
      },
      logout: 'Sair',
    },
    support:
      'Algo não está claro? Entre em contato comigo em<a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'Não foi possível conectar com Facebook',
        google: 'Não foi possível conectar com Google',
        telegram: 'Não foi possível conectar com Telegram',
        apple: 'Não foi possível conectar com Apple',
      },
      internal: 'Erro do Servidor Interno',
      loadTodos: 'Não foi possível buscar as tarefas',
      todo: {
        textLenght: 'As tarefas devem ter texto',
        dateOrMonth: 'Tarefas devem ter data ou mês definidos',
        more1500: "L'attività non può contenere più di 1500 caratteri.",
      },
      invalidForm: 'Por favor, preencha os campos obrigatórios',
      report: 'Não foi possível carregar o relatório',
      appleFirefox:
        'Infelizmente, existe <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1628361"> um bug </a> com o login da Apple no Firefox. Até que seja resolvido, use outros navegadores da Web para fazer login na Apple — e depois mescle com outras contas sociais no Todorant. Desculpe pela inconveniência.',
    },
    close: 'Fechar',
    notFound: 'Página não encontrada',
    todo: {
      create: {
        title: 'Adicionar tarefas',
        text: 'Texto da tarefa',
        textHint: 'Você pode adicionar um link para um email ou site',
        placeholder: 'Tarefa',
        frog: 'Isto é um sapo!',
        date: 'Dia exato',
        month: 'Ou mês',
        tooltip:
          'As tarefas devem sempre ser: praticáveis ("Encontre os melhores voos para o México" vs "Vá para o México"); o mais pequeno e exato possível ("Tire o pó dos monitores" vs "Limpe a casa").',
        goFirst: 'Adicione no topo',
      },
      list: {
        completed: 'Mostrar concluído',
      },
      edit: {
        title: 'Editar',
      },
    },
    cancel: 'Cancelar',
    save: 'Salvar',
    delete: 'Apagar',
    deleteHeadline: 'Tem certeza de que deseja excluir "{name}"?',
    current: 'Atual',
    planning: 'Planejamento',
    created: 'Criada',
    breakdownInfo:
      'Use a função decompor quando a tarefa atual for muito extensa',
    howto: {
      title: 'Como usar Todorant?',
      premise:
        'Abaixo estão os principais princípios que você deve seguir para explorar produtivamente todos os recursos fornecidos pela Todorant. É fácil como 1-2-3... Apenas com mais algumas etapas.',
      bonus: {
        title: 'Recursos bônus',
        rules: [
          'Use Atalhos de teclado quando estiver no desktop! Você pode (a) adicionar, (b) decompor, (c) alternar para atual, (d) marcar como feito e alternar para (p)lanejamento. Para adicionar uma tarefa adicional ao adicionar tarefas, você pode usar Ctrl+Shift+A.',
        ],
      },
    },
    skipped: 'Pular',
    moveUp: 'Mover para hoje',
    settings: {
      title: 'Definições',
      showTodayOnAddTodo: 'O padrão é hoje ao criar uma tarefa',
      firstDayOfWeek: 'Primeiro dia da semana',
      newTodosGoFirst: 'Novas tarefas são adicionadas no topo da lista',
      preserveOrderByTime: 'Preservar a hora exata',
      general: 'Geral',
      integrations: 'Integrações',
      connected: 'Conectado',
      notConnected: 'Não conectado',
      googleCalendar: 'Google Agenda',
      disconnectConfirm: 'Tem certeza de que deseja desconectar este serviço?',
      account: 'Conta',
      startTimeOfDay: 'Início do dia',
    },
    allDoneTitle: 'Parabéns!',
    allDoneText:
      '🥳 Você Conseguiu! Todas as tarefas de hoje estão concluídas. Pode ir descansar ou, quem sabe, dançar um pouco 💃',
    noTodosTitle: 'Ao infinito!',
    noTodosText:
      'Você não tem nenhuma tarefa pra hoje. Se você quiser trabalhar — adicione uma nova tarefa ou pegue uma tarefa futura.',
    addTodoTime: 'Horario exato',
    completed: 'Feito',
    planningText:
      'Parece que vc tem um planejamento a ser feito. Distribua as tarefas pendentes abaixo para desbloquear a guia "Atual" e continuar produtivo. Felicidades!',
    rules: [
      'Assim que você receber uma tarefa acionável (receber um e-mail, uma chamada telefônica, um texto ou se vir algo interessante que deva ser colocado na sua lista de tarefas) — crie uma tarefa para ela imediatamente. Não espere, você o esquecerá se não o fizer.',
      'Tarefas devem ser sempre acionáveis e o mais explícitos possível. Se uma tarefa demorar menos de 2 minutos, faça-a imediatamente e registre-a como concluída.',
      'Você pode adicionar uma data específica ou selecionar um mês ao criar uma tarefa. Você não pode escolher o mês atual sem selecionar uma data específica. Isso é feito para relaxar sua mente. Se você confia no sistema e coloca tudo o que precisa ser feito na data correta — você o encontrará no momento certo. Uma quantidade enorme de força de vontade é desperdiçada por estar constantemente estressado com "essa outra coisa com a qual preciso lidar, mas não tenho muita certeza do que era". Aprenda a confiar e relaxar.',
      'A primeira coisa que você faz a cada mês é planejar com antecedência. Você pega todas as tarefas atribuídas ao mês atual e as classifica nas datas corretas. Isto permite filtrar tarefas desatualizadas e manter sua mente em paz, sabendo exatamente o que você precisa fazer este mês.',
      'A primeira coisa que você faz pela manhã é planejar o seu dia. Dê uma olhada na sua seção Planejamento. Você pode lidar com tudo? Distribua as tarefas que não podem ser tratadas hoje. Redistribua todas as tarefas deixadas por fazer dos dias anteriores.',
      'A menos que seja uma emergência, não olhe para a seção de planejamento após conclui-lo. Será psicologicamente melhor se você se concentrar apenas em uma tarefa; portanto, fique de olho na seção Atual. Confie no sistema, ele se lembra de tudo. Faça seu trabalho e relaxe sua mente.',
      'A seção atual contém apenas uma tarefa na qual você precisa se concentrar — nada mais. Você pode ter mais de uma tarefa por dia, a quantidade de tarefas e a barra de progresso são exibidas para sua conveniência. Você não tem permissão para alternar entre tarefas — você deve lidar com todas as tarefas linearmente, uma por uma.',
      'Sapos são tipos especiais de tarefas com as quais você geralmente não deseja lidar. Geralmente são as tarefas deixadas para trás por meses e até anos. Todorant garante que você lide com os sapos todos os dias. De manhã, sua reserva de força de vontade é grande o suficiente para lidar com as tarefas mais desagradáveis. E depois que você finalmente lida com um sapo — você recebe felicidade suficiente para sorrir durante todo o dia. Você se sente orgulhoso quando lida com sapos.',
      'Você tem permissão para pular a tarefa atual — mas tente fazê-lo o mais raramente possível. Você não pode pular um sapo. Se você não conseguiu concluir uma tarefa e teve que redistribuí-la duas vezes, ela se tornará um sapo.',
      'Se a tarefa atual for muito difícil, divida-a em uma lista de subtarefas. Assim que você a divide, a tarefa é marcada como concluída.',
      'Adicione o máximo possível de informações relevantes sobre a tarefa. Adicione links a e-mails específicos (o Gmail Web permite fazer isso), sites, anotações (como o Evernote), documentos (como o Dropbox), deixe números de telefone ou adicione as informações necessárias para concluir a tarefa. Todorant não deve ser um ponto de referência para você — em vez disso, ele deve atuar como um catálogo de links para as informações de referência relevantes para tarefas específicas.',
      'Sinta-se à vontade para se juntar ao nosso grupo multilíngue no Telegram para compartilhar experiências e truques sobre como ser mais produtivo — @todorant_feedback! Seus comentários sobre o serviço — sugestões, desejos e reclamações — são muito bem-vindos.',
      'Use o modo de edição (o ícone da lista na parte superior) na página Planejamento para alterar a ordem das tarefas. Se você deseja atribuir uma tarefa a uma semana específica, atribua-a à segunda-feira e atribua-a novamente durante a fase de planejamento na segunda-feira de manhã.',
      'Todorant não tem e nunca terá tarefas repetidas — a única coisa que elas fazem é causar uma ansiedade pairando sobre você como tarefas inacabadas. Se você precisar concluir tarefas repetidas — adicione todas elas manualmente, seu cérebro agradecerá por tarefas conscientes.',
      'Todorant não tem o conceito de "Projetos", pois provou ser desmotivador. Algumas das "pastas" nunca se abrem. Os projetos "Fitness" e "Auto-aperfeiçoamento" enviam seus cumprimentos. Em vez disso, use #hashtags.',
      'Sapos sempre aparecerão no topo da lista.',
      'Todorant não tem notificações sobre as próximas tarefas com a hora exata definida. No entanto, sinta-se à vontade para usar a integração com o Google Agenda para que o Google possa incomodá-lo com notificações, não o Todorant.',
    ],
    earlyAdopter: 'Early adopter 🦄',
    active: 'Ativo',
    inactive: 'Intivo',
    trial: 'Trial',
    weekday1: 'Segunda',
    weekday2: 'Terça',
    weekday3: 'Quarta',
    weekday4: 'Quinta',
    weekday5: 'Sexta',
    weekday6: 'Sábado',
    weekday0: 'Domingo',
    introTitle: 'Bem vindo!',
    introButton: 'Mensagem de introdução',
    introBack: 'Vamos lá!',
    back: 'Voltar',
    soundEffects: 'Efeitos sonoros',
    emptyHashtags:
      'A lista de hashtags está vazia por enquanto. Crie sua primeira tarefa com uma #hashtag para adicionar a primeira hashtag aqui!',
    refreshRequest:
      'Existe uma nova versão do Todorant disponível. Atualize a página para novas e brilhantes funcionalidades 🦄',
    refresh: 'Atualizar',
    infoHero:
      'Esta é a sua página de perfil, campeão! Conclua tarefas e ganhe pontos para obter classificações cada vez mais altas! \\n\\nVocê não conhecerá a lista de classificações até alcançar a mais alta! Lembre-se: a única maneira de chegar ao topo é através da sequência diária de pequenos passos.',
    rank: '🔥 Sua classificação 🔥',
    'rank-1Description':
      'Você alcançou a classificação que nenhum humano foi capaz de alcançar antes! Parabéns, aqui está sua torta: 🍰. Desta vez não é mentira.',
    rank5Title: 'V de Vrodutividade 👺',
    rank13Title: 'Freddy Feliz 😱',
    rank13Description:
      'Você sabe que dia é hoje. É o dia em que Jason assa um bolo para você. Todo dia é esse dia agora.',
    homeShort: {
      headline: 'Falha nos sistemas de produtividade.',
      headline2: 'Todorant funciona.',
      feature1: 'Concentre-se em uma tarefa de cada vez',
      feature2: 'Sempre adicione uma data ou um mês a uma tarefa',
      feature3: 'Complete tarefas desagradáveis (sapos) primeiro',
      feature4: 'Mantenha sua caixa de entrada vazia',
      differenceTitle: 'Qual é a diferença?',
      differenceText1:
        'Todos os outros aplicativos de produtividade se concentram em armazenar, organizar e automatizar infinitas listas de tarefas. Todorant se concentra na única coisa que importa: faz você concluir as tarefas.',
      differenceText2:
        'Todorant usa um conjunto cuidadosamente elaborado de limites e elogios para punir o mau comportamento e apoiar os bons hábitos. Afeta a parte primitiva do cérebro, fazendo com que anseie por completar todos, como as pessoas anseiam por açúcar.',
      differenceText3:
        'Eu li e experimentei mais de 20 livros e metodologias de produtividade. Quando todos falharam um por um, combinei seus componentes e simplifiquei o resultado. Foi assim que o Todorant foi criado.',
    },
    googleCalendarDisableSuccess: 'Google Agenda desativado',
    googleCalendarEnableSuccess: 'Google Agenda ativado',
    delegate: {
      title: 'Atribuição',
      noDelegators:
        'Você ainda não tem atribuições. Compartilhe o link acima com as pessoas que você deseja designar atribuições.',
      pickDelegateField: 'Atribuir',
    },
  },
  ro: {
    encryption: {
      info:
        'Folosiți această secțiune cu atenție maximă! Criptarea nu va funcționa dacă nu veți introduce o parolă. După finalizare vor exista două tipuri de task-uri: criptate și necriptate. Toate task-urile noi vor fi criptate. Task-urile vechi pot fi criptate făcând clic pe butonul de mai jos. Dacă vă pierdeți parola, va fi imposibilă recuperarea task-urilor.',
      switch: 'Criptarea task-ului',
      encryptAllButton: 'Criptează tot',
      decryptAllButton: 'Decriptează tot',
      confirm:
        'Sunteți sigur că doriți să criptați toate task-urile cu o parolă? Veți putea decripta datele cu aceeași parolă. Dacă veți pierde parola, nu veți reuși să decriptați datele!',
      disableConfirm:
        'Sunteți sigur că doriți să eliminați parola și să dezactivați criptarea? Această acțiune nu va decripta task-urile criptate.',
      errorDecrypting: 'Parolă de decriptare incorectă',
    },
    search: 'Căutare',
    qr: {
      code: 'Cod QR',
    },
    breakdown: {
      request:
        'Se pare că amânați acest task prea des. Vă rugăm să îl împărțiți în task-uri mai mici, nu îl mai puteți amâna. Crede-mă, acest lucru te va ajuta să îndeplinești sarcina!',
      button: 'Împarte',
    },
    warning: 'Atenție',
    hashtags: {
      title: 'Hashtag-uri',
    },
    supportAlert: {
      title: 'Suport',
    },
    loginMobile: {
      telegram: {
        idHint: 'ID Telegram',
        loginButton: 'Intrați',
        noCredentialsError: 'Vă rugăm, indicați ID-ul Telegram',
        notAllowedError: 'Cererea de logare a fost respinsă',
      },
    },
    noReport: {
      title: 'Date insuficiente',
    },
    report: {
      title: 'Raport',
      tasksCompleted: 'Task-uri finalizate',
      frogsCompleted: 'Broaște finalizate',
      share: 'Distribuiți prietenilor acest raport!',
      hashtag: 'Hashtag',
      shareButton: 'Distribuie',
      url: 'Link permanent către acest raport',
      shareMessage:
        'Trageți o privire la raportul meu de productivitate în Todorant!',
      call: 'Doriți să vă alăturați?',
      callButton: 'Alătură-te lui Todorant',
      startDate: 'Data de început',
      endDate: 'Data de sfârșit',
    },
    title: 'Todorant',
    cookie: {
      button: 'Am înțeles!',
      message: '🍪 Acest site web folosește cookies.',
    },
    home: {
      texts: {
        contact: ['Au mai rămas întrebări? Scrieți-mi la', '. Mulțumesc.'],
      },
      signIn: 'Intrați',
      facebook: 'Intrați cu Facebook',
      google: 'Intrați cu Google',
      privacy: 'Politica de confidențialitate',
      feedback: {
        title: 'Ce zic utilizatorii?',
        reviews: [
          {
            name: 'Sergiu Romanov',
          },
          {
            name: 'Dinislam Sad',
          },
          {
            name: 'Aleksei Kaut',
          },
          {
            name: 'Anton',
          },
          null,
          null,
          {
            name: 'Vladimir Dubenco',
          },
          {
            name: 'Maksim Alekseyevich',
            username: 'MMAradiology',
          },
          {
            name: 'Kiku Reise',
          },
        ],
      },
    },
    menu: {
      darkMode: {
        on: 'Tema întunecată: pornită',
        off: 'Tema întunecată: deact.',
      },
      logout: 'Ieșiți',
    },
    support:
      'Ceva nu e clar? Scrieți-mi la <a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'Nu s-a reușit conectarea prin Facebook',
        google: 'Nu s-a reușit conectarea prin Google',
        telegram: 'Nu s-a reușit conectarea prin Telegram',
      },
      internal: 'Eroare internă de server',
      loadTodos: 'Nu s-a reușit încărcarea task-urilor',
      todo: {
        textLenght: 'Task-urile trebuie să conțină text',
      },
      invalidForm: 'Vă rugăm, completați câmpurile necesare',
      report: 'Nu s-a reușit încărcarea raportului',
    },
    close: 'Închide',
    notFound: 'Pagina nu a fost găsită',
    todo: {
      create: {
        title: 'Adăugă task-uri',
        text: 'Textul task-ului',
        placeholder: 'Task-ul',
        frog: 'Aceasta e o broască!',
        date: 'Ziua exactă',
        month: 'Sau luna',
      },
    },
    cancel: 'Anulează',
    save: 'Salvează',
    delete: 'Șterge',
    current: 'Curent',
    planning: 'Planificare',
    howto: {
      bonus: {
        title: 'Funcții bonus',
      },
    },
    skipped: 'Omis',
    allDoneTitle: 'Felicitări!',
    allDoneText:
      '🥳 Ați reușit! Toate task-urile pentru azi sunt finalizate, vă puteți odihni — fie un pic să dansați 💃',
    noTodosTitle: 'Înainte!',
    noTodosText:
      'Pentru azi dvs. nu aveți task-uri. Doriți să lucrați — adăugați task-uri noi pentru azi fie luați task-uri din alte zile.',
    addTodoTime: 'Timpul exact',
    completed: 'Finalizat',
    planningText:
      'Aparent, trebuie să realizați o planificare! Vă rog, redistribuiți task-urile rămase de mai jos pentru a debloca secțiunea "Curent" și pentru a rămâne productiv. Succes!',
    earlyAdopterText:
      '👏👏 — bat din palme din picioare; sunteți nebuni, care au fost de acord să încerce instrumentul de productivitate personală Todorant printre primii. Putem spune că sunteți cei o mie de utilizatori de aur, pe baza recenziilor cărora a fost creat Todorant. Aveți tot dreptul să utilizați Tudurant cât doriți — nu vor exista niciodată restricții pentru acest cont, chiar ați meritat. Cu toate acestea, dacă observați că Todorant v-a schimbat dramatic viața spre bine, puteți achiziționa în continuare un abonament, spunând astfel un simplu, dar foarte important pentru mine: „Mulțumesc”. Nu veți pierde niciodată statutul de „Adoptator timpuriu 🦄” și vă puteți anula abonamentul oricând. Vă mulțumesc foarte mult pentru că continuați să utilizați Todorant — și voi continua să adaug funcții frumoase acestui instrument care ne face pe fiecare dintre noi mai buni. Mult noroc!',
    earlyAdopterTextBonus:
      '🤗 Uau! Aparent fie Todorant, fie eu v-am ajutat personal atât de mult încât, chiar având posibilitatea de a folosi Todorant gratuit, ați decis să mă susțineți. Sunt frapat și cu plăcere aș bea o cafea cu dvs. Scrieți-mi fie în telegram (@borodutch), fie prin e-mail — trebuie doar să faceți clic pe numele meu de mai jos. Mulțumesc mult! Este greu de imaginat cât de importantă este contribuția voastră pentru mine!',
    trialText:
      '💪 Bine ați venit la Tudurant! Din momentul înregistrării, aveți exact 30 de zile pentru a încerca sistemul și a vedea dacă vi se potrivește. După 30 de zile, veți avea în continuare acces la sarcinile existente, dar nu veți putea adăuga altele noi. Dacă doriți, puteți să vă abonați chiar înainte de sfârșitul perioadei de probă de 30 de zile. Sunt sigur că împreună cu Todorant veți putea atinge noi orizonturi în propria productivitate!',
    rules: [
      'Îndată ce aveți o sarcină (primiți un e-mail, un apel, un mesaj sau pur și simplu vedeți ceva interesant care trebuie adăugat în lista dvs. de sarcini) — creați imediat o sarcină. Nu așteptați, veți uita de ea dacă nu o notați.',
      'Sarcinile trebuie să fie întotdeauna un îndemn la acțiune și definite cât mai clar posibil. Dacă sarcina durează mai puțin de două minute, faceți-o imediat și creați-o în lista sarcinilor finalizate.',
      'Când creați o sarcină, specificați data sau luna exactă. Nu puteți selecta luna curentă fără o anumită dată. Acest lucru se face pentru a ameliora stresul creierului. Dacă aveți încredere în sistem și adăugați tot ce aveți nevoie la datele potrivite, atunci veți finaliza sarcinile la momentul potrivit. O cantitate imensă de voință este irosită din cauza stresului constant, cum ar fi „lucrul pe care trebuie să-l fac, dar nu-mi amintesc exact ce este acel lucru”. Învățați să aveți încredere și să vă relaxați. \\n',
      'Primul lucru pe care va trebui să îl faceți la începutul fiecărei luni este planificarea. Luați toate sarcinile pentru luna curentă și distribuiți-le pe zile. Acest lucru vă permite să filtrați sarcinile care nu mai sunt relevante și vă ajută să rămâneți liniștiți, conștientizând clar ce trebuie să faceți luna aceasta.',
      'Primul lucru pe care îl veți realiza în fiecare dimineață este planificarea. Aruncați o privire la secțiunea „Planificare”. Puteți face totul? Împrăștiați sarcinile pe care nu le puteți face astăzi pentru alte zile. De asemenea, împrăștiați sarcinile neterminate din zilele anterioare.',
      'Cu excepția cazurilor extreme, nu priviți niciodată secțiunea de planificare după terminarea procesului de planificare. Vă va fi mult mai ușor din punct de vedere psihologic să vă concentrați pe o singură sarcină la un moment dat, așa că priviți doar la secțiunea "Curent". Ai încredere în sistem, ține minte totul. Lucrați și relaxați-vă creierul.',
      'În secțiunea "Curent", există întotdeauna cel mult o sarcină pe care ar trebui să vă concentrați — nimic altceva. Puteți avea mai multe sarcini pe zi, numărul sarcinilor și progresul sunt afișate pentru comfortul dumneavoastră. Nu puteți sări între sarcini — trebuie să lucrați într-un mod liniar, realizând câte o sarcină la un moment dat.',
      'Broaștele — reprezintă un tip special de sarcină pe care nu doriți să o faceți. De obicei, acestea sunt sarcini pe care nu le faceți luni de zile sau chiar ani. Tudurant vă face să vă ocupați de broaște în primul rând în fiecare zi. Dimineața, rezervele voastre sunt suficient de mari pentru a face față și celor mai neplăcute sarcini. Iar după ce învingeți broasca, veți primi o doză suficientă de fericire pentru a străluci cu zâmbet toată ziua. Veți fi mândru de dvs. că în sfârșit reușiți să doborâți aceste "broaște".',
      'Vi se permite să săriți peste sarcina curentă — dar faceți-o cât mai puțin posibil. Dacă nu puteți finaliza o sarcină și o redistribuiți de două ori, aceasta devine o broască.',
      'Dacă sarcina curentă este prea grea, descompuneți-o într-o listă de sarcini mai mici. După ce ați împărțit o sarcină în subtask-uri, aceasta este marcată ca finalizată.',
      'Adăugați cât mai multe informații importante la sarcini. Adăugați linkuri către e-mailuri (Gmail vă permite să faceți acest lucru), site-uri web, note (ca evernote), documente (cum ar fi dropbox), lăsați numere de telefon sau adăugați orice informații care ar putea fi importante pentru rezolvarea unei probleme. Todorant nu ar trebui să fie principalul depozit și catalogul datelor dvs., ci locul în care datele necesare pentru sarcini să fie stocate nemijlocit împreună cu acele sarcini.',
      'Simțiți-vă liber să vă alăturați grupului nostru în Telegram pentru a vă împărtăși experiențele despre cum să fiți mai productivi — @todorant_feedback! Feedback-ul dvs. cu privire la activitatea serviciului — sugestii, urări și reclamații — este foarte binevenit.',
      'Mutați activitățile din pagina "Planificare" pentru a le reordona. Dacă doriți să creați o sarcină pentru o anumită săptămână, trebuie doar să o adăugați pentru luni și să o redistribuiți-o luni dimineața, când realizați planificarea.',
      'În Todorant nu există și nu vor exista niciodată sarcini repetitive automate — singurul lucru pe care ele îl induc — este crearea unei atmosfere de frică, acumularea de sarcini neîmplinite. Dacă trebuie să adăugați o sarcină repetitivă — introduceți-o manual de fiecare dată, creierul vă va mulțumi pentru o sarcină gândită.',
      'În Todorant nu există un concept de „Proiecte”, întrucât s-a dovedit a fi demotivant, unele dosare pur și simplu nu se deschid niciodată. Proiectele „Fitness” și „Auto-dezvoltare” spun salut. Folosiți în schimb #hashtag-uri.',
      'Broaștele se află mereu în vârful listei.',
      'În Todorant nu există memento-uri de sarcină cu orele exacte. Cu toate acestea, puteți activa integrarea cu Google Calendar, astfel încât el să vă bombardeze cu notificări în loc de Todorant.',
    ],
    earlyAdopter: 'Adoptator timpuriu 🦄',
    active: 'Activă',
    inactive: 'Inactivă',
    trial: 'Probă',
    weekday1: 'Luni',
    weekday2: 'Marți',
    weekday3: 'Miercuri',
    weekday4: 'Joi',
    weekday5: 'Vineri',
    weekday6: 'Sâmbăta',
    weekday0: 'Duminica',
    introTitle: 'Bine ați venit!',
    introBack: 'Înainte!',
    back: 'Înapoi',
  },
  de: {
    search: 'Suche',
  },
  es: {
    breakdown: {
      request:
        'Parece que has pospuesto demasiado esta tarea. Por favor desglósala, ya no puedes posponerla a otra fecha. ¡Creéme, te ayudará a completarla!',
      button: 'Desglosar',
    },
    warning: 'Advertencia',
    hashtags: {
      title: 'Hashtags',
    },
    supportAlert: {
      title: 'Soporte',
      text:
        'Si tienes dudas o sugerencias, siéntete libre de <a href="mailto:todorant@borodutch.com">enviarme un email</a>, <a href="https://t.me/borodutch" target="_blank">contactarme en Telegram</a> o <a href="https://t.me/todorant_feedback" target="_blank">unirte a nuestra comunidad en Telegram</a>.',
    },
    loginMobile: {
      telegram: {
        headline:
          'Por favor inicia sesión con Telegram introduciendo tu ID de Telegram en el campo que se encuentra debajo y haciendo clic en el botón de "Iniciar sesión". Puedes obtener tu ID de Telegram enviando <code>/id</code> al bot <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>.',
        idHint: 'ID de Telegram',
        loginButton: 'Iniciar sesión',
        noCredentialsError: 'Por favor, introduce una ID de Telegram',
        cannotSendMessageError:
          'No se pudo enviar la solicitud de inicio de sesión al usuario. Asegúrate de haber iniciado @todorant_bot y de que la ID de Telegram sea correcta.',
        waiting:
          'Esperando la respuesta en <a href="https://t.me/todorant_bot" target="_blank">@todorant_bot</a>...',
        notAllowedError: 'El inicio de sesión fue rechazado',
      },
    },
    noReport: {
      title: 'Sin datos todavía',
      text: 'Vamos, ¡completa tu primer tarea y vuelve!',
    },
    report: {
      title: 'Estadísticas',
      tasksCompleted: 'Tareas completadas',
      frogsCompleted: 'Sapos completados',
      share: '¡Compartir este reporte!',
      hashtag: 'Hashtag',
      shareButton: 'Compartir',
      url: 'Enlace permanente a este reporte',
      shareMessage:
        '¡Echa un vistazo a mi reporte de productividad en Todorant!',
      call: '¿Deseas unirte?',
      callButton: 'Unirse a Todorant',
      startDate: 'Fecha de inicio',
      endDate: 'Fecha de finalización',
    },
    title: 'Todorant',
    cookie: {
      button: '¡Entendido!',
      message: '🍪 Este sitio web utiliza cookies.',
    },
    home: {
      texts: {
        contact: [
          '¿Sigues teniendo preguntas? Contáctame directamente en ',
          '. Gracias.',
        ],
      },
      signIn: 'Registrarse',
      facebook: 'Registrarse con Facebook',
      google: 'Registrarse con Google',
      privacy: 'Política de privacidad',
      feedback: {
        title: '¿Qué dicen los usuarios?',
        reviews: [
          {
            name: 'Sergey Romanov',
            text:
              'Los mensajes en la parte de la suscripción son lindos :)\n\nGracias por un servicio simple y próspero por el servicio ideal. Resultó que no sólo ayuda a ser productivo sino también proactivo. Pequeñas mejoras diarias mejoran la vida con confianza, y la mente libre está constantemente buscando cómo llenar la lista de tareas vacía para que pueda sentir el placer de completar tareas una y otra vez, y es una ruta directa hacia la mejora de todo lo que me rodea.\n\nCon todo, no importa cuán simple sea a primera vista Todorant, puede convertirse en un aliado fiel en cualquier negocio. Gracias, Nikita, por desatar los aspectos de la verdadera productividad y compartirlos con nosotros en una solución conveniente.\n\nUn agradecido suscriptor de Todorant.',
          },
          {
            name: 'Dinislam Sad',
            text:
              'Las principales ventajas que a mí (y estoy seguro que también a otros) me gustaron.\n1. Interfaz simple y conveniente.\n2. Las tareas pospuestas se vuelven sapos automáticamente y existe la opción de marcar una tarea como sapo desde el inicio.\n3. El comando /done era algo obligado, y gracias por ello, Nikita. Yo usé Todoist, Wunderlist, Bitrix24. Todos eran demasiado complicados.\n4. Bot de Telegram.',
          },
          {
            name: 'Aleksei Kaut',
            text:
              'Después de que creé las primeras tareas y cambié a la pestaña "Actual" me sorprendí de que tenía solamente una tarea y de que necesitaba completarla antes de continuar. Esta idea de una sola tarea a la vez y plena concentración en ella me pareció sorprendente, parece obvio, pero no podía usarla antes.\n\nUsualmente rastreaba tareas e ideas en Notas, lo que debería hacerse pronto, pero no lo enfoqué como un sistema. He estado utilizando el servicio durante un par de semanas, no de manera muy activa, pero creo que esta es una forma muy sólida de sistematizar los asuntos y las tareas.\n\n¡Gracias por tu trabajo!',
          },
          {
            name: 'Anton',
            text:
              'Probé Todorant. Al inicio estaba escéptico (ya he probado muchos servicios de planeación de tareas), pero me di cuenta de que trabaja muy efectivamente y de que es muy fácil de usar.\n\nAdemás, por razones desconocidas para mí, cuando todas las tareas del día están completadas aparece una fuerte satisfacción, la cual estaba ausente en otros planificadores (había una sensación como de "bueno, eso fue todo... ¿o no?").\n\n¡Gracias por tu trabajo!',
          },
          {
            name: 'Willsey Paslen',
            text:
              'Gracias por el estupendo servicio. Suficiente tiempo ha pasado, así que ahora puedo decir definitivamente: me funciona. Gracias, Nikita 😁 y buena suerte con la app.',
          },
          {
            name: 'Igor Malinkin',
            text:
              'Comencé al fin a hacer algo con Todorant, así que mi productividad subió desde 0.',
          },
          {
            name: 'Vladimir Dubenko',
            text:
              'Tu servicio es increíble en términos de al menos tres cosas:\n1. Conveniente:¡es minimalista!\n2. Inculca un hábito.\n3. Aunque parezca extraño, no te obliga a pensar racionalmente.\n\nSoy irracional por naturaleza, Simplemente no puedo dirigir un proyecto (me agoto rápidamente). ¡Mi vida es la multitarea! 3 proyectos al mismo tiempo son fáciles, pero 3 no es suficiente... 7 suena mucho mejor. Y tu servicio permite conseguir esto. Es la alternancia de tareas la que previene que el cerebro se fatigue en una dirección particular. Y, de alguna manera mágica, alterna tareas de un proyecto y otro.',
          },
          {
            name: 'Maksim Alekseyevich',
            username: 'MMAradiology',
            text:
              'No puedo decir que mi vida haya cambiado usando Todorant. ¿Puedo decir que esta es una aplicación/página web significativa y muy útil? Sí, mil veces sí.\n\nMe gusta Todorant, me permite liberar mi "memoria de operación" y me permite concentrarme en resolver problemas, no en recordarlos. Como dijo correctamente Nikita (el creador): con uso constante y correcto, las tareas que solían causar verdadero terror bíblico dejarán de aparecer. Y esto no sucederá porque las tareas complejas dejen de llegar. Será claro para ti (y para mí, y para todos) que "el camino será dominado por aquellos caminando", "el camino de las mil millas comienza con un paso".',
          },
          {
            name: 'Kiku Reise',
            text:
              'He ordenado mis tareas del trabajo, de programación y de mis pasatiempos. Incluso esta opinión fue escrita gracias a Todorant. Solamente una tarea, sin complicaciones. Ese es todo el punto de la app: me ayudó a concentrarme sin tener que estar evadiendo mis tareas constantemente. \n\nPor supuesto, puedes definir tareas y olvidarte de ellas, pero para mí es más simple abrir de nuevo una aplicación minimalista con una sola tarea que gastar medio día buscando en qué tarea trabajar ahora de cientos planeadas en Telegram o Notion.\n\nEstuve especialmente complacido con la actualización que trajo los hashtags: ahora todas las estadísticas están en la palma de mi mano, puedo rastrear y compartir con mis amigos cuántas tareas he completado este mes.\n\n¡Muchas gracias por!',
          },
        ],
      },
      act: '¡actúe!',
      apple: 'Registrarse con Apple',
    },
    menu: {
      darkMode: {
        on: 'Modo oscuro: encendido',
        off: 'Modo oscuro: apagado',
      },
      logout: 'Cerrar sesión',
    },
    support:
      '¿Algo no está claro? Contáctame en <a target="_blank" href="mailto:n@borodutch.com">n@borodutch.com</a>',
    errors: {
      login: {
        facebook: 'No se pudo iniciar sesión con Facebook',
        google: 'No se pudo iniciar sesión con Google',
        telegram: 'No se pudo iniciar sesión con Telegram',
        apple: 'No se pudo iniciar sesión con Apple',
      },
      internal: 'Error interno del servidor',
      loadTodos: 'No se pudo extraer las tareas',
      todo: {
        textLenght: 'Las tareas deberían tener texto',
        dateOrMonth:
          'Las tareas deben estar asignadas a una fecha o mes específico',
        more1500: 'La tarea no puede tener más de 1500 caracteres.',
      },
      invalidForm: 'Por favor, completa los campos requeridos',
      report: 'No se pudo cargar el reporte',
      appleFirefox:
        'Desafortunadamente hay <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1628361">un bug</a> con el inicio de sesión en Apple desde Firefox. Hasta que lo solucionen, por favor, usa otro navegador para iniciar sesión con Apple, y después une tu sesión con otras cuentas sociales en Todorant. Una disculpa por la inconveniencia.',
    },
    close: 'Cerrar',
    notFound: 'Página no encontrada',
    todo: {
      create: {
        title: 'Agregar tareas',
        text: 'Texto de la tarea',
        textHint: 'Puedes agregar un enlace a un email o a un sitio web',
        placeholder: 'Tarea',
        frog: '¡Es un sapo!',
        date: 'Día exacto',
        month: 'O mes',
        tooltip:
          'Las tareas siempre deberían ser: accionables ("Encontrar los mejores vuelos a México" en vez de  "Ir a México"); tan pequeñas y tan exactas como sea posible ("Desempolvar el monitor" en vez de "Limpiar la casa").',
        goFirst: 'Agregar hasta arriba',
      },
      list: {
        completed: 'Mostrar completadas',
      },
      edit: {
        title: 'Editar',
      },
    },
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Borrar',
    deleteHeadline: '¿Estás seguro de que quieres borrar "{name}"?',
    current: 'Actual',
    planning: 'Planeación',
    created: 'Creada',
    breakdownInfo:
      'Usa el desglose cuando la tarea actual es demasiado amplia. Después de que agregues todas las subtareas, siéntete libre de completar esta tarea, te lo mereces.',
    howto: {
      title: '¿Cómo usar Todorant?',
      premise:
        'Debajo se encuentran los principios básicos que deberías seguir para explotar productivamente todas las características proporcionadas por Todorant. Es tan fácil como contar 1-2-3, solamente con unos pocos pasos más.',
      bonus: {
        title: 'Características adicionales',
        rules: [
          '¡Usa atajos de teclado cuando estés en pc! Puedes agregar (a), desglosar (b), cambiar a la pestaña Actual (c), marcar como completada (d) y cambiar a la pestaña Planeación (p). Para agregar un espacio de tarea adicional mientras agregas tareas, puedes usar Ctrl+Shift+A.',
        ],
      },
    },
    skipped: 'Pospuesta',
    moveUp: 'Mover al día de hoy',
    settings: {
      title: 'Ajustes',
      showTodayOnAddTodo: 'Establecer el día de hoy como predeterminado',
      firstDayOfWeek: 'Primer día de la semana',
      newTodosGoFirst:
        'Las tareas nuevas se agregan en la parte superior de la lista',
      preserveOrderByTime: 'Conservar el orden exacto por tiempo',
      startTimeOfDay: 'Comienzo del día',
    },
    allDoneTitle: '¡Felicidades!',
    allDoneText:
      '🥳 ¡Lo hiciste! Todas las tareas para hoy están hechas, ve a descansar o quizás a bailar un poco 💃',
    noTodosTitle: '¡Hasta el infinito!',
    noTodosText:
      'No tienes ninguna tarea para hoy. Si quieres trabajar agrega una nueva tarea para hoy o adelanta alguna tarea de días futuros.',
    addTodoTime: 'Tiempo exacto',
    completed: 'Completada',
    planningText:
      '¡Parece que tienes un poco de planeación por hacer! Por favor, redistribuya las tareas pendientes para desbloquear la pestaña "Actual" y para continuar siendo productivo. ¡Bien!',
    rules: [
      'Tan pronto como recibas una tarea procesable (recibas un correo electrónico, una llamada telefónica, un mensaje de texto o si ves algo de interés que tengas que incluir en tu lista de tareas pendientes), crea una tarea pendiente de inmediato. No esperes, lo olvidarás si no lo anotas.',
      'Las tareas deben ser siempre accionables y lo más explícitas posible. Si realizar una tarea te toma menos de 2 minutos, hazla de inmediato y regístrala como completada.',
      'Cuando creas una tarea puedes elegir entre agregar una fecha específica o seleccionar un mes. No puedes elegir el mes actual sin seleccionar una fecha específica. Esto se hace así para relajar tu mente. Si confías en el sistema y pones la fecha correcta en tus tareas pendientes, te las encontrarás en el momento adecuado. Se desperdicia una gran cantidad de fuerza de voluntad por estar constantemente estresado por "otra cosa con la que tengo que lidiar pero no estoy muy seguro de qué era". Aprende a confiar y relajarte.',
      'Lo primero que debes hacer cada mes es planificar con anticipación. Tomas todas las tareas asignadas al mes actual y las clasificas en las fechas correctas. Te permite filtrar las tareas desactualizadas y mantener la mente en paz, sabiendo exactamente lo que tienes que hacer este mes.',
      'Lo primero que haces en la mañana es planificar tu día. Echa un vistazo a la sección de Planificación. ¿Puedes manejar todo? Distribuye tareas que no se pueden completar hoy. Redistribuye cualquier tarea de los días anteriores que no se haya hecho.',
      'A menos que sea una emergencia, no mires la sección de planificación una vez que hayas terminado la planificación. Será mucho mejor psicológicamente si sólo te enfocas en una tarea, así que mantén tus ojos en la sección Actual. Confía en el sistema, recuerda todo. Haz tu trabajo y relaja tu mente.',
      'La sección Actual contiene sólo una tarea en la que debes enfocarte, nada más. Puedes tener más de una tarea al día, la cantidad de tareas y la barra de progreso se muestran para tu conveniencia. No puedes saltar entre tareas: debes ocuparte de cada tarea linealmente, una por una.',
      'Los sapos son tipos especiales de tareas de las que generalmente no quieres ocuparte. Por lo general, son las tareas que se dejan atrás durante meses e incluso años. Todorant asegura que te ocupes de los sapos a primera hora todos los días. Por la mañana tu reserva de fuerza de voluntad es lo suficientemente grande como para manejar incluso las tareas más fastidiosas. Y después de que finalmente lidias con un sapo recibes la felicidad suficiente para estar sonriendo durante todo el día. Te sientes orgulloso de ti mismo cuando acabas con los sapos.',
      'Tienes permitido omitir la tarea actual, pero intenta hacerlo lo menos posible. No puedes omitir un sapo. Si no pudiste completar una tarea y tuviste que redistribuirla dos veces, se convierte en un sapo.',
      'Si la tarea actual es de un nivel demasiado alto, divídela en una lista de subtareas. La tarea se marcará como completada tan pronto como la descompongas.',
      'Agrega tanta información relevante sobre la tarea como sea posible. Agrega enlaces a correos electrónicos específicos (Gmail en la web te permite hacer esto), sitios web, notas (como Evernote), documentos (como Dropbox), anota números de teléfono o agrega cualquier información que puedas necesitar para completar la tarea. Todorant no está destinado a ser un punto de referencia para ti, sino que debe actuar como un catálogo de enlaces a la información de referencia relevante para tareas específicas.',
      'Siéntete libre de unirte a nuestro grupo multilingüe en Telegram para compartir experiencias y trucos sobre cómo ser más productivo: @todorant_feedback. Tus comentarios sobre el servicio (sugerencias, deseos y quejas) son muy bienvenidos.',
      'Usa el modo de edición (el ícono de orden de lista en la parte superior) en la página de Planificación para cambiar el orden de las tareas. Si deseas asignar una tarea a una semana específica, simplemente asígnala al lunes correspondiente y reasígnala durante la fase de planificación ese lunes por la mañana.',
      'Todorant no tiene y nunca tendrá la función de programar tareas repetitivas, lo único que hacen bien es causar ansiedad al colgarse de ti como tareas inacabadas. Si necesitas completar tareas repetitivas, agrégalas manualmente, tu cerebro te agradecerá el trabajo consciente.',
      'Todorant no tiene el concepto de "Proyectos", ya que ha demostrado ser desmotivador, algunas de las "carpetas"nunca se abren. Los proyectos "Hacer ejercicio"y "Superación personal" envían saludos. En su lugar, usa #hashtags.',
      'Los sapos siempre aparecerán en la parte superior de la lista.',
    ],
    earlyAdopter: 'Primer adoptante 🦄',
    active: 'Activo',
    inactive: 'Inactivo',
    trial: 'Prueba',
    weekday1: 'Lunes',
    weekday2: 'Martes',
    weekday3: 'Miércoles',
    weekday4: 'Jueves',
    weekday5: 'Viernes',
    weekday6: 'Sábado',
    weekday0: 'Domingo',
    introTitle: '¡Bienvenido!',
    introButton: 'Mensaje de introducción',
    introBack: '¡Vamos!',
    back: 'Atrás',
    emptyHashtags:
      'La lista de Hashtag está vacía por ahora. ¡Crea tu primera tarea con un #hashtag para añadir el primer hashtag aquí!',
    refreshRequest:
      'Hay una nueva versión de Todorant disponible. Por favor, refresque la página para obtener el nuevo material brillante 🦄',
    refresh: 'Actualizar',
    homeShort: {
      headline: 'Los sistemas de productividad fallan.',
      headline2: 'Todorant funciona.',
      feature1: 'Enfoque en una tarea a la vez',
      feature2: 'Siempre añadir una fecha o un mes a una tarea',
      feature3: 'Completar primero las tareas desagradables',
      feature4: 'Mantenga su bandeja de entrada vacía',
      differenceTitle: '¿Cuál es la diferencia?',
      differenceText1:
        'Todas las demás aplicaciones de productividad se centran en almacenar, organizar y automatizar listas interminables de tareas. Todorant se centra en lo único que importa: te hace completar las tareas.',
      differenceText2:
        'Todorant utiliza un conjunto cuidadosamente elaborado de límites y elogios para castigar el mal comportamiento y apoyar los buenos hábitos. Afecta a la parte primitiva del cerebro para hacer que ansíe completar todos como la gente ansía el azúcar.',
      differenceText3:
        'He leído y probado más de 20 libros y metodologías de productividad. Cuando todos ellos fallaron uno por uno combiné sus componentes y simplifiqué el resultado. Así es como se creó Todorant.',
    },
    googleCalendarDisableSuccess: 'Google Calendar desactivado',
    googleCalendarEnableSuccess: 'Google Calendar activado',
  },
}
