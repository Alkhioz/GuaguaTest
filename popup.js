function showResult(){
  chrome.tabs.create({ url: 'test-result.html' }, function(tab) {
    // The tab is created. You can send a message to this tab's content script if needed.
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById('show_test_result_btn').addEventListener('click', ()=>{
    showResult();
  });
});