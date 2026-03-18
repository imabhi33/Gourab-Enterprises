# Google Sheets Enquiry Setup

Use the contact form with a Google Apps Script webhook. A raw Google Sheet link alone cannot write rows directly from the browser.

## 1. Create the sheet

Create a Google Sheet where you want enquiries saved.

## 2. Add the Apps Script

1. Open the Google Sheet.
2. Go to `Extensions -> Apps Script`.
3. Replace the default file with the code from [google-apps-script/Code.gs](/c:/Users/iamab/OneDrive/Desktop/Gaurab Enterprises/frontend/google-apps-script/Code.gs).
4. In Apps Script, open `Project Settings -> Script properties`.
5. Add:
   - `SPREADSHEET_ID` = your Google Sheet ID
   - `SHEET_NAME` = `Enquiries`

## 3. Deploy the webhook

1. Click `Deploy -> New deployment`.
2. Select `Web app`.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Deploy and copy the web app URL.

## 4. Update frontend env

Set this in [frontend/.env](/c:/Users/iamab/OneDrive/Desktop/Gaurab Enterprises/frontend/.env):

```env
VITE_ENQUIRY_WEBHOOK_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

## 5. What gets saved

Each enquiry adds a row with:

- ISO timestamp
- India date/time display
- name
- phone
- product
- message
- source
