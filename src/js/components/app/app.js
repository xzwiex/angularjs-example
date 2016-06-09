import controller from '../add_message/add_message_controller'
import template from '../add_message/add_message_template'

export default class AppController {

    constructor($uibModal, dataStorage) {
        this.$uibModal = $uibModal
        this.dataStorage = dataStorage
    }

    addMessage() {
        
        const modalInstance = this.createMessagePopup()
        this.handleMessageResult( modalInstance.result ) 

    }

    createMessagePopup() {
        
        const dataStorage = this.dataStorage

        return this.$uibModal.open({
            animation: true,
            template,
            controller,
            controllerAs : '$ctrl',
            size: 'lg',
            resolve : {
                users : () => dataStorage.users
            }
        })


    }

    handleMessageResult(result) {

        const $ctrl = this

        return result.then( (result) => {

            if (result.result === 'OK') {
                return $ctrl.dataStorage.addMessage(result.newMessage)
            }
        })

    }
}

AppController.$inject = ['$uibModal', 'dataStorage']