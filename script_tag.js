const countryCode = Shopify.checkout.shipping_address.country_code

if (["US", "CA"].includes(countryCode)) {
  Shopify.Checkout.OrderStatus.addContentBox('<script>function sendData(){const o=new XMLHttpRequest,s=document.getElementById("auctane_sms_button");var e=Shopify.checkout.order_id;o.open("POST","https://api.dev-trackship.shipengine.com/sms-pre-auth/"+e),o.setRequestHeader("Content-Type","application/json");e=JSON.stringify({country_code:"1",phone_number:form.elements.auctane_sms_phone_number.value,destination_country_code:"US",order_source_code:"shopify"});o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){var e=o.status;if(0===e||200<=e&&e<400){console.log("success!");const t=document.getElementById("auctane_sms_success");t.innerHTML="Thanks for signing up. Check your mobile number to confirm."}else{console.log("error");const n=document.getElementById("auctane_sms_error");n.innerHTML="Something went wrong. Please try again.",s.removeAttribute("disabled")}}},o.send(e)}const form=document.getElementById("smsForm");form.addEventListener("submit",function(e){e.preventDefault(),sendData()})</script><style type="text/css">#auctane_sms_phone_number{display:inline;max-width:200px;margin-right:8px;margin-top:12px}#auctane_sms_error{margin-top:8px;color:#e73434}@media only screen and (max-width:750px){#auctane_sms_phone_number{max-width:none;margin-bottom:12px;margin-right:0}}</style><p class="od-step__description">Receive shipping & delivery updates by text. By entering a number you accept the <a href="https://trackshipment.shipstation.com/#!sms-terms"target="_blank">terms</a>.<form id="smsForm"><input class="field__input"id="auctane_sms_phone_number"type="tel"aria-label="Mobile Number"aria-required="true"placeholder="000-000-0000"><button type="submit"id="auctane_sms_button"class="ui-button btn btn--primary btn--size-small shown-if-js">Sign Up</button><div id="auctane_sms_error"></div><div id="auctane_sms_success"></div></form>');
}
