class Quest {
    name = ""
    description = ""
    money = 0
    xp = 0

    constructor(name = "", description = "", money = 0 , xp = 0) {
        this.name = name
        this.description = description
        this.money = money
        this.xp = xp
    }
}

const QuestsMenu = {
    History: {
        currentNumbering: 2,
        conteiner: document.getElementById('history-quests'),
        
        addQuestOnMenu(quest = {}){
            let elementQuest = document.createElement('div'), questInformations = document.createElement('div'), questTitle = document.createElement('p'), questRewards = document.createElement('p')
            
            QuestsMenu.History.conteiner.appendChild()
        }
    },

    Progress: {}
}