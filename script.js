// Educational examples. Prices are illustrative unless a cited Omaha reference is explicitly displayed.
const repairInformation = {
  checkEngine: {name:'Check Engine Light / Diagnostics',explanation:'A warning light can indicate many different issues. Reading a diagnostic trouble code is only the first step; the underlying cause must be confirmed.',parts:0,labor:0,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'If steady, arrange a diagnosis soon. If flashing on a gasoline or hybrid vehicle, safely stop driving because a misfire may damage the catalytic converter.',safety:'Some faults affect emissions or drivability. An EV may show a different drivetrain warning instead.',environment:'Unrepaired engine faults can increase emissions. Diagnose before replacing parts.'},
  wipers: {name:'Windshield Wiper Blades',explanation:'Wipers clear rain and debris so you can see.',parts:20,labor:20,urgency:'Can Wait',diy:'Beginner-Friendly',wait:'Replace worn or streaking wipers before driving in rain or snow. If you cannot see clearly, do not drive.',safety:'Poor visibility increases crash risk.',environment:'Recycle packaging and dispose of old blades responsibly.'},
  airFilter: {name:'Cabin or Engine Air Filter',explanation:'Filters trap dust and debris. The cabin filter cleans air entering the cabin; the engine filter protects the intake.',parts:25,labor:30,urgency:'Can Wait',diy:'Beginner-Friendly',wait:'Follow the vehicle manual and inspect sooner if airflow is poor or driving in dusty conditions.',safety:'A clogged cabin filter may reduce defogging performance.',environment:'Replace only when needed and dispose of filters appropriately.'},
  bulbs: {name:'Headlight or Taillight Bulb',explanation:'Exterior lights help you see and be seen. Some modern assemblies require specialist service.',parts:30,labor:45,urgency:'Fix Soon',diy:'Beginner-Friendly',wait:'Replace a failed light promptly. Do not drive at night with inadequate headlights or when required lights are not working.',safety:'Missing lights reduce visibility and can cause collisions.',environment:'Dispose of bulbs and electronic components according to local rules.'},
  sparkPlugs: {name:'Spark Plug Replacement',explanation:'Spark plugs ignite the air-fuel mixture in gasoline engines. Access varies widely by engine.',parts:65,labor:140,urgency:'Fix Soon',diy:'Intermediate',wait:'Arrange diagnosis for misfires or rough running. A flashing check-engine light can indicate a damaging misfire; stop driving safely.',safety:'Severe misfires can reduce power or damage the catalytic converter.',environment:'Misfires can increase emissions and fuel use.'},
  brakes: {name:'Brake Pad Replacement',explanation:'Brake pads create friction to slow your car. They wear down over time.',parts:100,labor:150,urgency:'Fix Soon',diy:'Intermediate',wait:'If brakes squeal or pads may be worn, arrange an inspection soon. Grinding, poor stopping, or a brake warning means stop driving and seek assistance.',safety:'Worn brakes can increase stopping distance and endanger other road users.',environment:'Brake wear releases particles. Proper disposal of old components helps reduce waste.'},
  battery: {name:'Battery Replacement',explanation:'A conventional 12V battery supports starting and low-voltage electronics in gasoline cars. Hybrids and EVs may also have a separate low-voltage battery; the high-voltage traction battery is a different system.',parts:130,labor:40,urgency:'Fix Soon',diy:'Intermediate',wait:'If starting is becoming unreliable, have the battery and charging system tested soon. A battery can fail without a predictable deadline.',safety:'A weak battery can leave you stranded. Swelling, heat, or leaking battery fluid needs immediate professional attention.',environment:'Car batteries contain hazardous materials and should be recycled through an approved collection program.'},
  alternator: {name:'Alternator Replacement',explanation:'The alternator powers electrical systems and charges the battery while the engine runs.',parts:250,labor:180,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'A charging warning or failing alternator can cause the vehicle to stall. Arrange prompt inspection and avoid continued driving if electrical power is failing.',safety:'Loss of electrical power can cause a breakdown in traffic.',environment:'Replacing only confirmed faulty parts reduces waste; old components can often be remanufactured.'},
  oil: {name:'Oil Change',explanation:'Engine oil lubricates moving engine parts. Regular changes help protect the engine.',parts:35,labor:30,urgency:'Can Wait',diy:'Intermediate',wait:'Use the manufacturer’s oil-change interval for your vehicle and driving conditions. An oil-pressure warning is not a routine oil-change reminder: stop driving safely.',safety:'Severely low or degraded oil can damage the engine.',environment:'Used motor oil can pollute soil and water. Recycle it at an approved collection site.'},
  oilLeak: {name:'Engine Oil Leak',explanation:'Engine oil may escape through a worn seal, gasket, or damaged component. The cause and severity need inspection.',parts:85,labor:220,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'Do not rely on a fixed number of days or miles. Arrange an inspection promptly, check the oil level as your manual instructs, and stop driving if the oil-pressure light comes on, the leak is severe, or the engine makes unusual noises.',safety:'Loss of oil can cause sudden engine damage; oil on hot parts may create a fire hazard.',environment:'Leaking motor oil can contaminate roads, soil, and waterways. Contain drips safely and repair the source promptly.'},
  ac: {name:'AC Compressor Replacement',explanation:'The AC compressor circulates refrigerant for cabin cooling. Electric vehicles may use an electric compressor or heat-pump system, which can differ greatly from conventional designs.',parts:300,labor:250,urgency:'Can Wait',diy:'Leave to a Shop',wait:'If the only symptom is poor cooling, service can often be scheduled rather than treated as an emergency. Stop using the system and seek inspection if there is smoke, belt damage, or unusual severe noise.',safety:'Lack of cooling can be a health risk in extreme heat; compressor or belt failure can affect other vehicle systems.',environment:'Escaping refrigerant can contribute to climate change. Refrigerant must be handled and recovered by qualified technicians.'},
  coolant: {name:'Coolant Leak',explanation:'Coolant manages temperatures. Gas and hybrid vehicles use engine cooling; EVs may have battery and drive-unit cooling loops. A leak needs diagnosis.',parts:70,labor:200,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'Have a suspected coolant leak inspected promptly. If the temperature gauge rises, an overheating warning appears, or steam is visible, pull over safely, turn off the engine, and arrange assistance. Never open a hot radiator cap.',safety:'Overheating can damage the engine, and hot coolant can cause serious burns.',environment:'Coolant can be toxic to people and animals and should not enter storm drains or soil. Clean spills safely and dispose of coolant properly.'},
  rotation: {name:'Tire Rotation',explanation:'Moving tires between positions can help them wear more evenly when done according to the vehicle manual.',parts:0,labor:40,urgency:'Can Wait',diy:'Beginner-Friendly',wait:'Follow the maintenance schedule. Tire damage or exposed cords is not routine rotation and needs urgent attention.',safety:'Improper lifting or wheel torque can cause severe injury or wheel loss.',environment:'Even tire wear may extend tire life and reduce waste.'},
  tires: {name:'Worn or Damaged Tires',explanation:'Tires need adequate tread and sound sidewalls to maintain traction and control.',parts:180,labor:45,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'Have worn tires inspected soon. Do not drive on a flat tire, exposed cords, a bulging sidewall, or a tire with obvious structural damage.',safety:'Damaged or severely worn tires can lose traction or fail suddenly, especially in wet conditions.',environment:'Tires should be recycled or disposed of through appropriate facilities to reduce waste and pollution.'},
  transmission: {name:'Transmission Noise or Shifting Problems',explanation:'The transmission transfers power to the wheels. Delayed engagement, slipping, harsh shifts, or unusual noises may come from several causes and need a proper diagnosis. Electric vehicles may have a simpler reduction gearbox instead.',parts:0,labor:0,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'Have new slipping, delayed engagement, or clunking diagnosed promptly. Stop driving safely if the vehicle will not engage a gear, loses propulsion, leaks heavily, or behaves unpredictably.',safety:'A failing transmission or drivetrain can leave a vehicle without predictable power or movement. Do not continue driving with severe symptoms.',environment:'Transmission fluid leaks can pollute roads and waterways; collect and dispose of fluid appropriately.'},
  steering: {name:'Power Steering Fluid Leak',explanation:'Some vehicles use hydraulic fluid to help you steer; other vehicles use electric steering and have no power steering fluid.',parts:45,labor:210,urgency:'Fix Soon',diy:'Leave to a Shop',wait:'If your car uses hydraulic power steering, have a leak checked promptly. If steering becomes difficult, noisy, or unpredictable, stop driving safely and arrange assistance.',safety:'Loss of steering assistance can make the vehicle harder to control.',environment:'Power steering fluid can contaminate soil and waterways. Prevent runoff and repair leaks promptly.'}
};
const $ = id => document.getElementById(id);

