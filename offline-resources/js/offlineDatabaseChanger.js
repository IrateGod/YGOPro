// offlineDatabaseChanger.js

var databaseExports = databaseExports || {};
$(function () {
    $('.databaseSelect').on('change', function () {
        var database = $(this).val();
        if (!databaseExports[database]) {
            $('.cardDescription').html('<span class="dbSelectError">The selected database does not exist on the server.<br /><br />If you deem this error to be incorrect, please contact us at <a href="' + forumLink + '" target="_blank">our forums</a>.<br />Be sure to include the following details:<br /><br />Subject: Database Selector Error<br />Call: databaseExports[database] -- database: ' + database + '<br />User Agent: ' + navigator.userAgent + '</span>');
            return true;
        }
        cards = databaseExports[database];
        return true;
    });
});