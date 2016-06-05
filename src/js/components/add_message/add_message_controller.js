import ModalBase from '../modal_base/modal_base'

export default class AddMessageController extends ModalBase {

    constructor($uibModalInstance, dataStorage) {

        super($uibModalInstance)

        this.dataStorage = dataStorage 

        this.users = dataStorage.getUsers()
    }

    addMessage() {


        console.debug('Add message', this.newMessage)

        const newMessage = this.dataStorage.addMessage(this.newMessage)

        this.$uibModalInstance.close({
            result: 'OK', 
            newMessage : newMessage
        })
        
    }
}

AddMessageController.$inject = ['$uibModalInstance', 'dataStorage']