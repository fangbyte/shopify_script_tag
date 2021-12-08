const countryCode = Shopify.checkout.shipping_address.country_code

if (["US", "CA"].includes(countryCode)) {
  Shopify.Checkout.OrderStatus.addContentBox('<script>function sendData(){const e=new XMLHttpRequest;var t=Shopify.checkout.order_id;e.addEventListener("load",function(e){alert(e.target.responseText)}),e.addEventListener("error",function(e){alert("Oops! Something went wrong.")}),e.open("POST","https://api.dev-trackship.shipengine.com/sms-pre-auth/"+t),e.setRequestHeader("Content-Type","application/json");t=JSON.stringify({country_code:"1",phone_number:form.elements.auctane_sms_phone_number.value,destination_country_code:"US",order_source_code:"shopify"});e.send(t)}const form=document.getElementById("smsForm");form.addEventListener("submit",function(e){sendData(),e.preventDefault()})</script><style type="text/css">#auctane_sms_phone_number{display:inline;max-width:200px;margin-right:8px;margin-top:12px}@media only screen and (max-width:750px){#auctane_sms_phone_number{max-width:none;margin-bottom:12px;margin-right:0}}</style><p class="od-step__description">Receive shipping & delivery updates by text. By entering a number you accept the <a href="https://trackshipment.shipstation.com/#!sms-terms"target="_blank">terms</a>.<form id="smsForm"><input class="field__input"id="auctane_sms_phone_number"type="tel"aria-label="Mobile Number"aria-required="true"placeholder="000-000-0000"><button type="submit"class="ui-button btn btn--primary btn--size-small shown-if-js">Sign Up</button><div class="errors"></div></form>');
}
