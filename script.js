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
            let elementQuest = document.createElement('div'), label = document.createElement('label'), numberQuest = document.createElement('input')

            QuestsMenu.History.currentNumbering = QuestsMenu.History.currentNumbering + 1
            
            elementQuest.setAttribute("id", `quest${QuestsMenu.History.currentNumbering}`)
            elementQuest.classList.add('quest')
            elementQuest.setAttribute("title", quest.name)

            label.setAttribute('for', 'number-quest')
            label.setAttribute('hidden', '')
            label.setAttribute("title", "Número da missão")
            label.innerText = "Número da missão"

            elementQuest.appendChild(label)

            numberQuest.classList.add('number-quest')
            numberQuest.setAttribute("name", "number-quest")
            numberQuest.setAttribute("type", "number")
            numberQuest.setAttribute('readonly', '')
            numberQuest.setAttribute('title', "Número da missão")
            
            if(QuestsMenu.History.currentNumbering < 10) numberQuest.setAttribute('value', `0${QuestsMenu.History.currentNumbering}`)

            else numberQuest.setAttribute('value', `${QuestsMenu.History.currentNumbering}`)
            
            elementQuest.appendChild(numberQuest)

            let questInformations = document.createElement('div'), questTitle = document.createElement('p'), questRewards = document.createElement('p')
            
            questInformations.classList.add('quest-informations')

            elementQuest.appendChild(questInformations)

            questTitle.classList.add('quest-title')
            questTitle.innerText = quest.name

            questInformations.appendChild(questTitle)

            questRewards.classList.add('quest-rewards')
            questRewards.innerText = `${quest.xp} XP points e ${quest.money} coins`

            questInformations.appendChild(questRewards)

            QuestsMenu.History.conteiner.appendChild(elementQuest)
        }
    },

    Progress: {}
}