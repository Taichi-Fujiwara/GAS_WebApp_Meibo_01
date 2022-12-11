// 対象のシート名を記載
var sheetName = "名簿"

// GETリクエストを生成
function doGet() {
  var t = HtmlService.createTemplateFromFile("index.html");
  return t.evaluate();
}

// 名前を検索して戻す
function GetSpreadsheet(key){
  var sheet    = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var last_col = sheet.getLastColumn();
  var last_row = sheet.getLastRow();
  var name     = sheet.getRange(1, 1, last_row, last_col).getValues();

  // 返却値を保存しておく変数
  var result = new Array();
  Logger.log(key);

  if(key != ""){ // keyが空でなければ
    //ラベル行を格納
    result.push(name[0]);

    //全行の探索を開始
    for(let i=0;i<name.length;i++){
      // keyに一致する行があれば格納していく
      if(name[i][1].match(key)){
        result.push(name[i]);
      }
    }
    return result;
  }else{
    return name;
  }
}
