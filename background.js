const IG_RULE_ID = 1;


browser.runtime.onMessage.addListener((request) => {
  
  if (request.action === "start_block") {
    browser.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [IG_RULE_ID],
      addRules: [{
        id: IG_RULE_ID,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||instagram.com",
          resourceTypes: ["main_frame"]
        }
      }]
    });
    console.log("IG Blocked!");
  } 
  
  else if (request.action === "stop_block") {

    browser.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [IG_RULE_ID]
    });
    console.log("IG Unblocked!");
  }
});