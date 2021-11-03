// * Classe para criação de Quests
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

// * Objeto para a manipulação dos menus de quests
const QuestsMenu = {
    // * Objeto para a manipulação do menu da história
    History: {
        currentNumbering: 0,
        conteiner: document.querySelector('#history-quests'),
        
        // * Método para a adição de quests ao menu da história
        addQuestOnMenu(quest = {}){
            const elementQuest = QuestsMenu.History.addNumberingOnQuest(quest)

            QuestsMenu.History.addInformationsOnQuest(quest, elementQuest)

            QuestsMenu.History.conteiner.appendChild(elementQuest)
        },

        // * Método para a adição da numeração das quests
        // ! Atenção, não chame esse método diretamente, ele só funciona em conjunto com o `QuestsMenu.History.addQuestOnMenu()`
        addNumberingOnQuest(quest = {}){
            let elementQuest = document.createElement('div'), label = document.createElement('label'), numberQuest = document.createElement('input')

            QuestsMenu.History.currentNumbering = QuestsMenu.History.currentNumbering + 1
            
            // * Escopo para a configuração do elemento da Quest
            {
                elementQuest.setAttribute("id", `quest${QuestsMenu.History.currentNumbering}`)
                elementQuest.classList.add('quest')
                elementQuest.setAttribute("title", quest.name)
            }
            
            // * Escopo para a configuração e adição do label da numeração
            {
                label.setAttribute('for', 'number-quest')
                label.setAttribute('hidden', '')
                label.setAttribute("title", "Número da missão")
                label.innerText = "Número da missão"

                elementQuest.appendChild(label)
            }

            // * Escopo para a configuração e adição do número
            {
                numberQuest.classList.add('number-quest')
                numberQuest.setAttribute("name", "number-quest")
                numberQuest.setAttribute("type", "number")
                numberQuest.setAttribute('readonly', '')
                numberQuest.setAttribute('title', "Número da missão")
                
                if(QuestsMenu.History.currentNumbering < 10) numberQuest.setAttribute('value', `0${QuestsMenu.History.currentNumbering}`)

                else numberQuest.setAttribute('value', `${QuestsMenu.History.currentNumbering}`)
                
                elementQuest.appendChild(numberQuest)
            }

            return elementQuest
        },

        // * Método para a adição das informações das quests
        // ! Atenção, não chame esse método diretamente, ele só funciona em conjunto com o `QuestsMenu.History.addQuestOnMenu()`
        addInformationsOnQuest(quest = {}, elementQuest){
            let questInformations = document.createElement('div'), questTitle = document.createElement('p'), questRewards = document.createElement('p')
            
            // * Escopo para a configuração do título e das recompensas da quest
            {
                questInformations.classList.add('quest-informations')

                questTitle.classList.add('quest-title')
                questTitle.innerText = quest.name

                questRewards.classList.add('quest-rewards')
                questRewards.innerText = `${quest.xp} XP points e ${quest.money} coins`
            }

            elementQuest.appendChild(questInformations)
            questInformations.appendChild(questTitle)
            questInformations.appendChild(questRewards)
        }
    },

    // * Objeto para a manipulação do menu de progresso
    Progress: {
        conteiner: document.getElementById('progress-quests'),
        currentNumbering: 0,

        // * Método para a adição de quests ao menu do progresso
        addQuestOnMenu(quest = {}){
            const elementQuest = document.createElement('div')

            QuestsMenu.Progress.currentNumbering = QuestsMenu.Progress.currentNumbering + 1

            // * Escopo para a configuração do elemento da Quest
            {
                elementQuest.setAttribute("id", `progress${QuestsMenu.Progress.currentNumbering}`)
                elementQuest.classList.add('quest')
                elementQuest.setAttribute("title", quest.name)
            }

            QuestsMenu.Progress.addInformationsOnQuest(quest, elementQuest)

            QuestsMenu.Progress.conteiner.appendChild(elementQuest)
        },

        // * Método para a adição das informações das quests
        // ! Atenção, não chame esse método diretamente, ele só funciona em conjunto com o `QuestsMenu.Progress.addQuestOnMenu()`
        addInformationsOnQuest(quest = {}, elementQuest){
            let questInformations = document.createElement('div'), questTitle = document.createElement('p'), questRewards = document.createElement('p')
            
            // * Escopo para a configuração do título e das recompensas da quest
            {
                questInformations.classList.add('quest-informations')

                questTitle.classList.add('quest-title')
                questTitle.innerText = quest.name

                questRewards.classList.add('quest-rewards')
                questRewards.innerText = `${quest.xp} XP points e ${quest.money} coins`
            }

            elementQuest.appendChild(questInformations)
            questInformations.appendChild(questTitle)
            questInformations.appendChild(questRewards)
        }
    },

    // * Método para fazer a mudança dinâmica do menu de progresso para o menu da história
    changeToHistoryMenu(){
        if(!QuestsMenu.History.conteiner.classList.contains('active')){
            QuestsMenu.Progress.conteiner.classList.remove('active')
            
            QuestsMenu.History.conteiner.classList.add('active')
        }
    },

    // * Método para fazer a mudança dinâmica do menu de história para o menu da progresso
    changeToProgressMenu(){
        if(!QuestsMenu.Progress.conteiner.classList.contains('active')){
            QuestsMenu.History.conteiner.classList.remove('active')
            
            QuestsMenu.Progress.conteiner.classList.add('active')
        }
    }
}

// * Objeto para os botõs do HTML
const ButtonsHTML = {
    menuHistoryButton: document.getElementById('menu-history-button'),
    menuProgressButton: document.getElementById('menu-progress-button'),
    closeQuestsMenuButton: document.getElementById('close-quests-menu-button')
}

// * Escopo para a inicialização dos botões do HTML
{
    ButtonsHTML.menuHistoryButton.addEventListener('click', QuestsMenu.changeToHistoryMenu)
    ButtonsHTML.menuProgressButton.addEventListener('click', QuestsMenu.changeToProgressMenu)
    ButtonsHTML.closeQuestsMenuButton.addEventListener('click', function (){
        alert('HI')
    })
}