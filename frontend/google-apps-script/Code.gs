function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || '{}');
    var spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    var sheetName = PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || 'Enquiries';
    var now = new Date();
    var istDateTime = Utilities.formatDate(now, 'Asia/Kolkata', 'dd-MMM-yyyy hh:mm:ss a');

    if (!spreadsheetId) {
      throw new Error('Missing SPREADSHEET_ID script property');
    }

    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    if (!sheet) {
      sheet = SpreadsheetApp.openById(spreadsheetId).insertSheet(sheetName);
      sheet.appendRow([
        'Timestamp',
        'Date Time (IST)',
        'Name',
        'Phone',
        'Product',
        'Message',
        'Source',
      ]);
    }

    sheet.appendRow([
      data.createdAtIso || now.toISOString(),
      istDateTime,
      data.name || '',
      data.phone || '',
      data.product || '',
      data.message || '',
      data.source || 'website',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
