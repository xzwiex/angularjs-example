import AddMessageController from '../add_message/add_message_controller'
import AddMessageTemplate from '../add_message/add_message_template'

export default class AppController {


    constructor($uibModal, $scope) {
        this.$uibModal = $uibModal
        this.$scope = $scope
    }

    addMessage() {
        const modalInstance = this.$uibModal.open({
            animation: true,
            template: AddMessageTemplate,
            controller: AddMessageController,
            controllerAs : '$ctrl',
            size: 'lg'
            
        });

        modalInstance.result.then( this.onMessageAdded.bind(this) )
    }

    onMessageAdded(result) {
        if (result.result === 'OK') {
            this.$scope.$broadcast('MESSAGE_ADDED', result.newMessage )
        }
    }
}

AppController.$inject = ['$uibModal', '$scope']