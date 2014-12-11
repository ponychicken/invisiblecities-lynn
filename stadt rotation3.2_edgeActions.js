/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${sophronia_titelseite}", "click", function(sym, e) {
         
         sym.play("app_starten");
         //sym.play("titel_einblenden");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_sophronia}", "click", function(sym, e) {
         sym.play("anweisung_einblenden");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${anweisungen}", "click", function(sym, e) {
         sym.play("app_starten");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // Remove all uneccessary stuff from the stage.
         sym.getSymbol("sophronia_titelseite").deleteSymbol();
         sym.getSymbol("text_sophronia").deleteSymbol();
         sym.getSymbol("sophronia_ueberschrift").deleteSymbol();
         sym.getSymbol("anweisungen").deleteSymbol();
         sym.getSymbol("untertitel").deleteSymbol();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'stadtrotation'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${stadt-zwei-seiten}", "swiperight", function(sym, e) {
         if (sym.getPosition() <= 0) {
             sym.play("bunt-grau-UZ");
             // alert('bunt-grau');
         	sym.getSymbol("stadt-grau").getSymbol("haeuser").play();
         } else {
         	sym.play("grau-bunt-UZ");
         	//alert('grau-bunt');
         	sym.getSymbol("stadt-bunt").getSymbol("rand").play();
         	sym.getSymbol("stadt-bunt").getSymbol("rummel").play();
         }

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("anfang");
         // Hide an Element.
         sym.$("stadt-grau").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stadt-zwei-seiten}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         if (sym.getPosition() <= 0) {
             sym.play("bunt-grau-UZ");
             // alert('bunt-grau');
         	sym.getSymbol("stadt-grau").getSymbol("haeuser").play();
         } else {
         	sym.play("grau-bunt-UZ");
         	//alert('grau-bunt');
         	sym.getSymbol("stadt-bunt").getSymbol("rand").play();
         	sym.getSymbol("stadt-bunt").getSymbol("rummel").play();
         }

      });
      //Edge binding end

   })("stadtrotation");
   //Edge symbol end:'stadtrotation'

   //=========================================================
   
   //Edge symbol: 'stadt-bunt'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${but-raum-rot}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("raum-rot");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("start");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${raum_rot}", "click", function(sym, e) {
         sym.play("hide-raum-rot");
         

      });
      //Edge binding end

      

   })("stadt-bunt");
   //Edge symbol end:'stadt-bunt'

   //=========================================================
   
   //Edge symbol: 'stadt-grau'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${but-raum-grau}", "click", function(sym, e) {
         sym.play("raum_grau");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop("start 2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${but-reiterstandbild}", "click", function(sym, e) {
         sym.play("reiterstandbild_zoom");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19250, function(sym, e) {
         sym.stop("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${raum_grau}", "click", function(sym, e) {
         sym.play("hide_raum_grau");
         

      });
      //Edge binding end

   })("stadt-grau");
   //Edge symbol end:'stadt-grau'

   //=========================================================
   
   //Edge symbol: 'hau2'
   (function(symbolName) {   
   
   })("hau2");
   //Edge symbol end:'hau2'

   //=========================================================
   
   //Edge symbol: 'haus1'
   (function(symbolName) {   
   
   })("haus1");
   //Edge symbol end:'haus1'

   //=========================================================
   
   //Edge symbol: 'bank'
   (function(symbolName) {   
   
   })("bank");
   //Edge symbol end:'bank'

   //=========================================================
   
   //Edge symbol: 'schule'
   (function(symbolName) {   
   
   })("schule");
   //Edge symbol end:'schule'

   //=========================================================
   
   //Edge symbol: 'marmordunkel'
   (function(symbolName) {   
   
   })("marmordunkel");
   //Edge symbol end:'marmordunkel'

   //=========================================================
   
   //Edge symbol: 'fabrik'
   (function(symbolName) {   
   
   })("fabrik");
   //Edge symbol end:'fabrik'

   //=========================================================
   
   //Edge symbol: 'schwarzeshaus'
   (function(symbolName) {   
   
   })("schwarzeshaus");
   //Edge symbol end:'schwarzeshaus'

   //=========================================================
   
   //Edge symbol: 'riesenhaus'
   (function(symbolName) {   
   
   })("riesenhaus");
   //Edge symbol end:'riesenhaus'

   //=========================================================
   
   //Edge symbol: 'marmorhell'
   (function(symbolName) {   
   
   })("marmorhell");
   //Edge symbol end:'marmorhell'

   //=========================================================
   
   //Edge symbol: 'riesenrad'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("riesenrad");
   //Edge symbol end:'riesenrad'

   //=========================================================
   
   //Edge symbol: 'haeuser'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25121, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51107, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51400, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("haeuser");
   //Edge symbol end:'haeuser'

   //=========================================================
   
   //Edge symbol: 'png_buntestadt'
   (function(symbolName) {   
   
   })("png_buntestadt");
   //Edge symbol end:'png_buntestadt'

   //=========================================================
   
   //Edge symbol: 'haus_1'
   (function(symbolName) {   
   
   })("haus_1");
   //Edge symbol end:'haus_1'

   //=========================================================
   
   //Edge symbol: 'Fabrik'
   (function(symbolName) {   
   
   })("Fabrik");
   //Edge symbol end:'Fabrik'

   //=========================================================
   
   //Edge symbol: 'Riesenhaus'
   (function(symbolName) {   
   
   })("Riesenhaus");
   //Edge symbol end:'Riesenhaus'

   //=========================================================
   
   //Edge symbol: 'Bauhaus'
   (function(symbolName) {   
   
   })("Bauhaus");
   //Edge symbol end:'Bauhaus'

   //=========================================================
   
   //Edge symbol: 'Schwarzeshaus'
   (function(symbolName) {   
   
   })("Schwarzeshaus");
   //Edge symbol end:'Schwarzeshaus'

   //=========================================================
   
   //Edge symbol: 'Marmordunkel'
   (function(symbolName) {   
   
   })("Marmordunkel");
   //Edge symbol end:'Marmordunkel'

   //=========================================================
   
   //Edge symbol: 'Klotz'
   (function(symbolName) {   
   
   })("Klotz");
   //Edge symbol end:'Klotz'

   //=========================================================
   
   //Edge symbol: 'gesicht_augenzu'
   (function(symbolName) {   
   
   })("gesicht_augenzu");
   //Edge symbol end:'gesicht_augenzu'

   //=========================================================
   
   //Edge symbol: 'gesicht'
   (function(symbolName) {   
   
   })("gesicht");
   //Edge symbol end:'gesicht'

   //=========================================================
   
   //Edge symbol: 'kopf'
   (function(symbolName) {   
   
   })("kopf");
   //Edge symbol end:'kopf'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Korb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Korb");
   //Edge symbol end:'Korb'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Spiegelei'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Spiegelei");
   //Edge symbol end:'Spiegelei'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ball'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Ball");
   //Edge symbol end:'Ball'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Splash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Splash");
   //Edge symbol end:'Splash'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Splash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Splash_1");
   //Edge symbol end:'Splash_1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Geist'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

      

   })("Geist");
   //Edge symbol end:'Geist'

   //=========================================================
   
   //Edge symbol: 'diamant'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("diamant");
   //Edge symbol end:'diamant'

   //=========================================================
   
   //Edge symbol: 'raum-rot'
   (function(symbolName) {   
   
   })("raum-rot");
   //Edge symbol end:'raum-rot'

   //=========================================================
   
   //Edge symbol: 'reiter'
   (function(symbolName) {   
   
   })("reiter");
   //Edge symbol end:'reiter'

   //=========================================================
   
   //Edge symbol: 'rand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 87, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 112, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 159, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 185, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 218, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 274, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 614, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 578, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 562, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 543, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 501, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 462, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 439, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 390, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 356, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 640, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 657, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 670, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

   })("rand");
   //Edge symbol end:'rand'

   //=========================================================
   
   //Edge symbol: 'amusement'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Amusement}", "swiperight", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("amusement");
   //Edge symbol end:'amusement'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'rauch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("rauch");
   //Edge symbol end:'rauch'

   //=========================================================
   
   //Edge symbol: 'riesenrad_leuchten'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("riesenrad_leuchten");
   //Edge symbol end:'riesenrad_leuchten'

   //=========================================================
   
   //Edge symbol: 'streifen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("streifen");
   //Edge symbol end:'streifen'

   //=========================================================
   
   //Edge symbol: 'happytime'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("happytime");
   //Edge symbol end:'happytime'

   //=========================================================
   
   //Edge symbol: 'action'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("action");
   //Edge symbol end:'action'

   //=========================================================
   
   //Edge symbol: 'action1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0
         );

      });
      //Edge binding end

   })("action1");
   //Edge symbol end:'action1'

   //=========================================================
   
   //Edge symbol: 'verlauf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("verlauf");
   //Edge symbol end:'verlauf'

   //=========================================================
   
   //Edge symbol: 'peng'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11535, function(sym, e) {
         // insert sym.play();
         sym.play(0);

      });
      //Edge binding end

      

   })("peng");
   //Edge symbol end:'peng'

   //=========================================================
   
   //Edge symbol: 'fun_leuchten'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("fun_leuchten");
   //Edge symbol end:'fun_leuchten'

   //=========================================================
   
   //Edge symbol: 'diamant_leuchten'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("diamant_leuchten");
   //Edge symbol end:'diamant_leuchten'

   //=========================================================
   
   //Edge symbol: 'auto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("auto");
   //Edge symbol end:'auto'

   //=========================================================
   
   //Edge symbol: 'fenster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("fenster");
   //Edge symbol end:'fenster'

   //=========================================================
   
   //Edge symbol: 'Gesicht_augenzu'
   (function(symbolName) {   
   
   })("Gesicht_augenzu");
   //Edge symbol end:'Gesicht_augenzu'

   //=========================================================
   
   //Edge symbol: 'Gesicht_augenzu1'
   (function(symbolName) {   
   
   })("Gesicht_augenzu1");
   //Edge symbol end:'Gesicht_augenzu1'

   //=========================================================
   
   //Edge symbol: 'reiterstandbild'
   (function(symbolName) {   
   
   })("reiterstandbild");
   //Edge symbol end:'reiterstandbild'

   //=========================================================
   
   //Edge symbol: 'raum_rot3'
   (function(symbolName) {   
   
   })("raum_rot3");
   //Edge symbol end:'raum_rot3'

   //=========================================================
   
   //Edge symbol: 'raum_rot'
   (function(symbolName) {   
   
   })("raum_rot");
   //Edge symbol end:'raum_rot'

   //=========================================================
   
   //Edge symbol: 'sophronia_titel'
   (function(symbolName) {   
   
   })("sophronia_titel");
   //Edge symbol end:'sophronia_titel'

   //=========================================================
   
   //Edge symbol: 'text_sophronia'
   (function(symbolName) {   
   
   })("text_sophronia");
   //Edge symbol end:'text_sophronia'

   //=========================================================
   
   //Edge symbol: 'anweisungen'
   (function(symbolName) {   
   
   })("anweisungen");
   //Edge symbol end:'anweisungen'

   //=========================================================
   
   //Edge symbol: 'untertitel'
   (function(symbolName) {   
   
   })("untertitel");
   //Edge symbol end:'untertitel'

   //=========================================================
   
   //Edge symbol: 'sophronia_schrift'
   (function(symbolName) {   
   
   })("sophronia_schrift");
   //Edge symbol end:'sophronia_schrift'

   //=========================================================
   
   //Edge symbol: 'enter'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("enter");
   //Edge symbol end:'enter'

   //=========================================================
   
   //Edge symbol: 'enter_rot'
   (function(symbolName) {   
   
   })("enter_rot");
   //Edge symbol end:'enter_rot'

   //=========================================================
   
   //Edge symbol: 'raum_grau'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${raum_grau}", "click", function(sym, e) {
         sym.play("hide_raum_grau");
         

      });
         //Edge binding end

   })("raum_grau");
   //Edge symbol end:'raum_grau'

   //=========================================================
   
   //Edge symbol: 'raum_grau1'
   (function(symbolName) {   
   
   })("raum_grau1");
   //Edge symbol end:'raum_grau1'

   //=========================================================
   
   //Edge symbol: 'rummel'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 622, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1673, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1224, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2021, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2353, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2672, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2956, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3545, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3801, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3857, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3914, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4170, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4465, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4759, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5043, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5362, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5694, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6042, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6443, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6994, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7616, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7953, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${amusementCopy}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${amusementCopy}", "swiperight", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("rummel");
   //Edge symbol end:'rummel'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-99890");