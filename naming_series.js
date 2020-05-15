NOTE: MAY 2019

frappe.ui.form.on("Sales Invo ice","type", function(frm) {
  if (frm.doc.type=='AML') {
    //msgprint('setting letter head to LH1');
    frm.set_value('naming_series','AML-.YYYY.-.#####');
    frm.set_value('letter_head','LH 1');
   }
   else if (frm.doc.type=='DTC') {
     //msgprint('setting letter head to LH2');
     frm.set_value('naming_series','DTC-.YYYY.-.#####');
     frm.set_value('letter_head','LH 2');
    }
  });
  
