import Notification from './components/Notification';

new Notification('Hello there').asAlert();

toastr.options.timeout = 2000; //Change the settings
toastr.info('This works!');