import ModalBase from '../modal_base/modal_base'

export default class AddMessageController extends ModalBase {

    constructor($uibModalInstance, users) {

        super($uibModalInstance)
        
        this.users = users
    }

    addMessage() {

        this.$uibModalInstance.close({
            result: 'OK', 
            newMessage : this.newMessage
        })
        
    }
}

AddMessageController.$inject = ['$uibModalInstance', 'users']