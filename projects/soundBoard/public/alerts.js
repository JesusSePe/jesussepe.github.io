$('button.btn-close[data-bs-dismiss="toast"]').on('click', function(e)
{
    e.relatedTarget.parents('.toast').first().remove();
});

function showAlert(type, msg)
{
    let container = $('#toastContainer');
    let alertBackgroundClass = getAlertBackgroundClass(type);
    let alertBorderClass = getAlertBorderClass(type);
    let alertTextClass = getAlertTextClass(type);
    let alertIcon = getAlertIconClass(type);
    let toast = $(`
    <div class="toast alert ${alertBackgroundClass} ${alertBorderClass}" role="alert" aria-live="assertive" aria-atomic="true">
        <button type="button" class="btn-close position-absolute top-0 end-0 py-3 px-4" data-bs-dismiss="toast" aria-label="Close"></button>
        <div class="toast-body ${alertTextClass}">
            <i class="${alertIcon} me-3 fs-5"></i>
            ${msg}
        </div>
    </div>
    `);
    container.append(toast);

    let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
    toastBootstrap.show();
}

function getAlertBackgroundClass(type) {
    switch (type) {

        case 'info':
            return 'bg-info-subtle';
    
        case 'success':
            return 'bg-success-subtle';

        case 'warning':
            return 'bg-warning-subtle';
        
        case 'error':
            return 'bg-danger-subtle';
        
        default:
            return 'bg-secondary-subtle';
    }
}

function getAlertBorderClass(type) {
    switch (type) {

        case 'info':
            return 'border border-info';
    
        case 'success':
            return 'border border-success';

        case 'warning':
            return 'border border-warning';
        
        case 'error':
            return 'border border-danger';
        
        default:
            return 'border border-secondary';
    }
}

function getAlertTextClass(type) {
    switch (type) {

        case 'info':
            return 'text-info-emphasis';
    
        case 'success':
            return 'text-success-emphasis';

        case 'warning':
            return 'text-warning-emphasis';
        
        case 'error':
            return 'text-danger-emphasis';
        
        default:
            return 'text-secondary-emphasis';
    }
}

function getAlertIconClass(type) {
    switch (type) {

        case 'info':
            return 'bi bi-info-circle-fill';
    
        case 'success':
            return 'bi bi-check-circle-fill';

        case 'warning':
            return 'bi bi-exclamation-diamond-fill';
        
        case 'error':
            return 'bi bi-x-circle-fill';
        
        default:
            return 'bi bi-circle-fill';
    }
}