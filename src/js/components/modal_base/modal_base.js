export default class ModalBase {
    
    constructor($uibModalInstance) {
        this.$uibModalInstance = $uibModalInstance
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }

}