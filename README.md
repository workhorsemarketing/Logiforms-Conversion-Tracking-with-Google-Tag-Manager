# Logiforms Conversion Tracking with Google Tag Manager

## Usage

* Add a custom HTML tag with contents of logiforms-gtm-listener.html that fires on page load
* Add an action in Logiforms with contents of logiforms-action-conversion-tracking.js
* (Optional) Create datalayer variables for enhanced conversions

Note the field IDs are unique per form; you'll need to create a datalayer variable if you'd like to use any of these. For example, for enhanced conversions you'd want to create a DLV with value of formData.field_1585322275181_21 to retrieve the email address on this form.

![where to add a logiform action in their admin panel](https://raw.githubusercontent.com/workhorsemarketing/Logiforms-Conversion-Tracking-with-Google-Tag-Manager/refs/heads/main/img/logiforms-actions.jpg)

![datalayer example of logiform_submission event](https://raw.githubusercontent.com/workhorsemarketing/Logiforms-Conversion-Tracking-with-Google-Tag-Manager/refs/heads/main/img/datalayer.jpg)

Note the field IDs are unique per form; you'll need to create a datalayer variable if you'd like to use any of these. For example, for enhanced conversions you'd want to create a DLV with value of `formData.field_1585322275181_21` to retrieve the email address on this form.