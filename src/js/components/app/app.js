import controller from '../add_message/add_message_controller'
import template from '../add_message/add_message_template'

export default class AppController {

    constructor($uibModal, dataStorage) {
        this.$uibModal = $uibModal
        this.dataStorage = dataStorage
    }

    addMessage() {

        const dataStorage = this.dataStorage

        const modalInstance = this.$uibModal.open({
            animation: true,
            template,
            controller,
            controllerAs : '$ctrl',
            size: 'lg',
            resolve : {
                users : () => dataStorage.users
            }
        })

        modalInstance.result.then( this.onMessageAdded.bind(this) )
    }

    onMessageAdded(result) {
        if (result.result === 'OK') {
            this.dataStorage.addMessage(result.newMessage)
        }
    }
}

AppController.$inject = ['$uibModal', 'dataStorage']