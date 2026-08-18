
function menu(){document.getElementById('navlinks').classList.toggle('open')}
function money(n){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(n)}
function showResult(title,main,rows){
 const r=document.getElementById('result'); if(!r)return;
 r.innerHTML='<strong class="main">'+title+': '+main+'</strong>'+rows.map(x=>'<div class="row"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>').join('');
 r.classList.add('show');
}
function emi(){
 const p=+document.getElementById('amount').value, rate=+document.getElementById('rate').value, years=+document.getElementById('years').value;
 if(!(p>0&&rate>=0&&years>0))return alert('Please enter valid values.');
 const r=rate/1200,n=years*12, e=r===0?p/n:p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1), total=e*n;
 showResult('Monthly EMI',money(e),[['Principal',money(p)],['Interest',money(total-p)],['Total Payment',money(total)]]);
}
function gst(){
 const a=+document.getElementById('amount').value,g=+document.getElementById('rate').value;
 if(!(a>=0&&g>=0))return alert('Please enter valid values.');
 const tax=a*g/100;showResult('Final Amount',money(a+tax),[['Base Amount',money(a)],['GST',money(tax)],['GST Rate',g+'%']]);
}
function sip(){
 const m=+document.getElementById('amount').value, rate=+document.getElementById('rate').value, y=+document.getElementById('years').value;
 if(!(m>0&&rate>=0&&y>0))return alert('Please enter valid values.');
 const r=rate/1200,n=y*12, future=rate===0?m*n:m*((Math.pow(1+r,n)-1)/r)*(1+r), invested=m*n;
 showResult('Estimated Value',money(future),[['Invested Amount',money(invested)],['Estimated Returns',money(future-invested)],['Period',y+' years']]);
}
function fd(){
 const p=+document.getElementById('amount').value, rate=+document.getElementById('rate').value,y=+document.getElementById('years').value;
 if(!(p>0&&rate>=0&&y>0))return alert('Please enter valid values.');
 const maturity=p*Math.pow(1+rate/100,y);showResult('Maturity Amount',money(maturity),[['Deposit',money(p)],['Interest',money(maturity-p)],['Rate',rate+'%']]);
}
function percentage(){
 const a=+document.getElementById('amount').value,p=+document.getElementById('rate').value;
 if(isNaN(a)||isNaN(p))return alert('Please enter valid values.');
 showResult('Result',money(a*p/100),[['Number',money(a)],['Percentage',p+'%']]);
}
function age(){
 const d=new Date(document.getElementById('dob').value), t=new Date();
 if(isNaN(d.getTime())||d>t)return alert('Please enter a valid date.');
 let y=t.getFullYear()-d.getFullYear();if(t.getMonth()<d.getMonth()||(t.getMonth()===d.getMonth()&&t.getDate()<d.getDate()))y--;
 showResult('Your Age',y+' Years',[['Date of Birth',d.toLocaleDateString('en-IN')]]);
}
function discount(){
 const p=+document.getElementById('amount').value,d=+document.getElementById('rate').value;
 if(!(p>=0&&d>=0))return alert('Please enter valid values.');
 const s=p*d/100;showResult('Final Price',money(p-s),[['Original Price',money(p)],['You Save',money(s)],['Discount',d+'%']]);
}
function profit(){
 const c=+document.getElementById('amount').value,s=+document.getElementById('rate').value;
 if(!(c>0&&s>=0))return alert('Please enter valid values.');
 const p=s-c;showResult(p>=0?'Profit':'Loss',money(Math.abs(p)),[['Cost Price',money(c)],['Selling Price',money(s)],['Margin',(p/c*100).toFixed(2)+'%']]);
}
function fuel(){
 const d=+document.getElementById('amount').value,m=+document.getElementById('rate').value,p=+document.getElementById('years').value;
 if(!(d>0&&m>0&&p>0))return alert('Please enter valid values.');
 const litres=d/m;showResult('Estimated Fuel Cost',money(litres*p),[['Distance',d+' KM'],['Fuel Required',litres.toFixed(2)+' L'],['Fuel Price',money(p)+'/L']]);
}
function dateDiff(){
 const a=new Date(document.getElementById('date1').value),b=new Date(document.getElementById('date2').value);
 if(isNaN(a)||isNaN(b))return alert('Select both dates.');
 const days=Math.round(Math.abs(b-a)/86400000);showResult('Difference',days+' Days',[['Start',a.toLocaleDateString('en-IN')],['End',b.toLocaleDateString('en-IN')]]);
}
function toggleFaq(el){el.parentElement.classList.toggle('open')}