// NHTSA vPIC supplies real make/model names, NOT parts or repair prices.
const popularMakes = ['Honda','Toyota','Ford','Chevrolet','Nissan','Hyundai','Kia','Subaru','Jeep','Dodge','Volkswagen','Mazda','BMW','Mercedes-Benz','GMC','Ram','Buick','Lexus','Acura'];
const makeList = $('makeSuggestions');
popularMakes.forEach(make => {const option=document.createElement('option');option.value=make;makeList.append(option);});
let lookupVersion=0;
async function loadModels(){
 const year=$('year').value, make=$('make').value.trim();
 const version=++lookupVersion;
 $('modelSuggestions').replaceChildren();
 if(!make || !year || Number(year)<1996){$('vehicleLookupStatus').textContent='Enter a year (1996 or newer) and make to load available model suggestions, or type your model.';return;}
 $('vehicleLookupStatus').textContent='Looking up vehicle models…';
 try{
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),6500);
  let response;
  try{response=await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${encodeURIComponent(make)}/modelyear/${encodeURIComponent(year)}?format=json`,{signal:controller.signal});}
  finally{clearTimeout(timeout);}
  if(!response.ok) throw Error('Vehicle lookup unavailable');
  const data=await response.json();
  if(version!==lookupVersion)return;
  const models=[...new Set((data.Results||[]).map(x=>x.Model_Name).filter(Boolean))].sort();
  models.forEach(model=>{const option=document.createElement('option');option.value=model;$('modelSuggestions').append(option);});
  $('vehicleLookupStatus').textContent=models.length?`${models.length} model suggestions from NHTSA. Select one or enter your own.`:'No matching models returned. You can still type your model.';
 }catch(e){if(version===lookupVersion)$('vehicleLookupStatus').textContent='Vehicle lookup unavailable right now. You can still enter your make and model manually.';}
}
let debounce;
['year','make'].forEach(id=>$(id).addEventListener('input',()=>{clearTimeout(debounce);debounce=setTimeout(loadModels,450);}));
// One published Omaha reference is shown as a broad total range only, never a fabricated parts/labor split.
const omahaReferences = {};


// Trim suggestions are intentionally conservative: examples only for model-year ranges
// we explicitly cover. There is no comprehensive free year/make/model/trim API here.
const trimCatalog = {
 'honda civic': [{from:2006,to:2011,values:['DX','LX','EX','EX-L','Si','Hybrid']},{from:2016,to:2021,values:['LX','Sport','EX','EX-L','Touring','Si','Type R']},{from:2022,to:2026,values:['LX','Sport','EX','EX-L','Touring','Si','Type R']}],
 'honda accord':[{from:2018,to:2022,values:['LX','Sport','EX','EX-L','Touring','Hybrid']},{from:2023,to:2026,values:['LX','EX','Sport Hybrid','EX-L Hybrid','Sport-L Hybrid','Touring Hybrid']}],
 'toyota camry':[{from:2018,to:2024,values:['LE','SE','XLE','XSE','TRD']},{from:2025,to:2026,values:['LE','SE','XLE','XSE']}],
 'toyota corolla':[{from:2020,to:2026,values:['LE','SE','XLE','Hybrid LE','Hybrid SE']}],
 'ford f-150':[{from:2015,to:2020,values:['XL','XLT','Lariat','King Ranch','Platinum','Limited','Raptor']},{from:2021,to:2026,values:['XL','STX','XLT','Lariat','King Ranch','Platinum','Tremor','Raptor']}],
 'ford focus':[{from:2012,to:2018,values:['S','SE','SEL','Titanium','ST','RS']}],
 'tesla model 3':[{from:2018,to:2023,values:['Standard Range Plus','Rear-Wheel Drive','Long Range','Performance']},{from:2024,to:2026,values:['Rear-Wheel Drive','Long Range','Performance']}],
 'hyundai elantra':[{from:2021,to:2026,values:['SE','SEL','Limited','N Line','N']}],
 'chevrolet silverado 1500':[{from:2019,to:2026,values:['WT','Custom','LT','RST','LT Trail Boss','LTZ','High Country']}]
};
function updateTrimSuggestions(){
 const key=($('make').value.trim()+' '+$('model').value.trim()).toLowerCase().replace(/\s+/g,' ');
 const year=Number($('year').value);
 const entry=(trimCatalog[key]||[]).find(item=>year>=item.from&&year<=item.to);
 const sel=$('trim'); const old=sel.value;
 sel.replaceChildren();
 const add=(value,label)=>{const option=document.createElement('option');option.value=value;option.textContent=label;sel.append(option);};
 add('','I’m not sure / skip trim');
 if(entry){for(const value of entry.values)add(value,value);}
 add('other','Other — enter manually');
 // Preserve only an actual selection that remains in this year/model list.
 sel.value=[...sel.options].some(o=>o.value===old)?old:'';
 const other=$('trimOther');
 other.hidden=sel.value!=='other';other.disabled=other.hidden;
 if(!other.hidden)other.value='';
 $('trimNote').textContent=entry?'Common trim examples for this model and year (not an exhaustive or verified factory list). Confirm using your registration, VIN/window sticker or manual. Trim does not affect estimates.':'Verified trim choices are not available for this vehicle/year. Select “Other” to enter yours, or “I’m not sure.” Trim does not affect estimates.';
}
$('trim').addEventListener('change',()=>{const custom=$('trim').value==='other';$('trimOther').hidden=!custom;$('trimOther').disabled=!custom;if(!custom)$('trimOther').value='';});
['year','make','model'].forEach(id=>$(id).addEventListener('input',updateTrimSuggestions));
updateTrimSuggestions();
function selectedTrim(){return $('trim').value==='other'?$('trimOther').value.trim():$('trim').value;}
// Make/model suggestions do not tell us the engine or trim. Ask explicitly.
// Known battery-electric Tesla models are defaulted to EV, but user can correct.
const iceOnly = new Set(['sparkPlugs','oil','oilLeak','alternator']);
const hydraulicOnly = new Set(['steering']);
const evPossible = new Set(['wipers','airFilter','bulbs','brakes','battery','ac','coolant','rotation','tires']);
const repairSelect = $('repair');
const initialOptions=[...repairSelect.options].map(o=>({value:o.value,label:o.textContent}));
function updateVehicleCompatibility(){
 const make=$('make').value.trim().toLowerCase(),model=$('model').value.trim().toLowerCase();
 const type=$('powertrain').value;
 const knownTesla=make==='tesla' && /^(model [3sxy]|cybertruck|roadster)/.test(model);
 const ev=type==='ev';
 const previous=repairSelect.value;
 repairSelect.replaceChildren();
 for(const o of initialOptions){
  if(ev && (iceOnly.has(o.value)||hydraulicOnly.has(o.value)))continue;
  if(type==='diesel' && o.value==='sparkPlugs')continue;
  if(type==='unknown' && (iceOnly.has(o.value)||hydraulicOnly.has(o.value)))continue;
  const option=document.createElement('option');option.value=o.value;option.textContent=o.label;repairSelect.append(option);
 }
 if([...repairSelect.options].some(o=>o.value===previous))repairSelect.value=previous;
 $('powertrainNote').textContent=knownTesla && type!=='ev'?'This Tesla model is fully electric. Select “Fully electric (EV)” for compatible repairs.':ev?'EV mode: engine oil, spark plugs, alternators and hydraulic steering leaks are hidden. Some EV coolant/AC work requires specialized technicians.':type==='hybrid'?'Hybrids have a combustion engine AND high-voltage components. Some conventional repairs apply, but specifications differ by model.':type==='unknown'?'Select gasoline, diesel, hybrid or EV to see powertrain-specific repairs.':'Repair options are filtered by broad powertrain type; check your exact trim and service manual.';
}
$('make').addEventListener('input',()=>{if($('make').value.trim().toLowerCase()==='tesla')$('powertrain').value='ev';updateVehicleCompatibility();});
$('model').addEventListener('input',updateVehicleCompatibility);
$('powertrain').addEventListener('change',updateVehicleCompatibility);
updateVehicleCompatibility();
const formatMoney=n=>'$'+Math.round(n).toLocaleString('en-US');
// Educational cost assumptions, NOT vehicle-specific prices. Do not pretend NHTSA supplies prices.
function estimatedRange(n){return [Math.max(0,Math.round(n*.8/5)*5),Math.round(n*1.3/5)*5];}
function renderCosts(repair,key,type){
 const area=$('costBreakdown');area.replaceChildren();
 const note=$('costNotice');
 if(key==='checkEngine'||key==='transmission'){
  area.textContent=key==='transmission'?'Transmission diagnosis and repairs vary widely, from minor service to major internal work. FixU does not have a reliable estimate for this repair yet.':'Diagnostic inspection: pricing varies by shop and by required testing. No verified Omaha amount is available in FixU yet.';
  note.textContent=key==='transmission'?'A sound alone cannot identify a transmission failure. Get a written diagnosis and quote before authorizing repairs.':'A diagnostic scan is not the same as a confirmed repair. Get the fault code and diagnosis before paying for parts.';return;
 }
 const isEV=type==='ev', hybrid=type==='hybrid';
 if(isEV && ['battery','coolant','ac'].includes(key)){area.textContent='No reliable vehicle-specific EV estimate is available in FixU for this repair. EV traction-battery, thermal-management and heat-pump repairs vary substantially; do not use conventional-car sample prices.';note.textContent='Check your vehicle manufacturer or a qualified EV repair shop for a written quote.';return;}
 const p=estimatedRange(repair.parts),l=estimatedRange(repair.labor);
 const rows=[['Estimated parts',p],['Estimated shop labor',l],['Estimated shop total',[p[0]+l[0],p[1]+l[1]]]];
 rows.forEach(([label,range])=>{const el=document.createElement('p');if(label==='Estimated shop total')el.className='total-cost';el.textContent=label+': '+formatMoney(range[0])+'–'+formatMoney(range[1]);area.append(el);});
 const diy=document.createElement('p');diy.className='diy-cost';
 diy.textContent=repair.diy==='Leave to a Shop'?'DIY cost: not recommended for this repair.':`Estimated DIY parts only: ${formatMoney(p[0])}–${formatMoney(p[1])} (DIY labor $0; tools, supplies, disposal, and taxes extra).`;
 area.append(diy);
 note.textContent=(isEV?'EV: ':'')+(hybrid?'Hybrid: ':'')+'These ranges are broad calculations around the project’s original sample amounts, not researched Omaha shop prices. They do NOT adjust for your year, make, model, trim, or powertrain. Ask Omaha repair shops for written quotes for more reliable pricing.';
}
const warningData=[
 ['⚠','Check engine / malfunction indicator','Steady: arrange diagnosis soon; flashing: may indicate damaging misfire—stop driving safely. Gas/hybrid vehicles; EVs may show a different drivetrain alert.'],
 ['🛢','Low oil pressure','Stop driving safely and switch off engine. Applies to combustion engines (including hybrids), not battery-only EVs.'],
 ['🌡','Engine temperature / overheating','Pull over safely and switch off the engine if overheating. EVs can also display battery/drive-unit temperature warnings.'],
 ['🔋','12V battery / charging','Charging system fault; on EVs this may indicate low-voltage system issues, not an alternator. Seek service promptly.'],
 ['(!)','Brake system','If braking feels abnormal, stop driving safely. Parking-brake indicators may also use this symbol.'],
 ['ABS','ABS warning','Anti-lock braking may be disabled; normal brakes may still function. Arrange prompt inspection and drive cautiously if braking remains normal.'],
 ['◉','Tire pressure (TPMS)','Check tire pressure when safe; a flat or visibly damaged tire means do not continue driving.'],
 ['⚡','EV / hybrid high-voltage warning','Potential traction battery or drivetrain fault. Follow the vehicle’s warning instructions; do not touch orange high-voltage cables.'],
 ['♨','Coolant / thermal management','Temperature or cooling fault may affect an engine, EV battery, or inverter. Stop if overheating or reduced-power warnings direct you to.']
];
function buildLights(){const area=$('warningLights');for(const [icon,title,desc] of warningData){const card=document.createElement('article');card.className='info-card';const b=document.createElement('div');b.className='warning-icon';b.textContent=icon;const h=document.createElement('h4');h.textContent=title;const p=document.createElement('p');p.textContent=desc;card.append(b,h,p);area.append(card);}}
buildLights();
// Know Your Car: educational guidance for every repair type, not a vehicle-specific parts catalog.
// Photo lookup is deliberately conservative: never substitute an unrelated image.
const knowYourCar = [
 ['checkEngine','Check-engine light','dashboard check engine warning light','Usually on the instrument cluster. It signals that the vehicle has stored a fault, not which part failed.','Look for a steady or flashing engine symbol. A flashing light on a combustion engine can signal a serious misfire.','check engine light dashboard photo','car dashboard instrument cluster check engine light','flashing check engine warning light dashboard'],
 ['wipers','Windshield wipers','car windshield wiper blade','Usually attached to the arms at the base of the windshield.','Streaks, splitting rubber, chatter, or missed areas are common signs of wear.','windshield wiper blade car','windshield wiper on windshield car','worn damaged windshield wiper rubber'],
 ['airFilter','Air filters','automotive air filter','The engine air filter is often inside an air box under the hood; the cabin filter is often behind the glovebox.','A visibly dirty filter may need attention, but follow the maintenance schedule.','automotive engine air filter','engine air filter housing car engine','dirty automotive air filter'],
 ['bulbs','Headlight / taillight bulbs','car headlight bulb','Inside front or rear lamp housings; some vehicles use sealed LED assemblies.','One lamp not illuminating, flickering, or condensation in a housing.','automotive headlight bulb','car headlight assembly engine bay','burned out car headlight bulb'],
 ['sparkPlugs','Spark plugs','automotive spark plug','Threaded into the gasoline engine cylinder head, often beneath ignition coils.','A fouled plug may have deposits or a damaged electrode; misfires can have other causes.','spark plug automobile','spark plug ignition coil engine','fouled worn spark plug electrode'],
 ['brakes','Brake pads','automotive disc brake pads','Disc brake pads sit inside the caliper around the brake rotor, behind a wheel.','Thin friction material, grinding, or poor stopping require inspection.','automotive brake pads','disc brake caliper rotor car wheel removed','worn brake pads comparison'],
 ['battery','12V battery','automotive 12 volt lead acid battery','Often under the hood, but sometimes in the trunk or under a seat.','Corroded terminals or swelling may be visible; a weak battery can also look normal.','car lead acid battery','12v battery installed car engine bay','corroded car battery terminal'],
 ['alternator','Alternator','automotive alternator','Usually mounted on the engine and driven by a belt in conventional gasoline and diesel vehicles.','A charging warning or dimming lights may occur even if the alternator looks normal.','car alternator','alternator installed engine belt','damaged alternator pulley belt'],
 ['oil','Engine oil / oil filter','automotive oil filter','The oil fill cap is on the engine; the filter and drain plug may be underneath.','Old oil color alone does not reliably indicate service need; follow the manual and oil-life monitor.','automotive engine oil filter','engine oil filler cap engine bay','engine oil change drain pan car'],
 ['oilLeak','Engine oil leak','engine oil leak car','Leaks can come from gaskets, seals, oil pan, filter, or other engine areas.','Look for fresh oil drips or wet engine surfaces; the source needs diagnosis.','engine oil drip under car','engine oil pan underside car','oil leak engine gasket wet'],
 ['ac','AC compressor','automotive air conditioning compressor','Usually in the engine bay on combustion vehicles; EV systems may use electric compressors.','Poor cooling, abnormal noises, or a damaged belt can occur; refrigerant leaks may not be visible.','automotive air conditioning compressor','ac compressor installed car engine','damaged ac compressor car'],
 ['coolant','Coolant system','automotive coolant reservoir radiator','The reservoir is often under the hood; hoses and radiators vary, and EVs can have multiple cooling loops.','Colored puddles, wet hoses, low coolant, steam, or overheating may indicate a leak.','car coolant expansion tank','car radiator coolant reservoir engine bay','coolant leak car hose'],
 ['rotation','Tire rotation','car tire wheel','The tires are at each wheel position; rotation patterns depend on tire and drivetrain configuration.','Uneven tread wear may indicate a need for inspection, alignment, or other service.','automobile wheel tire','car wheels tires parked','uneven tire tread wear'],
 ['tires','Worn or damaged tires','automobile tire tread','The tread is the rubber surface contacting the road; sidewalls are on each side.','Look for low tread, bulges, cracks, exposed cords, or punctures.','car tire tread close up','car tire on wheel','bald worn tire tread'],
 ['transmission','Transmission','automotive transmission gear assembly','Transmission location and design depend on drivetrain.','Whining, clunking, slipping or delayed engagement can have multiple causes.','automotive transmission gears','car transmission underbody','worn transmission gears'],
 ['steering','Hydraulic power steering','automotive power steering pump','A hydraulic pump, reservoir, and hoses are usually in the engine bay; many newer cars use electric steering instead.','Fluid drips, whining, or heavy steering may indicate a problem; do not assume all cars have fluid.','automotive power steering pump','power steering reservoir engine bay','power steering fluid leak hose']
];
// Curated photo references supplied by the project team. No automatic image substitution.
// External images remain hosted by their owners; obtain permission/licensing before public deployment.
const curatedPhotos = {
 airFilter:{part:['https://www.morrisontire.com/Files/Images/Blog/AdobeStock_457535501%20(Small).jpeg','Example of an automotive air filter (exact style varies by vehicle)','morrisontire.com']},
 checkEngine:{part:['images/check-engine-dashboard.png','Dashboard warning lights, including the amber check-engine symbol','User-supplied image']},
 sparkPlugs:{part:['images/spark-plugs.png','Four spark plugs photographed in front of an engine','User-supplied image']},
 coolant:{part:['images/coolant-system.png','Coolant being poured into a vehicle cooling-system filler neck (example only; never open a hot system)','User-supplied image']},
 transmission:{part:['images/transmission-gears.png','Mechanic holding a manual transmission gear shaft assembly; automatic transmissions and EV drive units look different','User-supplied image']},
 steering:{part:['images/hydraulic-steering.png','Hydraulic power-steering fluid reservoir in an engine bay','User-supplied image']},
 wipers:{part:['https://106sttire.com/Files/Images/Blog/windshield-wipers.jpg','Windshield wiper blades','106sttire.com']},
 bulbs:{part:['https://valvolinetireandauto.com/wp-content/uploads/inner-page-bulbs-image.webp','Automotive light bulbs','valvolinetireandauto.com']},
 brakes:{part:['https://neobrake.com/wp-content/uploads/2016/06/NeoBrake-Air-Disc-Brake-Pads-2.1.png','Air disc brake pads (heavy-duty example; passenger-car pads differ)','neobrake.com']},
 battery:{part:['https://autoimage.capitalone.com/cms/Auto/assets/images/2715-hero-guide-to-12-volt-car-batteries.jpg?width=1847','12-volt automotive battery','capitalone.com']},
 alternator:{part:['https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FsdGVybmF0b3ItdXBkYXRlMy0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19','Alternator example','howstuffworks.com']},
 oil:{part:['images/oil-filters-example.png','Different styles of engine oil filters','User-supplied screenshot']},
 oilLeak:{part:['https://www.valvolineglobal.com/4971b7/globalassets/vcom/article%20tile%20blocks/european%20images%20collection/oil-leak.jpg','Example of an engine oil leak (a condition, not a single part)','valvolineglobal.com']},
 ac:{part:['https://www.rycompressors.com/media/can-you-rebuild-car-ac-compressor-1.jpg','Automotive A/C compressor example','rycompressors.com']},
 rotation:{part:['images/tire-rotation-example.png','Mechanic removing a wheel during tire service; tire rotation means moving tires between positions','User-supplied screenshot']},
 tires:{part:['https://ik.imagekit.io/ntvz9dezi1x/blog/03_Uneven-Tread-Wear_Tyroola.jpg','Uneven tire tread wear (an example of a tire problem)','tyroola.com']}
};
// YouTube searches are intentionally linked, not embedded: no individual audio/video has been vetted.
// Sound examples are clues, never a diagnosis; several unrelated faults can sound alike.
const soundExamples = {
 checkEngine:[['Rough idle or misfire','engine misfire rough idle sputtering sound']],
 wipers:[['Wiper squeaking or chattering','windshield wipers squeaking chattering noise']],
 airFilter:[],
 bulbs:[],
 sparkPlugs:[['Rough sputtering idle','engine misfire spark plug rough idle sound']],
 brakes:[['Brake squeal','worn brake pads high pitched squealing sound'],['Brake grinding','brake pads metal grinding sound'],['Pulsing brakes (explanation)','brake pedal pulsation rotor diagnosis explanation']],
 battery:[['Rapid clicking on startup','car weak battery rapid clicking start sound'],['Single click or grinding starter','car starter single click grinding sound'],['Slow cranking','car battery slow cranking engine sound']],
 alternator:[['Alternator whine or growl','bad alternator whining growling noise']],
 oil:[['Engine ticking or tapping','low oil engine ticking tapping sound'],['Deep engine knocking — serious','engine rod knock sound']],
 oilLeak:[['Engine ticking or knocking — urgent','low oil pressure engine knocking ticking sound']],
 ac:[['AC compressor rattling or squealing','car AC compressor rattling squealing when turned on']],
 coolant:[['Overheating sounds (explanation)','car overheating bubbling coolant sound explanation']],
 rotation:[['Tire droning or rhythmic thumping','uneven tire wear thumping humming sound']],
 tires:[['Rhythmic tire thumping','damaged tire rhythmic thumping sound'],['Uneven tire wear hum','uneven tire wear droning humming sound']],
 steering:[['Whine when turning','hydraulic power steering pump whining when turning sound']],
 transmission:[['Transmission whining','car transmission whining sound'],['Clunking during shifts','car transmission clunk shifting sound'],['Delayed engagement (explanation)','car transmission delayed engagement demonstration']]
};
function addSoundExamples(card,key){
 const sounds=soundExamples[key]||[];
 if(!sounds.length)return;
 const section=document.createElement('section');section.className='sound-examples';
 const heading=document.createElement('h5');heading.textContent='Hear possible warning sounds';section.append(heading);
 const intro=document.createElement('p');intro.className='fine-print';intro.textContent='Tap a sound to browse YouTube examples. These are search links, not verified videos or a diagnosis.';section.append(intro);
 const list=document.createElement('div');list.className='sound-links';
 for(const [label,query] of sounds){const a=document.createElement('a');a.className='sound-link';a.href='https://www.youtube.com/results?search_query='+encodeURIComponent(query);a.target='_blank';a.rel='noopener noreferrer';a.textContent='▶ '+label;list.append(a);}
 section.append(list);card.append(section);
}
function buildGallery(){
 const area=$('partsGallery');area.replaceChildren();
 for(const item of knowYourCar){
  const [key,title,subject]=item;
  const card=document.createElement('article');card.className='part-card';card.dataset.part=key;
  const heading=document.createElement('h4');heading.textContent=title;
  const photo=document.createElement('img');photo.hidden=true;photo.loading='lazy';photo.alt='';
  const placeholder=document.createElement('p');placeholder.className='gallery-placeholder';
  const explanation=document.createElement('p');explanation.className='gallery-explanation';
  const note=document.createElement('p');note.className='fine-print';note.textContent='Example photo: appearance may vary by year, make, model, and trim. Check reuse permissions before publishing.';
  const record=curatedPhotos[key]?.part;
  if(record){
   const [src,caption,credit]=record;
   photo.src=src;photo.alt=caption;photo.hidden=false;
   photo.onerror=()=>{photo.hidden=true;placeholder.hidden=false;placeholder.textContent='Photo unavailable. Please check its source link.';};
   placeholder.hidden=true;
   explanation.textContent=caption+'.';
  }else{
   placeholder.textContent='Photo not added yet.';
   explanation.textContent='A typical example of '+subject+'.';
  }
  card.append(heading,photo,placeholder,explanation);addSoundExamples(card,key);card.append(note);area.append(card);
 }
}
buildGallery();
function filterGallery(type){document.querySelectorAll('.part-card').forEach(el=>{el.hidden=(type==='ev'&&(iceOnly.has(el.dataset.part)||hydraulicOnly.has(el.dataset.part)))||(type==='diesel'&&el.dataset.part==='sparkPlugs');});}
$('repairForm').addEventListener('submit', event => {
  event.preventDefault();
  const key=$('repair').value;
  const type=$('powertrain').value;
  if(type==='ev'&&(iceOnly.has(key)||hydraulicOnly.has(key))){alert('This repair does not apply to a battery-electric vehicle. Choose a compatible repair.');return;}
  const repair = repairInformation[key];
  const symptom = $('symptom').value;

  $('vehicleResult').textContent = `${$('year').value} ${$('make').value.trim()} ${$('model').value.trim()}`;
  $('repairName').textContent = type==='ev'&&key==='checkEngine'?'EV drivetrain warning / diagnostics':repair.name;
  $('repairExplanation').textContent = repair.explanation + (type==='ev'&&key==='battery'?' On an EV, the high-voltage traction battery is NOT the same as a conventional 12V battery; costs shown below are NOT traction-battery replacement estimates.':'') + (type==='ev'&&key==='coolant'?' EV coolant systems can cool the battery or drive unit, not an engine.':'');
  renderCosts(repair,key,type);
  const ref=omahaReferences[key];
  $('priceSource').replaceChildren();
  if(ref){const a=document.createElement('a');a.href=ref.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Published Omaha oil-change reference: $'+ref.low+'–$'+ref.high+' (not specific to your car). View source.';$('priceSource').append(a);}
  else{$('priceSource').textContent='No independently verified Omaha-specific price for this repair is included in FixU.';}
  // Photo library remains available independently of the selected vehicle.
  const danger = symptom==='danger';
  const panel=$('urgencyPanel');
  panel.classList.toggle('urgent',danger);
  const urgency = danger ? 'Stop Driving Now' : (symptom==='worsening' ? 'Fix Soon' : repair.urgency);
  panel.classList.toggle('urgent',urgency==='Stop Driving Now');
  panel.classList.toggle('can-wait',urgency==='Can Wait');
  $('urgencyLabel').textContent=urgency;
  $('diyDifficulty').textContent=repair.diy;
  $('diyDifficulty').className='difficulty '+({'Beginner-Friendly':'easy','Intermediate':'medium','Leave to a Shop':'hard'}[repair.diy]);
  $('diyAdvice').textContent=repair.diy==='Beginner-Friendly'?'Often approachable for beginners with the correct vehicle-specific instructions and safety precautions.':repair.diy==='Intermediate'?'Requires proper tools, experience, and vehicle-specific instructions. Do not attempt without a safe workspace.':'Professional repair recommended; specialized tools, hazards, or safety-critical components may be involved.';
  if(type==='ev'&&key==='battery'){$('diyDifficulty').textContent='Leave to a Shop (EV battery systems)';$('diyAdvice').textContent='EV traction batteries are high-voltage and must not be repaired at home. Some low-voltage batteries may be serviceable, but follow the exact manufacturer procedure.';renderTutorials(key,'Leave to a Shop');}else if(type==='ev'&&key==='coolant'){$('diyDifficulty').textContent='Leave to a Shop';$('diyAdvice').textContent='EV battery and drive-unit coolant systems may require special procedures. Professional service recommended.';renderTutorials(key,'Leave to a Shop');}else{renderTutorials(key,repair.diy);}
  $('waitAdvice').textContent=danger?'The symptoms you selected may signal an unsafe condition. Stop driving when safe and arrange professional assistance. '+repair.wait:repair.wait+(symptom==='worsening'?' Because you reported worsening symptoms, seek an inspection as soon as possible.':'');
  $('safetyImpact').textContent=repair.safety;
  $('environmentImpact').textContent=repair.environment;
  $('results').hidden=false;
  $('emptyState').hidden=true;
  activateTab('overview');
  $('results').scrollIntoView({behavior:'smooth',block:'start'});
});

// Tab navigation: only one result panel is visible at a time.
function activateTab(name){
 document.querySelectorAll('[data-tab]').forEach(button=>{const active=button.dataset.tab===name;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
 document.querySelectorAll('[data-panel]').forEach(panel=>{panel.hidden=panel.dataset.panel!==name;});
}
document.querySelectorAll('[data-tab]').forEach(button=>button.addEventListener('click',()=>activateTab(button.dataset.tab)));
document.querySelector('[role="tablist"]').addEventListener('keydown',event=>{
 if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
 const tabs=[...document.querySelectorAll('[data-tab]')];const current=tabs.indexOf(document.activeElement);if(current<0)return;
 event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(current+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
 tabs[next].focus();activateTab(tabs[next].dataset.tab);
});
// These links open YouTube search results, not verified or endorsed individual videos.
// Include the selected vehicle so viewers can choose a compatible tutorial.
const videoTopics={wipers:'windshield wiper blade replacement',airFilter:'cabin engine air filter replacement',bulbs:'headlight taillight bulb replacement',rotation:'tire rotation jack stands torque wrench',battery:'12v car battery replacement',oil:'engine oil change',sparkPlugs:'spark plug replacement',brakes:'brake pad replacement',alternator:'alternator replacement'};
const starterTopics=[['Wiper blades','windshield wiper blade replacement'],['Cabin / engine air filters','cabin air filter engine air filter replacement'],['Exterior light bulbs','headlight taillight bulb replacement'],['Tire rotation (lifting safety required)','tire rotation jack stands torque wrench'],['Battery replacement','12v car battery replacement'],['Oil change','engine oil change'],['Spark plugs','spark plug replacement'],['Brake pads (safety-critical)','brake pad replacement']];
function videoLink(topic,vehicle){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(vehicle+' '+topic+' tutorial');}
function renderTutorials(key,difficulty){
 const area=$('tutorialLinks');area.replaceChildren();
 const vehicle=[$('year').value,$('make').value.trim(),$('model').value.trim(),selectedTrim()].filter(Boolean).join(' ');
 if(difficulty==='Leave to a Shop'){
  const p=document.createElement('p');p.textContent='This repair is best handled by a qualified shop. No DIY repair tutorial is recommended for this selection.';area.append(p);return;
 }
 const topic=videoTopics[key];if(!topic){const p=document.createElement('p');p.textContent='Choose a task below to find a tutorial.';area.append(p);return;}
 const a=document.createElement('a');a.className='video-link';a.href=videoLink(topic,vehicle);a.target='_blank';a.rel='noopener noreferrer';a.textContent='▶ Find a '+vehicle+' '+topic+' tutorial on YouTube';area.append(a);
 const note=document.createElement('p');note.className='fine-print';note.textContent='YouTube search results are not reviewed or endorsed by FixU. Confirm the tutorial matches your exact engine, trim, and model year. Stop if the task requires equipment or skills you do not have.';area.append(note);
}
const library=$('videoLibrary');starterTopics.forEach(([name,topic])=>{const a=document.createElement('a');a.href='https://www.youtube.com/results?search_query='+encodeURIComponent(topic+' car tutorial safety');a.target='_blank';a.rel='noopener noreferrer';a.className='resource-link';a.textContent='▶ '+name;library.append(a);});
