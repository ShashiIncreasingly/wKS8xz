/* eslint-disable no-case-declarations */

var INC = (typeof (INC) == "undefined") ? {} : INC;
var init_flag=true;
var init_fun_flag = true;
var init_irb_flag = true;
INC.ENV = "prod";
INC.debug = 0;
INC.initStatus = "";
INC.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
var incallowedKeys = [46, 8, 9, 27, 110, 190];
var onloadpdp = false;
var item_inc = []
var blue_code_promo = ['174683', '185251', '199394', '199395', '153356', '114021', '209889', '112777', '153773', '220238', '147124', '220131', '147122', '220130', '112779', '220000', '147121', '220003', '147123', '112778', '220002', '147125'];
var black_code_promo = [];
var sidebar_configurator_id=[];
INC.checkDevUserCookie = function () {
    if (INC.ENV == "prod") {
        setTimeout(function () {
            INC.config.pageType = INC.methods.detectPageType();
            if(init_flag){
                init_flag=false;
                INC.init();
            }
        }, 200);
    }
}
INC.bundles = true
var inc_scroll_height=100
INC.clientConfig = {};
INC.clientConfig.currencySymbol = "";
INC.clientConfig.productPage = {};
INC.clientConfig.productPage.pdpElementSelector = "";
INC.clientConfig.productPage.amElementSelector = "";
INC.clientConfig.productPage.sbElementSelector = "";
INC.clientConfig.productListPage = {};
INC.clientConfig.productListPage.sbElementSelector = "";
INC.clientConfig.cartPage = {};
INC.clientConfig.cartPage.amElementSelector = "";
INC.clientConfig.statusVAT = "";
INC.clientConfig.regularPricePrefix = "";
INC.clientConfig.checkoutLink = "/cart";
INC.clientConfig.loggedInUser = "";
INC.clientConfig.offset = 0;
INC.clientConfig.slidevalue = 0;
INC.config = {};
INC.config.deviceType = "";
INC.config.clientToken = "wKS8xz";
INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC.config.addToBasketURL = "/cart/add";
INC.config.click_collect_addToBasketURL = "/store-pickup/cart/add";
INC.config.affiliateURL = "";
INC.config.crawlDataObj = {};
INC.config.pageType = "";
INC.config.ivid = "";
INC.config.language = "en";
INC.config.clientOverlayInterval = "";
INC.config.conversionPixelFileStatus = "";
INC.config.deviceMode = "";
INC.config.pdpaddedProductList = [];
INC.config.stopImgOver = false;
INC.config.tout = null;
INC.config.plpstorebtnclick = null;
INC.config.empty_prod_details=[]
INC.config.inc_slideIndex = 1;
INC.config.quick_view=true;
INC.config.user_interaction_modal= true;
INC.config.close_modal_time= 0;
INC.config.configcount= 0;
INC.config.bundle_tracking=[];
INC.config.bundle_trackingPushed = []
INC.config.bundle_skuPushed = []
INC.config.Product_id = null;
INC.config.dupBasket = [];
INC.config.dupDataObjectProducts = [];
INC.clientConfig.OOS=[]
INC.config.dataObjcount=0;
INC.config.uniqeProduct = []
INC.config.DealProducts=[];
INC.config.disablebtn = true;
INC.config.plpProductId = ""
INC.config.upsell_added_sku=[];
INC.config.added_categories=[];
INC.config.upsell_all_sku=[];
INC.config.AssociatedProducts=[];
INC.config.clientbtn = false
INC.config.loadconfigurator = false
INC.config.noimage = "https://www.increasingly.co/Implementation/wKS8xz_R/no_image.jpg"
INC.clientConfig.OOS_COL = []
INC.clientConfig.scroll_offset = 0
INC.clientConfig.OOS_MESG = [];
INC.clientConfig.added_product_sku = [];
var ProductArr = [];
INC.config.storeId = ""
INC.config.mainProductid = ""
INC.config.category_sequance = []
INC.config.category_seqId = []
INC.config.product_seq = []
INC.config.childlevelprod=[]
INC.config.FBTTitle = "Frequently bought together"
INC.config.AddText = "Add"
INC.config.AddedText = "Added"
INC.config.TotalText = "Total"
INC.config.AddToCartText = "Add to basket"
INC.config.ItemAddedToCarttext = "You just added"
INC.config.ExcItemAlreadyinCartText = "(excludes items already in basket)"
INC.config.NosText = "items"
INC.config.OtherCustAlsoBoughtText = "Don't forget your essential items"
INC.config.ContinueShopping = "Back"
INC.config.CartText = "View Basket"
INC.config.BeforeYouChecktext = "Other customers also bought"
INC.config.ViewDetailsText = "View details"
INC.config.DescriptionText = "Description"
INC.config.SeeOtherProdText = "Show more products"
INC.config.ColorSizeText="Overview"
INC.config.EditText="Edit"
INC.config.UpdateText="Update"
INC.config.addingText = "Adding"
INC.config.qtyText = "Quantity:"
INC.config.addtocartsecondarytext = "Add to basket"
INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/wKS8xz_R/images/img_placeholder.gif";
INC.config.recommendation = false;
INC.config.recommendationProduct=[]
INC.config.config_prd_list=[]
INC.config.stockinfo=true
INC.config.configuratorabtestprod=[]
INC.config.incvattext = 'Inc.VAT';
INC.config.excvattext = 'Exc.VAT';
INC.config.recommendation = false;
var is_visible_elem_counter = 0;
var pdptickboxpid = []
var tickboxexcludeprod = []
if (window.location.host == "instore.wickes.co.uk") {
    INC.config.clientToken = "wKS8ist"
}

if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
    INC.config.clientToken = "wKS8apl"
    sidebar_configurator_id= [];
}

if (window.location.host == "instore.wickes.co.uk") {
    INC.clientConfig.checkoutLink = "https://instore.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://instore.wickes.co.uk/cart/add"
} else if (window.location.host == "www-cand1.dev.wickes.co.uk") {
    INC.clientConfig.checkoutLink = "https://www-cand1.dev.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://www-cand1.dev.wickes.co.uk/cart/add"
}else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
    INC.clientConfig.checkoutLink = "https://www-vendor.dev.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://www-vendor.dev.wickes.co.uk/cart/add"
} else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
    INC.clientConfig.checkoutLink = "https://www-cand3.dev.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://www-cand3.dev.wickes.co.uk/cart/add"
}


var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = 0, c2 = 0, c3 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}


function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key],
            y = b[key];
        if (typeof x === 'string') {
            x = x.toLowerCase();
            y = y.toLowerCase();
            if (!isNaN(x) && !isNaN(y)) {
                x = parseInt(x, 10);
                y = parseInt(y, 10);
            }
        }
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
}



INC.init = function(init_call) {
    if(document.querySelector('.switch.switch-vat') != null){
        document.querySelector('html').classList.add('inc_vat_available')
        if(document.querySelector('.switch.switch-vat input:checked') != null){
            document.querySelector('html').classList.add('inc_excvat_show')
        }else if(document.querySelector('.including-vat.d-none') != null){
            document.querySelector('html').classList.add('inc_excvat_show')
        }else if(document.querySelector('.excluding-vat.d-none') != null){
            document.querySelector('html').classList.add('inc_incvat_show')
        }else{
            document.querySelector('html').classList.add('inc_incvat_show')
        }
    }else{
        document.querySelector('html').classList.add('inc_incvat_show')
        INC.config.incvattext = '';
        INC.config.excvattext = '';
    }
    if (init_fun_flag == true || init_call == "init_call") {
        if (document.querySelector('form input[name="storeNamePost"]') != null) {
            INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
            localStorage.setItem('inc_storeId', INC.config.storeId)
        } else if (document.querySelector('.card-store-collect__actions input[name="storeNamePost"]') != null) {
            INC.config.storeId = document.querySelector('.card-store-collect__actions input[name="storeNamePost"]').value
            localStorage.setItem('inc_storeId', INC.config.storeId)
        } else if (document.querySelector('#collectionGroup script') != null) {
            var allcollectel = document.querySelectorAll('#collectionGroup script')
            for (var c = 0; c < allcollectel.length; c++) {
                if (allcollectel[c].innerText.indexOf('pointOfServiceId') >= 0) {
                    INC.config.storeId = allcollectel[c].innerText.split('pointOfServiceId')[1].split('var')[0].trim().replace(';', '').replace('= "', '').replace('"', '').replace('"', '')
                    localStorage.setItem('inc_storeId', INC.config.storeId)
                    break;
                }
            }
        }
        if (INC.config.storeId == "" && localStorage.getItem('inc_storeId') != undefined) {
            INC.config.storeId = localStorage.getItem('inc_storeId')
        }
        init_fun_flag = false;
        INC.methods.addVisitorID();
        INC.config.recommendation = false;
        INC.config.deviceType = INC.methods.detectDeviceType();
        INC.config.pageType = INC.methods.detectPageType();
        INC.config.language = INC.methods.detectLanguage();
        INC.clientConfig.statusVAT = INC.methods.checkStatusVAT();
        INC.clientConfig.statusLoggedIn = INC.methods.checkStatusLoggedIn();
        INC.methods.clear();
        switch (INC.config.pageType) {
            case "pdp":
                setTimeout(function() {
                    var productId = INC.methods.getProductIdFromWebPage();
                    INC.config.mainProductid =productId
                    if (productId != null){
                        if (init_irb_flag) {
                            init_irb_flag = false;
                            if (document.querySelector('.schinstock') != null) {
                                INC.config.stockinfo = true;
                            } else {
                                INC.config.stockinfo = false;
                            }
                            if (document.querySelector('.pdp-price__oos .schoutstock') != null) {
                                if (document.querySelector('.pdp-price__oos .schoutstock').innerText.toLocaleLowerCase() == "out of stock online") {
                                    INC.config.stockinfo = true
                                }

                                if (document.querySelector('.stock__accordion .stock__head') != null && document.querySelector('.btn-add-to-basket') == null) {
                                    INC.config.stockinfo = true
                                }
                                
                                if (document.querySelector('.stock__accordion .stock__head') == null && document.querySelector('.btn-add-to-basket') == null) {
                                    INC.config.stockinfo = false
                                }
                            } else if (document.querySelector('.stock__accordion .stock__head') == null && document.querySelector('.btn-add-to-basket') != null) {
                                INC.config.stockinfo = true
                            } else if (document.querySelector('.stock__accordion .stock__head') != null && document.querySelector('.btn-add-to-basket') != null) {
                                INC.config.stockinfo = true
                            } else if (document.querySelector('.stock__accordion .stock__head') == null && document.querySelector('.btn-add-to-basket') == null) {
                                INC.config.stockinfo = false
                            }else if (document.querySelector('.stock__accordion .stock__head') != null && document.querySelector('.btn-add-to-basket') == null) {
                                INC.config.stockinfo = true
                            }
                            if(INC.config.stockinfo == false && productId != ''){
                                oosproduct(productId)
                            }
                            if(productId != '287585'){
                                // irbReq_tickbox()
                                setTimeout(function(){
                                    if(document.querySelector('.product-oos-form__wrapper') == null){
                                        INC.methods.irbReq(productId, 5, "catalog_product_view");
                                    }
                                },500)
                            }
                            
                        }
                    }
                }, 0);

                break;
            case "cartPage":
                    setTimeout(function() {
                        var productIds = [];
                        Array.prototype.forEach.call(document.querySelectorAll('.order-item__product .product-code-number'), function(elProductCode) {
                            productIds.push(elProductCode.innerText.trim());
                        });
                        if (productIds.length > 0) {
                            INC.methods.irbReq(productIds[0], 12, "checkout_cart_index");
                        }
                    }, 0);

                    break;
                
            // case "homePage":
            //         setTimeout(function() {
            //             var productIds = [];
            //             productIds.push('154100');
            //             if (productIds.length > 0) {
            //                 INC.methods.irbReq(productIds[0], 12, "catalog_product_view");
            //             }
            //         }, 0);

            //         break;
            case "productList":
                const breadcrumbsContainer = document.querySelector('.breadcrumbs__container');
                if (breadcrumbsContainer) {
                    const lastBreadcrumb = breadcrumbsContainer.lastElementChild;
                    let plpCategory = ""
                    if(lastBreadcrumb) {
                        plpCategory = lastBreadcrumb.textContent.trim()
                    }
                    if(window.location.href.includes('search?text')){
                        plpCategory = document.querySelector('.page-header__title .searched-item').innerText.trim()
                    }
                    INC.methods.irbReq_is_categ_recomendation(null, 30, "catalog_product_view", plpCategory);
                }
                Array.prototype.forEach.call(document.querySelectorAll('button[id="add-to-cart"]'), function(elBtn) {

                    elBtn.addEventListener("click", function() {

                    });
                });
                break;
        }



    }
}

INC.dataStore = {};
INC.dataStore.methods = function () {
    var incDataStore = INC.dataStore;
    
    function buildDataStoreObj(bundleResponse,configurator) {
        INC.config.dupDataObjectProducts=[]
        INC.config.uniqeProduct = []
        // var incDataStore = {};
        INC.dataStore.clientProductDealsCategory = "";
        var bundles = []
        if(INC.config.recommendation == true){
            bundles = [];
            bundles.push({
                BundleId : '12345'
            })
        }else{
            bundles = bundleResponse.Bundles;
        }
        if (bundleResponse.ProductDeals != null) {
            bundleResponse.ProductDeals.forEach(function(productDealObj) {
                if (bundles[0].Products != null){
                    bundles.push({
                        BundleId: bundles[0]["BundleId"],
                        Products: [bundles[0].Products[0], productDealObj]
                    });
                }

                INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
            });
        }


        var dataStoreObj = {};
        var bundleProductsArray = [];
        var pdpProductId = '';
        if (window.location.pathname == "/cart" || window.location.pathname == "/cart/update" || INC.config.recommendation == false) {
            var productIds_d = [];
            Array.prototype.forEach.call(document.querySelectorAll('.order-item__product .product-code-number'), function(elProductCode) {
                productIds_d.push(elProductCode.innerText.trim());
            });
        }
        var bundleproductarray={}
        if(bundleResponse.ProductsDetail != undefined || INC.config.recommendation == true){
            if(INC.config.recommendation == true){
                for (let ib = 0; ib < bundleResponse.CategoryRecommendations.length; ib++) {
                    bundleproductarray[bundleResponse.CategoryRecommendations[ib].ProductId] = bundleResponse.CategoryRecommendations[ib]
                }
            }else{
                for (let ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
                    bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
                }
            }
            
            for (var i = 0; i < bundles.length; i++) {
                if(INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1){
                    if(INC.config.recommendation == false){
                        INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                    }
                    var irbBundleObj;
                    if(INC.config.recommendation == true){
                        irbBundleObj = bundleResponse;
                    }else{
                        irbBundleObj = bundles[i];
                    }
                    var bundleObj = {};
                    if(INC.config.recommendation == false){
                        bundleObj.id = irbBundleObj["BundleId"];
                        bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                        bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                        bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                        bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                        bundleObj.productCount = irbBundleObj["ProductCount"];
                    }
                    
                    var irbProductsArray;
                    if(INC.config.recommendation == true){
                        irbProductsArray = irbBundleObj.CategoryRecommendations;
                    }else{
                        irbProductsArray = irbBundleObj["ProductIds"]
                    }

                    if(INC.config.recommendation == false){ 
                        if (irbProductsArray.length) {
                            if(irbProductsArray[0]["ProductId"] != undefined){
                                INC.config.mainProductid =irbProductsArray[0]["ProductId"];
                            }
                            if (window.location.pathname == "/cart" || window.location.pathname == "/cart/update" || INC.config.recommendation) {
                                if (productIds_d.indexOf(irbProductsArray[0]) >= 0) {
                                    pdpProductId = irbProductsArray[0];
                                    if (INC.clientConfig.statusLoggedIn == false) {
                                        bundleProductsArray.push(irbProductsArray[1]);
                                    }
                                } else if (productIds_d.indexOf(irbProductsArray[1]) >= 0) {
                                    pdpProductId = irbProductsArray[1];
                                    if (INC.clientConfig.statusLoggedIn == false) {
                                        bundleProductsArray.push(irbProductsArray[0]);
                                    }
                                }
                            } else {
                                pdpProductId = irbProductsArray[0];
                                bundleProductsArray.push(irbProductsArray[1]);
                            }
                        }
                    }
                    var product;
                    for (var j = 0; j < irbProductsArray.length; j++) {
                        if(INC.config.recommendation == true){
                            product = irbProductsArray[j]
                            bundleProductsArray.push(irbProductsArray[j].ProductId);
                            INC.config.recommendationProduct.push(product.ProductId)
                        }else{
                            product = bundleproductarray[irbProductsArray[j]]
                        }
                        var exclnull = false;
                        if(product["ExclusiveVATPrice"] == null){
                            exclnull = true
                            product["ExclusiveVATPrice"] = product["Price"]
                            if(product["ExclusiveVATSpecialPrice"] == null){
                                product["ExclusiveVATSpecialPrice"] = product["SpecialPrice"]
                            }
                        }
                        var mainproductid=false;
                        var battery_flag=true;
                        if(battery_flag){
                            if (INC.config.uniqeProduct.indexOf(product["ProductId"]) == -1  && INC.config.childlevelprod.indexOf(product["ProductId"]) == -1) {
                                if (isBase64(product["Description"]) == true) {
                                    product["Description"] = Base64.decode(product["Description"])
                                }
                                
                                var pAttributes = product["Attributes"] || "";

                                if(configurator == "configurator"){
                                    if(irbProductsArray[0]["ProductId"] != product["ProductId"]){
                                        if(INC.config.category_sequance.indexOf(product["CategoryName"]) == -1){
                                            INC.config.category_sequance.push(product["CategoryName"])
                                            INC.config.category_seqId.push({
                                                id:product["CategorySequenceId"],
                                                category:product["CategoryName"]
                                            })
                                        }
                                    }
                                }
                                
                                if (pAttributes != "" && pAttributes != null) {
                                    if (pAttributes.length) {
                                        for (var pattv_ in pAttributes) {
                                            if (Object.prototype.hasOwnProperty.call(pAttributes, pattv_)) {
                                                var pAttributesObj_1 = pAttributes[pattv_];
                                                if(pAttributesObj_1.attributeCode == "Pack Quantity"){
                                                    var pAttributesValues_1 = pAttributesObj_1["attributeValues"];
                                                    var miniprc=[]
                                                    for (var ptr_ in pAttributesValues_1) {
                                                        if (Object.prototype.hasOwnProperty.call(pAttributesValues_1, ptr_)) {
                                                            let childProduct = pAttributesValues_1[ptr_];
                                                            if(pAttributesObj_1["attributeValues"][0].optionText == "1"){
                                                                if(miniprc.length == 0){
                                                                    miniprc.push(childProduct["childProductId"])
                                                                }
                                                                if(miniprc.indexOf(childProduct["childProductId"]) == -1){
                                                                    if(childProduct.optionText === "1"){
                                                                        childProduct.optionText = "1  "
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if(pAttributes != "" && pAttributes != null){
                                    for (var h = 0; h < pAttributes.length; h++) {
                                        pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                                    }
                                }
                                var pAttObj = {};
                                for(var t=0;t<pAttributes.length;t++){
                                    pAttributes[t].attributeId = t
                                    var attr_values = pAttributes[t].attributeValues;
                                    for(var v=0;v<attr_values.length;v++){
                                        attr_values[v].optionId = t;
                                    }
                                }
                                
                                if (pAttributes.length) {
                                    // INC.config.configcount = 0
                                    for (var k = 0; k < pAttributes.length; k++) {
                                        var pAttributesObj = pAttributes[k];
                                        
                                        var pAttributesValues = pAttributesObj["attributeValues"];
                                        pAttributesObj["attributeCode"] = pAttributesObj["frontEndLabel"];
                                        //frontEndLabel
                                        for (var l = 0; l < pAttributesValues.length; l++) {
                                            let childProduct = pAttributesValues[l];
                                            if(INC.config.pageType == "pdp" && INC.config.Product_id == childProduct["childProductId"] && INC.config.Product_id == product["ProductId"] && INC.config.recommendation == false){
                                                mainproductid = true
                                            }
                                            if (childProduct["childProductId"] == null) {
                                                childProduct["childProductId"] = product["ProductId"];
                                                childProduct["childProductSku"] = product["ProductSku"];
                                                childProduct["childProductName"] = product["ProductName"];
                                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                                childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                                childProduct["childProductUrl"] = product["ProductUrl"];
                                                childProduct["childProductPrice"] = product["Price"];
                                                childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                                childProduct["childProductDescription"] = product["Description"];
                                                childProduct["childInternalProductId"] = product["ProductId"]
                                                childProduct["exclusiveVATPrice"] = product["ExclusiveVATPrice"]
                                                childProduct["exclusiveVATSpecialPrice"] = product["ExclusiveVATSpecialPrice"]
                                            }
                                            if(childProduct["exclusiveVATPrice"] == null){
                                                if(exclnull == true && childProduct["childProductPrice"] != null){
                                                    childProduct["exclusiveVATPrice"] = childProduct["childProductPrice"]
                                                    childProduct["exclusiveVATSpecialPrice"] = childProduct["childProductSpecialPrice"]
                                                }else{
                                                    childProduct["exclusiveVATPrice"] = product["ExclusiveVATPrice"]
                                                    childProduct["exclusiveVATSpecialPrice"] = product["ExclusiveVATSpecialPrice"]
                                                }
                                                
                                            }
                                            if(childProduct["childProductImageUrl"] == "" || childProduct["childProductImageUrl"] == null){
                                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                            }
                                            if(childProduct["childProductPrice"] == null){
                                                childProduct["childProductPrice"] = product["Price"];
                                            }
                                            if (INC.config.uniqeProduct.indexOf(childProduct["childProductId"]) == -1) {
                                                childProduct["MainprodVariant"] = product.Attributes[0].attributeValues[0].optionText
                                                childProduct["childCategoryId"] = product["CategoryId"];
                                                childProduct["childCategoryName"] = product["CategoryName"];
                                                childProduct["childProductDescription"] = product["Description"];
                                                childProduct["ShortDescription"] = product["ShortDescription"];
                                                childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                                childProduct["childProductPriceMain"] = product["Price"];
                                                childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                                childProduct["childProductNameMain"] = product["ProductName"];
                                                childProduct["childProductUrlMain"] = product["ProductUrl"];
                                                childProduct["exclusiveVATPriceMain"] = product["ExclusiveVATPrice"];
                                                childProduct["exclusiveVATSpecialPriceMain"] = product["ExclusiveVATSpecialPrice"];
                                                childProduct["mainSKU"] = product["ProductSku"];
                                                childProduct["ProductType"] = product["ProductType"];


                                                if (childProduct["childProductImageUrl"] == "") {
                                                    childProduct["childProductImageUrl"] = product["ImageURL"];
                                                }
                                                if(childProduct["childProductPrice"] == null){
                                                    childProduct["childProductPrice"] = product["Price"];
                                                }
                                                childProduct["childProductSku"] = product["ProductId"];
                                                childProduct["childCategoryId"] = product["CategoryId"];
                                                childProduct["Field3"] = product["Field3"];
                                                childProduct["Field5"] = product["Field5"];
                                                if (childProduct["childProductField6"] == null) {
                                                    childProduct["Field6"] = product["Field6"];
                                                } else {
                                                    childProduct["Field6"] = childProduct["childProductField6"]
                                                }
                                                childProduct["childRating"] = product["Rating"];
                                                var productObj = new INC.classes.ProductAttObj(childProduct);
                                                
                                                productObj["bundledProductId"] = pdpProductId;
                                                productObj.mainId = product["ProductId"];
                                                productObj.bundleId = bundleObj.id;
                                                productObj.sku = productObj.id;
                                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                                
                                                productObj.Field1 = product["Field1"]
                                                productObj.GenericField = product["Field3"]
                                                if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                                    dataStoreObj[product['ProductId']] = {};
                                                }
                                                if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                                    dataStoreObj[product['ProductId']][productObj['id']] = {};
                                                }
                                                pAttObj = dataStoreObj[product['ProductId']][productObj['id']];

                                                
                                                for (let pAtt in productObj) {
                                                    if (pAtt == "option") {
                                                        if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                                            pAttObj['option'] = {};
                                                        }
                                                        
                                                        Object.keys(productObj[pAtt]).forEach(function (key) {
                                                            pAttObj[pAtt][key] = productObj[pAtt][key];
                                                        });
                                                        // }
                                                    } else {
                                                        pAttObj[pAtt] = productObj[pAtt];
                                                    }
                                                }
                                            }
                                        }
                                        
                                    }
                                    if(mainproductid == false && INC.config.Product_id == product["ProductId"] && INC.config.pageType == "pdp" && INC.config.recommendation == false){
                                        // console.log("returned bundle")
                                        INC.config.nobundle = true
                                        // INC.dataStore.dataStoreObj={}
                                        return;
                                    }
                                }
                                
                                if (pAttributes.length == 0) {
                                    mainproductid = true
                                    let productObj = new INC.classes.ProductObj(product);
                                    productObj["bundleId"] = irbBundleObj["BundleId"];
                                    if(INC.config.recommendation == false){
                                        productObj["bundledProductId"] = pdpProductId;
                                    }
                                    productObj.sku = productObj.id;
                                    
                                    productObj.Field1 = product["Field1"]
                                    productObj.GenericField = product["Field3"]
                                    if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj['mainId'])) {
                                        dataStoreObj[productObj['mainId']] = {};
                                    }

                                    dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                                        dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                    }else {
                                        dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(incDataStore.dataStoreObj != undefined){
            for (var mainProductId in dataStoreObj) {
                for (var childProductId in dataStoreObj[mainProductId]) {
                    dataStoreObj[mainProductId][childProductId];
                    incDataStore.dataStoreObj[mainProductId] = Object.assign({},  dataStoreObj[mainProductId]);
                }
            }
                    
        }else{
            incDataStore.dataStoreObj = dataStoreObj;
        }
        incDataStore.bundleProductsArray = bundleProductsArray;
        incDataStore.pdpProductId = pdpProductId;
        incDataStore.bundleCartProducts = {};
        incDataStore.tickboxProducts = {};
    }

    function getFirstProductObjByMainId(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        try {
            if(productListObj != undefined){
                childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
            }
        } catch (e) {
            // console.log("")
        }

        return childProductObj;
    }

    function getProductById(findObj,client_add_btn) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
            for (var mainProductId in productListObj) {
                for (var childProductId in productListObj[mainProductId]) {
                    if (client_add_btn == "client_add_btn") {
                        var cpid = findObj["id"]; //+ INC.config.configcount
                        if (productListObj[mainProductId][childProductId]["id"] == cpid) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    } else {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
        }

        if (Object.keys(childProductObj).length == 0) {
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (let mainProductId in productListObj) {
                    for (let childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
        }

        if (Object.keys(childProductObj).length == 0) {
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (let mainProductId in productListObj) {
                    for (let childProductId in productListObj[mainProductId]) {
                        childProductObj = productListObj[mainProductId][childProductId];
                        break;
                    }
                }
            }
        }

        return childProductObj;
    }

    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
            for (let mainProductId in productListObj) {
                for (let childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        return childProductObj;
    }

    function getUniqueCatergories() {
        var catergoriesArray = [];
        var productListObj = INC.dataStore.dataStoreObj;
        var bundleProductsArray = INC.dataStore.bundleProductsArray;
        bundleProductsArray.forEach(function (productId) {
            for (var childProductId in productListObj[productId]) {
                var indexOfCategoryId;
                if(productListObj[productId][childProductId].bundleId != undefined){
                    if(tickboxexcludeprod.indexOf(productListObj[productId][childProductId].id) == -1){
                        if(INC.config.loadconfigurator == true && INC.config.configuratorabtestprod.indexOf(productListObj[productId][childProductId].productId)){
                            indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                            if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                                catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                            }
                        } else{
                            indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                            if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                                catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                            }
                        }
                    }
                }
            }
        });
        return catergoriesArray;
    }
    function extractNumber(text) {
        const match = text.match(/\d+/); // Extracts the first sequence of digits
        return match ? parseFloat(match[0]) : NaN; // Convert to number, or NaN if no digits are found
    }
    function getProductColorsObj(findObj,type_of) {
        var productColorObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var textOpt = []
        if (Object.prototype.hasOwnProperty.call(findObj, 'mainId')) {
            for (let mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (let childProductId in productListObj[mainProductId]) {
                        
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                if(textOpt.indexOf(productListObj[mainProductId][childProductId]["option"]["0"]["text"]) >= 0){
                                    textOpt.push(productListObj[mainProductId][childProductId]["option"]["0"]["text"])
                                    productListObj[mainProductId][childProductId]["option"]["0"]["text"] = productListObj[mainProductId][childProductId]["option"]["0"]["text"] + " "
                                }else{
                                    textOpt.push(productListObj[mainProductId][childProductId]["option"]["0"]["text"])
                                }
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]] = {};
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["colorCode"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["imgSrc"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["child_img"] = productListObj[mainProductId][childProductId]["option"]["0"]["child_img"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["cpid"] = productListObj[mainProductId][
                                    childProductId
                                ]["option"]["0"]["cpid"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["cpid"]]["text"] = productListObj[mainProductId][childProductId]["option"]["0"]["text"];
                        }
                    }
                }
            }
        }
        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var colorObj = {}
            colorObj["text"] = productColorArrayObj[colorText]["text"];
            // colorObj["imgSrc"] = productColorArrayObj[colorText];
            colorObj["cpid"] = colorText;
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
            colorObj["code"] = productColorArrayObj[colorText]["code"];
            colorObj["child_img"] = productColorArrayObj[colorText]["child_img"];
            productColorObjArray.push(colorObj);
        });
        productColorObjArray = productColorObjArray.sort((a, b) => extractNumber(a.text) - extractNumber(b.text));
        if(type_of == "size"){
            productColorObj["sizeArray"] = productColorObjArray;
        }else if(type_of == "zero"){
            productColorObj["att0Array"] = productColorObjArray;
        }else if(type_of == "third"){
            productColorObj["att3Array"] = productColorObjArray;
        }else{
            productColorObj["colorArray"] = productColorObjArray;
        }
        
        return productColorObj;

    }

    function getProductSizesObj(findObj,type_of) {
        var productSizeObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];
        var attr_code="";
        
        if (Object.prototype.hasOwnProperty.call(findObj, 'mainId')) {
            for (let mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (let childProductId in productListObj[mainProductId]) {
                        if(type_of != undefined){
                            var attr_block=null;
                            if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                            }else{
                                attr_block = type_of.parentNode.parentNode.parentNode
                            }
                            var opt_text=attr_block.getAttribute('data-color');
                            var opt_size_text=attr_block.getAttribute('data-size');
                            var opt_zero_text=attr_block.getAttribute('data-zero');
                            // var opt_color_text=attr_block.getAttribute('data-color');
                            if(opt_zero_text == undefined){
                                opt_zero_text=""
                            }
                            if(opt_size_text == undefined){
                                opt_size_text=""
                            }
                            if(opt_text == undefined){
                                opt_text=""
                            }
                            if(opt_color_text == undefined){
                                var opt_color_text=""
                            }
                            

                            if(opt_text != "" && opt_zero_text != ""){
                                if(productListObj[mainProductId][childProductId].option[0].text == opt_text && productListObj[mainProductId][childProductId].option[1].text == opt_zero_text){
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    }
                                }
                            }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            }
                        }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                        }
                    }
                    
                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function (sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            sizeObj["code"] = attr_code;
            productSizesObjArray.push(sizeObj);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim() });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"]) });

        return productSizeObj;
    }
    function getProductopt0Obj(findObj,type_of) {
        var product0Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var product0ArrayObj = {}
        var product0ObjArray = [];

        if (Object.prototype.hasOwnProperty.call(findObj, 'mainId')) {
            for (let mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (let childProductId in productListObj[mainProductId]) {
                    
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                            if(type_of != undefined){
                                var attr_block=null;
                                if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                }else{
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text=attr_block.getAttribute('data-color');
                                var opt_size_text=attr_block.getAttribute('data-size');
                                var opt_zero_text=attr_block.getAttribute('data-zero');
                                // var opt_color_text=attr_block.getAttribute('data-color');
                                if(opt_zero_text == undefined){
                                    opt_zero_text=""
                                }
                                if(opt_size_text == undefined){
                                    opt_size_text=""
                                }
                                if(opt_text == undefined){
                                    opt_text=""
                                }
                                if(opt_color_text == undefined){
                                    var opt_color_text=""
                                }
                                if(opt_text != ""){
                                    if(productListObj[mainProductId][childProductId].option[0].text == opt_text){
                                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                                
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][
                                                    childProductId
                                                ]["option"]["1"]["cpid"];
                                        }
                                    }
                                }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"] != undefined &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["1"]["cpid"];
                                }
                            }else{
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][
                                    childProductId
                                ]["option"]["1"]["cpid"];
                            }
                        }
                    }
                }
            }
        }

        Object.keys(product0ArrayObj).forEach(function (colorText) {
            var attr0Obj = {}
            attr0Obj["text"] = colorText;
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = product0ObjArray;

        return product0Obj;
    }
    function getProductByAtt(findObj) {
        
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var mainProductListObj = productListObj[findObj.mainId];
        for (let childProductId in mainProductListObj) {
            
            if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.zeroText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            }
        }

        return childProductObj;
    }

    return {
        buildDataStoreObj: buildDataStoreObj,
        getFirstProductObjByMainId: getFirstProductObjByMainId,
        getProductById: getProductById,
        getProductBySKU: getProductBySKU,
        getUniqueCatergories: getUniqueCatergories,
        getProductColorsObj: getProductColorsObj,
        getProductSizesObj: getProductSizesObj,
        getProductopt0Obj: getProductopt0Obj,
        getProductByAtt: getProductByAtt
    }
}

INC.classes = {};
INC.classes.ProductObj = function (product) {
    this.bundleId = "";
    //+ INC.config.configcount
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.idAddtocart = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    // this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®') : product["Field4"]) : "";
    this.name = (product != null) ?  ((INC.config.language === "en") ? product["ProductName"].replace(/�/g, '').replace(/m2_/g, 'm²').replace(/m2/g, 'm²').replace(/deg__|2__/g, match => match === 'deg__' ? '°' : '®') : product["Field4"]) : "";
    this.url = product["ProductUrl"]
    this.idAdd = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    
    if(product["SpecialPrice"] != null){
        if(product["SpecialPrice"] >  product["Price"]){
            this.regularPrice = product["SpecialPrice"]
            this.activePrice = product["Price"]
        }else{
            this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
            this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
        }
    }else{
        this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
        this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    }
    this.activePriceMsg = "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    
    this.size = ((product != null) && (product != undefined)) ? ((product["Size"] != null) ? product["Size"] : "") : "";
    if (this.ProductLevelDiscountMessage != null) {
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    } else {
        if(product["PromotionalMessage"] != undefined){
            if(product["PromotionalMessage"].split("|")[0] == ''){
                this.promotionalMessage = product["PromotionalMessage"].split("|")[1]
            }else if(product["PromotionalMessage"].split("|")[1] != undefined){
                if(product["PromotionalMessage"].split("|")[0] == product["PromotionalMessage"].split("|")[1]){
                    this.promotionalMessage = product["PromotionalMessage"].split("|")[0]
                }else{
                    this.promotionalMessage = product["PromotionalMessage"]
                }
            }else{
                this.promotionalMessage = product["PromotionalMessage"]
            }
        }else{
            this.promotionalMessage = product["PromotionalMessage"]
        }
    }
    
    this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    if(this.otherImageList != null){
        if(this.otherImageList.indexOf(product["ImageURL"]) == -1){
            this.otherImageList.unshift(product["ImageURL"])
        }
    }
    this.option = {};
    
    this.pointcollect = "";
    this.mainProdVariant = product["Color"]
    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"] : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Rating"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["Rating"] : "";
    this.worthPrice = "";
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
    this.Field6 = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    //this.Field1 = ((product != null) && (product != undefined)) ? product["Field1"] : "";
    this.regularPriceMain = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    // this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®') : product["ProductName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®')) : "";
    this.nameMain = (product != null) ?  ((INC.config.language === "en") ? product["ProductName"].replace(/�/g, '').replace(/m2_/g, 'm²').replace(/m2/g, 'm²').replace(/deg__|2__/g, match => match === 'deg__' ? '°' : '®') : product["Field4"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.urlMain = ((product != null) && (product != undefined)) ? product["ProductUrl"] : "";
    if(product["ExclusiveVATPrice"] != null){
        if(parseInt(product["ExclusiveVATPrice"])  == 0 && product["ExclusiveVATSpecialPrice"] != null){
            product["ExclusiveVATPrice"] = product["ExclusiveVATSpecialPrice"]
        }
    }
    if(product["ExclusiveVATSpecialPrice"] != null){
        if(product["ExclusiveVATSpecialPrice"] != null && product["ExclusiveVATPrice"] == null){
            this.excactivePrice = product["ExclusiveVATSpecialPrice"]
            this.excregularPrice = product["ExclusiveVATSpecialPrice"]
        }else if(parseFloat(product["ExclusiveVATSpecialPrice"]) > parseFloat(product["ExclusiveVATPrice"])){
            this.excregularPrice = product["ExclusiveVATSpecialPrice"]
            this.excactivePrice = product["ExclusiveVATPrice"]
        }else{
            this.excregularPrice = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
            this.excactivePrice = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
        }
    }else{
        this.excregularPrice = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
        this.excactivePrice = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
    }

    if(product["ExclusiveVATSpecialPrice"] != null){
        if(product["ExclusiveVATSpecialPrice"] != null && product["ExclusiveVATPrice"] == null){
            this.excactivePricemain = product["ExclusiveVATSpecialPrice"]
            this.excregularPricemain = product["ExclusiveVATSpecialPrice"]
        }else if(parseFloat(product["ExclusiveVATSpecialPrice"]) >  parseFloat(product["ExclusiveVATPrice"])){
            this.excregularPricemain = product["ExclusiveVATSpecialPrice"]
            this.excactivePricemain = product["ExclusiveVATPrice"]
        }else{
            this.excregularPricemain = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
            this.excactivePricemain = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
        }
    }else{
        this.excregularPricemain = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
        this.excactivePricemain = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
    }
    INC.config.dataObjcount++
}
INC.classes.ProductAttObj = function (product) {
    this.bundleId = "";
    //+ INC.config.configcount
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"]  : "";
    this.idAdd = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.idAddtocart = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
    this.mainProdVariant = ((product != null) && (product != undefined)) ? product["MainprodVariant"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    // this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('r__','r__®') : product["Field4"]) : "";
    this.name = (product != null) ?  ((INC.config.language === "en") ? product["childProductName"].replace(/�/g, '').replace(/m2_/g, 'm²').replace(/m2/g, 'm²').replace(/deg__|2__/g, match => match === 'deg__' ? '°' : '®') : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"]: "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    
    this.activePriceMsg =  "";
    if(product["childProductSpecialPrice"] != null){
        if(product["childProductSpecialPrice"] >  product["childProductPrice"]){
            this.regularPrice = product["childProductSpecialPrice"]
            this.activePrice = product["childProductPrice"]
        }else{
            this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
            this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";
        }
    }else{
        this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
        this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";
    }
    if(product["productLevelDiscountMessage"] != null){
        this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"]
    }else{
        this.ProductLevelDiscountMessage = product["promotionalMessage"]
    }
    this.pointcollect = "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
    
    this.size = "";
    this.option = {};
    if (((product != null) && (product != undefined))) {
        this.option[product["optionId"]] = {};
        this.option[product["optionId"]].text = product["optionText"];
        this.option[product["optionId"]].ImgURLC = product["childProductImageUrl"];
        this.option[product["optionId"]].titleText = (product["childProductName"] != null) ? product["childProductName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®') : "";
        this.option[product["optionId"]].cpid = product["childProductId"] != null ? product["childProductId"] : "";
        this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    // this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®') : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
    this.shortDescription =  ((product != null) && (product != undefined)) ? product["ShortDescription"] : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["childRating"] : "";
    this.Field6 = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["childRating"] : "";
    this.worthPrice = "";
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
    //this.Field1 = ((product != null) && (product != undefined)) ? product["childProductField1"] : "";

    this.regularPriceMain = product["childProductPriceMain"];
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPriceMain"] != null) ? product["childProductSpecialPriceMain"] : product["childProductPriceMain"]) : "";
    // this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductNameMain"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®') : product["childProductNameMain"].replace('�','').replace('m2_','m²').replace('m2','m²').replace('deg__','°').replace('2__','®')) : "";
    this.nameMain = (product != null) ?  ((INC.config.language === "en") ? product["childProductNameMain"].replace(/�/g, '').replace(/m2_/g, 'm²').replace(/m2/g, 'm²').replace(/deg__|2__/g, match => match === 'deg__' ? '°' : '®') : product["Field4"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductImageUrlMain"] : product["childProductImageUrlMain"]) : "";
    this.urlMain = ((product != null) && (product != undefined)) ? product["childProductUrlMain"] : "";

    if(product["exclusiveVATPrice"] != null){
        if(parseInt(product["exclusiveVATPrice"])  == 0 && product["exclusiveVATSpecialPrice"] != null){
            product["exclusiveVATPrice"] = product["exclusiveVATSpecialPrice"]
        }
    }

    if(product["exclusiveVATSpecialPrice"] != null){
        if(product["exclusiveVATSpecialPrice"] != null && product["exclusiveVATPrice"] == null){
            this.excactivePrice = product["exclusiveVATSpecialPrice"]
            this.excregularPrice = product["exclusiveVATSpecialPrice"]
        }else if(parseFloat(product["exclusiveVATSpecialPrice"]) > parseFloat(product["exclusiveVATPrice"])){
            this.excregularPrice = product["exclusiveVATSpecialPrice"]
            this.excactivePrice = product["exclusiveVATPrice"]
        }else{
            this.excregularPrice = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
            this.excactivePrice = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
        }
    }else{
        this.excregularPrice = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
        this.excactivePrice = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
    }
    if(product["exclusiveVATSpecialPrice"] != null){
        if(product["exclusiveVATSpecialPrice"] != null && product["exclusiveVATPrice"] == null){
            this.excactivePricemain = product["exclusiveVATSpecialPrice"]
            this.excregularPricemain = product["exclusiveVATSpecialPrice"]
        }else if(parseFloat(product["exclusiveVATSpecialPrice"]) > parseFloat(product["exclusiveVATPrice"])){
            this.excregularPricemain = product["exclusiveVATSpecialPrice"]
            this.excactivePricemain = product["exclusiveVATPrice"]
        }else{
            this.excregularPricemain = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
            this.excactivePricemain = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
        }
    }else{
        this.excregularPricemain = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
        this.excactivePricemain = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
    }
    INC.config.dataObjcount++
    if(INC.config.childlevelprod.indexOf(product["childProductId"]) == -1){
        INC.config.childlevelprod.push(product["childProductId"])
    }
}
INC.classes.FindObj = function (findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC.classes.NWConfig = function (nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

INC.uiConfig = {
    pdp: {
        className: {
            pdpModalBlock: prefix + "pdp" + postfix,
            pdpModalTitleBlock: prefix + "pdp_title" + postfix,
            pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
            pdpModalTitleText: prefix + "pdp_title_text",
            pdpModalTitleImgBlock: prefix + "pdp_title_img" + postfix,
            pdpModalTitleImg: prefix + "pdp_title_img",

            pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
            pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
            pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
            pdpModalBundleProductBlock: prefix + "pdp_bundle_product" + postfix,
            pdpModalBundleCartBlock: prefix + "pdp_bundle_cart" + postfix,
            pdpModalBundleCartOverlay: prefix + "pdp_bundle_cart_overlay" + postfix,

            pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
            pdpAddIconImg: prefix + "pdp_icon-add_img",
            pdpBundleProductHeaderBlock: prefix + "pdp_bundle_product_header" + postfix,
            pdpBundleProductHeaderText: prefix + "pdp_bundle_product_header_text",
            pdpBundleProductLeftBtnBlock: prefix + "pdp_bundle_product_left-btn" + postfix,
            pdpBundleProductLeftBtnImgBlock: prefix + "pdp_bundle_product_left-btn_img" + postfix,
            pdpBundleProductNavBlock: prefix + "pdp_bundle_product_nav" + postfix,
            pdpBundleProductLeftBtnImg: prefix + "pdp_bundle_product_left-btn_img",
            pdpBundleProductRightBtnBlock: prefix + "pdp_bundle_product_right-btn" + postfix,
            pdpBundleProductRightBtnImgBlock: prefix + "pdp_bundle_product_right-btn_img" + postfix,
            pdpBundleProductRightBtnImg: prefix + "pdp_bundle_product_right-btn_img",
            pdpBundleCartSummaryAddBtnImgText: prefix + "pdp_bundle_cart_summary_add_btn_img_text",
            pdpBundleProductListBlock: prefix + "pdp_bundle_product_list" + postfix,
            pdpBundleProductListMainBlock: prefix + "pdp_bundle_product_list_main" + postfix,
            pdpBundleProductListMainLeftBlock: prefix + "pdp_bundle_product_list_main_left" + postfix,
            pdpBundleProductListMainLeftBtnBlock: prefix + "pdp_bundle_product_list_main_left_btn" + postfix,
            pdpBundleProductListMainLeftBtnImgBlock: prefix + "pdp_bundle_product_list_main_left_btn_img" + postfix,
            pdpBundleProductListMainLeftBtnImg: prefix + "pdp_bundle_product_list_main_left_btn_img",
            pdpBundleProductListMainLeftBtnTextBlock: prefix + "pdp_bundle_product_list_main_left_btn_text" + postfix,
            pdpBundleProductListMainLeftBtnText: prefix + "pdp_bundle_product_list_main_left_btn_text",
            pdpBundleProductListMainListBlock: prefix + "pdp_bundle_product_list_main_list" + postfix,
            pdpBundleProductListMainRightBlock: prefix + "pdp_bundle_product_list_main_right" + postfix,
            pdpBundleProductListMainRightBtnBlock: prefix + "pdp_bundle_product_list_main_right_btn" + postfix,
            pdpBundleProductListMainRightBtnImgBlock: prefix + "pdp_bundle_product_list_main_right_btn_img" + postfix,
            pdpBundleProductListMainRightBtnImg: prefix + "pdp_bundle_product_list_main_right_btn_img",
            pdpBundleProductListMainRightBtnTextBlock: prefix + "pdp_bundle_product_list_main_right_btn_text" + postfix,
            pdpBundleProductListMainRightBtnText: prefix + "pdp_bundle_product_list_main_right_btn_text",
            pdpBundleProductListLeftBlock: prefix + "pdp_bundle_product_list_left" + postfix,
            pdpBundleProductListLeftBtnBlock: prefix + "pdp_bundle_product_list_left_btn" + postfix,
            pdpBundleProductListLeftBtnImgBlock: prefix + "pdp_bundle_product_list_left_btn_img" + postfix,
            pdpBundleProductListLeftBtnImg: prefix + "pdp_bundle_product_list_left_btn_img",
            pdpBundleProductListRightBlock: prefix + "pdp_bundle_product_list_right" + postfix,
            pdpBundleProductListRightBtnBlock: prefix + "pdp_bundle_product_list_right_btn" + postfix,
            pdpBundleProductListRightBtnImgBlock: prefix + "pdp_bundle_product_list_right_btn_img" + postfix,
            pdpBundleProductListRightBtnImg: prefix + "pdp_bundle_product_list_right_btn_img",
            pdpBundleProductListItemsBlockShowMoreLess: prefix + "pdp_bundle_product_list_items_show_more_less" + postfix,
            pdpBundleProductListItemsBlockShowMoreLessText:prefix + "pdp_bundle_product_list_items_show_more_less_text",
            pdpBundleProductListItemsWrapperBlock: prefix + "pdp_bundle_product_list_wrapper_items" + postfix,
            pdpBundleProductListItemsWrapperHeaderBlock: prefix + "pdp_bundle_product_list_wrapper_header" + postfix,
            pdpBundleProductListItemsWrapperHeaderText: prefix + "pdp_bundle_product_list_wrapper_header_text" + postfix,
            pdpBundleProductListItemsWrapperHeaderclose: prefix + "pdp_bundle_product_list_wrapper_header_close" + postfix,
            pdpBundleProductListItemsBlock: prefix + "pdp_bundle_product_list_items" + postfix,
            pdpBundleProductListItemBlock: prefix + "pdp_bundle_product_list_item" + postfix,
            pdpBundleProductListItemImgBlock: prefix + "pdp_bundle_product_list_item_img" + postfix,
            pdpBundleProductListItemImg: prefix + "pdp_bundle_product_list_item_img",
            pdpBundleProductListItemTitleBlock: prefix + "pdp_bundle_product_list_item_title" + postfix,
            pdpBundleProductListItemTitleTextBlock: prefix + "pdp_bundle_product_list_item_title_text" + postfix,
            pdpBundleProductListItemTitleText: prefix + "pdp_bundle_product_list_item_title_text",
            pdpBundleProductListItemPriceBlock: prefix + "pdp_bundle_product_list_item_price" + postfix,
            pdpBundleProductListItemPriceActiveBlock: prefix + "pdp_bundle_product_list_item_price_active" + postfix,
            pdpBundleProductListItemPriceActiveTextBlock: prefix + "pdp_bundle_product_list_item_price_active_text" + postfix,
            pdpBundleProductListItemPriceActiveText: prefix + "pdp_bundle_product_list_item_price_active_text",
            pdpBundleProductListItemAddedBlock: prefix + "pdp_bundle_product_list_item_added" + postfix,
            pdpBundleProductListItemAddedBtnBlock: prefix + "pdp_bundle_product_list_item_added_btn" + postfix,
            pdpBundleProductListItemAddedBtnImgBlock: prefix + "pdp_bundle_product_list_item_added_btn_img" + postfix,
            pdpBundleProductListItemAddedBtnImg: prefix + "pdp_bundle_product_list_item_added_btn_img",
            pdpBundleProductListItemAddedBtnTextBlock: prefix + "pdp_bundle_product_list_item_added_btn_text" + postfix,
            pdpBundleProductListItemAddedBtnText: prefix + "pdp_bundle_product_list_item_added_btn_text",

            pdpBundleCartTitleBlock: prefix + "pdp_bundle_cart_title" + postfix,
            pdpBundleCartTitleTextBlock: prefix + "pdp_bundle_cart_title_text" + postfix,
            pdpBundleCartTitleText: prefix + "pdp_bundle_cart_title_text",
            pdpBundleCartTitleImgBlock: prefix + "pdp_bundle_cart_title_img" + postfix,
            pdpBundleCartTitleImg: prefix + "pdp_bundle_cart_title_img",
            pdpBundleCartPriceBlock: prefix + "pdp_bundle-cart_price" + postfix,
            pdpBundleCartPriceMainBlock: prefix + "pdp_bundle-cart_price_main",
            pdpBundleCartPriceMainTitleBlock: prefix + "pdp_bundle-cart_price_main_title" + postfix,
            pdpBundleCartPriceMainTitleTextBlock: prefix + "pdp_bundle-cart_price_main_title_text" + postfix,
            pdpBundleCartPriceMainTitleText: prefix + "pdp_bundle-cart_price_main_title_text",
            pdpBundleCartPriceMainFigureBlock: prefix + "pdp_bundle-cart_price_main_figure" + postfix,
            pdpBundleCartPriceMainFigureTextBlock: prefix + "pdp_bundle-cart_price_main_figure_text" + postfix,
            pdpBundleCartPriceMainFigureText: prefix + "pdp_bundle-cart_price_main_figure_text",
            pdpBundleCartPriceAddonBlock: prefix + "pdp_bundle-cart_price_addon" + postfix,
            pdpBundleCartPriceAddonTitleBlock: prefix + "pdp_bundle-cart_price_addon_title" + postfix,
            pdpBundleCartPriceAddonTitleTextBlock: prefix + "pdp_bundle-cart_price_addon_title_text" + postfix,
            pdpBundleCartPriceAddonTitleText: prefix + "pdp_bundle-cart_price_addon_title_text",
            pdpBundleCartPriceAddonFigureBlock: prefix + "pdp_bundle-cart_price_addon_figure" + postfix,
            pdpBundleCartPriceAddonFigureTextBlock: prefix + "pdp_bundle-cart_price_addon_figure_text" + postfix,
            pdpBundleCartPriceAddonFigureText: prefix + "pdp_bundle-cart_price_addon_figure_text",
            pdpBundleCartAddedBlock: prefix + "pdp_bundle_cart_added" + postfix,
            pdpBundleCartAddedProductBlock: prefix + "pdp_bundle_cart_added_product" + postfix,
            pdpBundleCartAddedProductImgBlock: prefix + "pdp_bundle_cart_added_product_img" + postfix,
            pdpBundleCartAddedProductImg: prefix + "pdp_bundle_cart_added_product_img",
            pdpBundleCartAddedProductTitleBlock: prefix + "pdp_bundle_cart_added_product_title" + postfix,
            pdpBundleCartAddedProductTitleTextBlock: prefix + "pdp_bundle_cart_added_product_title_text" + postfix,
            pdpBundleCartAddedProductTitleText: prefix + "pdp_bundle_cart_added_product_title_text",
            pdpBundleCartAddedProductPriceBlock: prefix + "pdp_bundle_cart_added_product_price" + postfix,
            pdpBundleCartAddedProductPriceTextBlock: prefix + "pdp_bundle_cart_added_product_price_text" + postfix,
            pdpBundleCartAddedProductPriceText: prefix + "pdp_bundle_cart_added_product_price_text",
            pdpBundleCartAddedProductPriceTextExc: prefix + "pdp_bundle_cart_added_product_price_text_exc",
            pdpBundleCartAddedProductAttBlock: prefix + "pdp_bundle_cart_added_product_att" + postfix,
            pdpBundleCartAddedProductAttColorBlock: prefix + "pdp_bundle_cart_added_product_att_color" + postfix,
            pdpBundleCartAddedProductAttColorTextBlock: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
            pdpBundleCartAddedProductAttColorText: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
            pdpBundleCartAddedProductAttSizeBlock: prefix + "pdp_bundle_cart_added_product_att_size" + postfix,
            pdpBundleCartAddedProductAttSizeTextBlock: prefix + "pdp_bundle_cart_added_product_att_size_text" + postfix,
            pdpBundleCartAddedProductAttSizeText: prefix + "pdp_bundle_cart_added_product_att_size_text",
            pdpBundleCartAddedProductQtyBlock: prefix + "pdp_bundle_cart_added_product_qty" + postfix,
            pdpBundleCartAddedProductQtyTextBlock: prefix + "pdp_bundle_cart_added_product_qty_text" + postfix,
            pdpBundleCartAddedProductQtyText: prefix + "pdp_bundle_cart_addeed_product_qty_text",
            pdpBundleCartAddedProductEditBlock: prefix + "pdp_bundle_cart_added_product_edit" + postfix,
            pdpBundleCartAddedProductEditTextBlock: prefix + "pdp_bundle_cart_added_product_edit_text" + postfix,
            pdpBundleCartAddedProductEditText: prefix + "pdp_bundle_cart_added_product_edit_text",
            pdpBundleCartAddedProductEditImgBlock: prefix + "pdp_bundle_cart_added_product_edit_img" + postfix,
            pdpBundleCartAddedProductEditImg: prefix + "pdp_bundle_cart_added_product_edit_img",
            pdpBundleCartSummaryBlock: prefix + "pdp_bundle_cart_summary" + postfix,
            pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle_cart_summary_title" + postfix,
            pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle_cart_summary_title_text" + postfix,
            pdpBundleCartSummaryTitleText: prefix + "pdp_bundle_cart_summary_title_text",
            pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle_cart_summary_price" + postfix,
            pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle_cart_summary_price_regular" + postfix,
            pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle_cart_summary_price_regular_text" + postfix,
            pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle_cart_summary_price_regular_text",
            pdpBundleCartSummaryPriceRegularTextExc: prefix + "pdp_bundle_cart_summary_price_regular_text_exc",
            pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle_cart_summary_price_active" + postfix,
            pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle_cart_summary_price_active_text" + postfix,
            pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle_cart_summary_price_active_text",
            pdpBundleCartSummaryPriceActiveTextExc: prefix + "pdp_bundle_cart_summary_price_active_text_exc",
            pdpBundleCartSummaryPriceSaveBlock: prefix + "pdp_bundle_cart_summary_price_save" + postfix,
            pdpBundleCartSummaryPriceSaveText: prefix + "pdp_bundle_cart_summary_price_save_text",
            pdpBundleCartSummaryViewBlock: prefix + "pdp_bundle_cart_summary_view" + postfix,
            pdpBundleCartSummaryViewBtnBlock: prefix + "pdp_bundle_cart_summary_view_btn" + postfix,
            pdpBundleCartSummaryViewBtnImgBlock: prefix + "pdp_bundle_cart_summary_view_btn_img" + postfix,
            pdpBundleCartSummaryViewBtnImg: prefix + "pdp_bundle_cart_summary_view_btn_img",
            pdpBundleCartSummaryViewBtnTextBlock: prefix + "pdp_bundle_cart_summary_view_btn_text" + postfix,
            pdpBundleCartSummaryViewBtnText: prefix + "pdp_bundle_cart_summary_view_btn_text",
            pdpBundleCartSummaryViewBtnCountBlock: prefix + "pdp_bundle_cart_summary_view_btn_count" + postfix,
            pdpBundleCartSummaryViewBtnCount: prefix + "pdp_bundle_cart_summary_view_btn_count",
            pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle_cart_summary_add" + postfix,
            pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle_cart_summary_add_btn" + postfix,
            pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_text" + postfix,
            pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle_cart_summary_add_btn_text",
            pdpBundleCartSummaryAddBtnspan: prefix + "pdp_bundle_cart_summary_add_btn_span",
            pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
            pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",
            pdpBundleCartSummarySaveAddBlock: prefix + "pdp_bundle_cart_summary_save" + postfix,
            pdpBundleCartSummarySaveAddText: prefix + "pdp_bundle_cart_summary_save_text",
            ///Click & Collect///////////
            pdpBundleCartSummaryAddBtnClickCollectBlock: prefix + "pdp_bundle_cart_summary_add_Click_Collect_btn" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_text" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectText: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_text",
            pdpBundleCartSummaryAddBtnClickCollectImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectImg: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img",
            pdpBundleCartSummaryAddBtnClickCollectImgText: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img_text",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,

            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productTitleTextHeader: prefix + "product_desc_title_text_header",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productEnergyRating: prefix + "product_desc_energy_rating" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextExc: prefix + "product_desc_price_active_text_exc",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceRegularTextExc: prefix + "product_desc_price_regular_text_exc",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,

            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
            pdpModalTitleBlock: ["pdpModalTitleTextBlock", "pdpModalTitleImgBlock"],
            pdpModalTitleTextBlock: ["pdpModalTitleText"],
            pdpModalTitleImgBlock: ["pdpModalTitleImg"],
            pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock","pdpModalBundleCartOverlay", "pdpModalBundleCartBlock"],
            pdpModalMainProductBlock: ["productModuleBlock"],
            pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
            pdpAddIconImgBlock: ["pdpAddIconImg"],

            pdpModalBundleProductBlock: ["pdpBundleProductHeaderBlock", "pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductNavBlock", "pdpBundleProductRightBtnBlock"],
            pdpBundleProductHeaderBlock: ["pdpBundleProductHeaderText"],
            pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
            pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
            pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
            pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
            pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess","pdpBundleProductListItemsWrapperBlock", "pdpBundleProductListRightBlock"],
            pdpBundleProductListItemsWrapperBlock:["pdpBundleProductListItemsWrapperHeaderBlock","pdpBundleProductListItemsBlock"],
            pdpBundleProductListItemsWrapperHeaderBlock:["pdpBundleProductListItemsWrapperHeaderText","pdpBundleProductListItemsWrapperHeaderclose"],
            pdpBundleProductListMainBlock: ["pdpBundleProductListMainLeftBlock", "pdpBundleProductListMainListBlock", "pdpBundleProductListMainRightBlock"],
            pdpBundleProductListMainLeftBlock: ["pdpBundleProductListMainLeftBtnBlock"],
            pdpBundleProductListMainLeftBtnBlock: ["pdpBundleProductListMainLeftBtnImgBlock", "pdpBundleProductListMainLeftBtnTextBlock"],
            pdpBundleProductListMainLeftBtnImgBlock: ["pdpBundleProductListMainLeftBtnImg"],
            pdpBundleProductListMainLeftBtnTextBlock: ["pdpBundleProductListMainLeftBtnText"],
            pdpBundleProductListMainListBlock: ["productModuleBlock"],
            pdpBundleProductListMainRightBlock: ["pdpBundleProductListMainRightBtnBlock"],
            pdpBundleProductListMainRightBtnBlock: ["pdpBundleProductListMainRightBtnImgBlock", "pdpBundleProductListMainRightBtnTextBlock"],
            pdpBundleProductListMainRightBtnImgBlock: ["pdpBundleProductListMainRightBtnImg"],
            pdpBundleProductListMainRightBtnTextBlock: ["pdpBundleProductListMainRightBtnText"],
            pdpBundleProductListLeftBlock: ["pdpBundleProductListLeftBtnBlock"],
            pdpBundleProductListLeftBtnBlock: ["pdpBundleProductListLeftBtnImgBlock"],
            pdpBundleProductListLeftBtnImgBlock: ["pdpBundleProductListLeftBtnImg"],
            pdpBundleProductListRightBlock: ["pdpBundleProductListRightBtnBlock"],
            pdpBundleProductListRightBtnBlock: ["pdpBundleProductListRightBtnImgBlock"],
            pdpBundleProductListRightBtnImgBlock: ["pdpBundleProductListRightBtnImg"],
            pdpBundleProductListItemsBlockShowMoreLess:["pdpBundleProductListItemsBlockShowMoreLessText"],
            pdpBundleProductListItemsBlock: ["pdpBundleProductListItemBlock"],
            pdpBundleProductListItemBlock: ["pdpBundleProductListItemAddedBlock", "pdpBundleProductListItemImgBlock", "pdpBundleProductListItemTitleBlock", "pdpBundleProductListItemPriceBlock"],
            pdpBundleProductListItemAddedBlock: ["pdpBundleProductListItemAddedBtnBlock"],
            pdpBundleProductListItemAddedBtnBlock: ["pdpBundleProductListItemAddedBtnImgBlock", "pdpBundleProductListItemAddedBtnTextBlock"],
            pdpBundleProductListItemAddedBtnImgBlock: ["pdpBundleProductListItemAddedBtnImg"],
            pdpBundleProductListItemAddedBtnTextBlock: ["pdpBundleProductListItemAddedBtnText"],
            pdpBundleProductListItemImgBlock: ["pdpBundleProductListItemImg"],
            pdpBundleProductListItemTitleBlock: ["pdpBundleProductListItemTitleTextBlock"],
            pdpBundleProductListItemTitleTextBlock: ["pdpBundleProductListItemTitleText"],
            pdpBundleProductListItemPriceBlock: ["pdpBundleProductListItemPriceActiveBlock"],
            pdpBundleProductListItemPriceActiveBlock: ["pdpBundleProductListItemPriceActiveTextBlock"],
            pdpBundleProductListItemPriceActiveTextBlock: ["pdpBundleProductListItemPriceActiveText"],

            pdpModalBundleCartBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartAddedBlock", "pdpBundleCartSummaryBlock"],
            pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock", "pdpBundleCartTitleImgBlock"],
            pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
            pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
            pdpBundleCartPriceBlock: ["pdpBundleCartPriceMainBlock", "pdpBundleCartPriceAddonBlock"],
            pdpBundleCartPriceMainBlock: ["pdpBundleCartPriceMainTitleBlock", "pdpBundleCartPriceMainFigureBlock"],
            pdpBundleCartPriceMainTitleBlock: ["pdpBundleCartPriceMainTitleTextBlock"],
            pdpBundleCartPriceMainTitleTextBlock: ["pdpBundleCartPriceMainTitleText"],
            pdpBundleCartPriceMainFigureBlock: ["pdpBundleCartPriceMainFigureTextBlock"],
            pdpBundleCartPriceMainFigureTextBlock: ["pdpBundleCartPriceMainFigureText"],
            pdpBundleCartPriceAddonBlock: ["pdpBundleCartPriceAddonTitleBlock", "pdpBundleCartPriceAddonFigureBlock"],
            pdpBundleCartPriceAddonTitleBlock: ["pdpBundleCartPriceAddonTitleTextBlock"],
            pdpBundleCartPriceAddonTitleTextBlock: ["pdpBundleCartPriceAddonTitleText"],
            pdpBundleCartPriceAddonFigureBlock: ["pdpBundleCartPriceAddonFigureTextBlock"],
            pdpBundleCartPriceAddonFigureTextBlock: ["pdpBundleCartPriceAddonFigureText"],
            pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
            pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductQtyBlock",  "pdpBundleCartAddedProductPriceBlock","pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductEditBlock"],
            pdpBundleCartAddedProductImgBlock: ["pdpBundleCartAddedProductImg"],
            pdpBundleCartAddedProductTitleBlock: ["pdpBundleCartAddedProductTitleTextBlock"],
            pdpBundleCartAddedProductTitleTextBlock: ["pdpBundleCartAddedProductTitleText"],
            pdpBundleCartAddedProductPriceBlock: ["pdpBundleCartAddedProductPriceTextBlock"],
            pdpBundleCartAddedProductPriceTextBlock: ["pdpBundleCartAddedProductPriceText","pdpBundleCartAddedProductPriceTextExc"],
            pdpBundleCartAddedProductAttBlock: ["pdpBundleCartAddedProductAttColorBlock", "pdpBundleCartAddedProductAttSizeBlock"],
            pdpBundleCartAddedProductAttColorBlock: ["pdpBundleCartAddedProductAttColorTextBlock"],
            pdpBundleCartAddedProductAttColorTextBlock: ["pdpBundleCartAddedProductAttColorText"],
            pdpBundleCartAddedProductAttSizeBlock: ["pdpBundleCartAddedProductAttSizeTextBlock"],
            pdpBundleCartAddedProductAttSizeTextBlock: ["pdpBundleCartAddedProductAttSizeText"],
            pdpBundleCartAddedProductQtyBlock: ["pdpBundleCartAddedProductQtyTextBlock"],
            pdpBundleCartAddedProductQtyTextBlock: ["pdpBundleCartAddedProductQtyText"],
            pdpBundleCartAddedProductEditBlock: ["pdpBundleCartAddedProductEditTextBlock", "pdpBundleCartAddedProductEditImgBlock"],
            pdpBundleCartAddedProductEditTextBlock: ["pdpBundleCartAddedProductEditText"],
            pdpBundleCartAddedProductEditImgBlock: ["pdpBundleCartAddedProductEditImg"],
            pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock","pdpBundleCartSummaryPriceSaveBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartSummaryAddBlock","pdpBundleCartSummarySaveAddBlock"],
            pdpBundleCartSummarySaveAddBlock:["pdpBundleCartSummarySaveAddText"],
            pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock","pdpBundleCartSummaryPriceBlock"],
            pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
            pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
            pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
            pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
            pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
            pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
            pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
            pdpBundleCartSummaryPriceSaveBlock:["pdpBundleCartSummaryPriceSaveText"],
            pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
            pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText","pdpBundleCartSummaryPriceRegularTextExc"],
            pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
            pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText","pdpBundleCartSummaryPriceActiveTextExc"],
            // pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
            pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock", "pdpBundleCartSummaryAddBtnClickCollectBlock", "pdpBundleCartSummaryAddBtnImgText"],
            pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
            pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText","pdpBundleCartSummaryAddBtnspan"],
            // pdpBundleCartSummaryAddBtnText:["pdpBundleCartSummaryAddBtnspan"],
            pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],

            pdpBundleCartSummaryAddBtnClickCollectBlock: ["pdpBundleCartSummaryAddBtnClickCollectTextBlock", "pdpBundleCartSummaryAddBtnClickCollectImgBlock"],
            //,"pdpBundleCartSummaryAddBtnClickCollectImgText"
            pdpBundleCartSummaryAddBtnClickCollectTextBlock: ["pdpBundleCartSummaryAddBtnClickCollectText"],
            pdpBundleCartSummaryAddBtnClickCollectImgBlock: ["pdpBundleCartSummaryAddBtnClickCollectImg"],

            /////////////Click & Collect/////////

            // pdpBundleCartSummaryClickCollectBlock: ["pdpBundleCartSummaryClickCollectBtnBlock"],
            // pdpBundleCartSummaryClickCollectBtnBlock: ["pdpBundleCartSummaryClickCollectBtnTextBlock", "pdpBundleCartSummaryClickCollectBtnImgBlock"],
            // pdpBundleCartSummaryClickCollectBtnTextBlock: ["pdpBundleCartSummaryClickCollectBtnText","pdpBundleCartSummaryClickCollectBtnspan"],
            // // pdpBundleCartSummaryAddBtnText:["pdpBundleCartSummaryAddBtnspan"],
            // pdpBundleCartSummaryClickCollectBtnImgBlock: ["pdpBundleCartSummaryClickCollectBtnImg"],


            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock","productEnergyRating","productOfferBlock","productAttDetailsBlock", "productInfoBlock", "productPackOfBlock","productQtyAddBtnBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleTextHeader","productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText","productPriceActiveTextExc", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText","productPriceRegularTextExc"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    },
    sidebar: {
        className: {
            sidebarModalBlock: prefix + "sidebar_modal" + postfix,
            sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
            sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
            sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
            sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
            sidebarHeaderContinueBlock: prefix + "header_continue" + postfix,
            sidebarHeaderContinueImgBlock: prefix + "header_continue_img" + postfix,
            sidebarHeaderContinueImg: prefix + "header_continue_img",
            sidebarHeaderContinueTextBlock: prefix + "header_continue_text" + postfix,
            sidebarHeaderContinueText: prefix + "header_continue_text",
            sidebarHeaderTitleBlock: prefix + "header_title" + postfix,
            sidebarHeaderTitleTextBlock: prefix + "header_title_text" + postfix,
            sidebarHeaderTitleText: prefix + "header_title_text",
            sidebarHeaderSubTitleTextBlock: prefix + "header_sub_title_text" + postfix,
            sidebarHeaderSubTitleText: prefix + "header_sub_title_text",
            sidebarHeaderItemBlock: prefix + "header_item" + postfix,
            sidebarHeaderItemCountBlock: prefix + "header_item_count" + postfix,
            sidebarHeaderItemCountTitleBlock: prefix + "header_item_count_title" + postfix,
            sidebarHeaderItemCountTitleTextBlock: prefix + "header_item_count_title_text" + postfix,
            sidebarHeaderItemCountTitleText: prefix + "header_item_count_title_text",
            sidebarHeaderItemCountFigureBlock: prefix + "header_item_count_figure" + postfix,
            sidebarHeaderItemCountFigureTextBlock: prefix + "header_item_count_figure_text" + postfix,
            sidebarHeaderItemCountFigureText: prefix + "header_item_count_figure_text",
            sidebarCartAddedProductDescSubTotalPriceBlock: prefix + "cart_added_product_desc_subtotal_price" + postfix,
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: prefix + "cart_added_product_desc_subtotal_price_regular" + postfix,
            sidebarCartAddedProductDescSubTotalRegularTextBlock: prefix + "cart_added_product_desc_subtotal_price_regular_text" + postfix,
            sidebarCartAddedProductDescSubTotalRegularText: prefix + "cart_added_product_desc_subtotal_price_regular_text",
            sidebarCartAddedProductDescSubTotalRegularTextExc: prefix + "cart_added_product_desc_subtotal_price_regular_text_exc",
            sidebarCartAddedProductDescSubTotalActiveBlock: prefix + "cart_added_product_desc_subtotal_price_active" + postfix,
            sidebarCartAddedProductDescSubTotalActiveTextBlock: prefix + "cart_added_product_desc_subtotal_price_active_text" + postfix,
            sidebarCartAddedProductDescSubTotalActiveText: prefix + "cart_added_product_desc_subtotal_price_active_text",
            sidebarCartAddedProductDescSubTotalActiveTextExc: prefix + "cart_added_product_desc_subtotal_price_active_text_exc",
            sidebarCartAddedProductDescSubTotalActiveTextMsg: prefix + "cart_added_product_desc_subtotal_price_active_text_msg",

            sidebarCartAddedLeftBlock: prefix + "cart_added_left" + postfix,
            sidebarCartAddedLeftBtnBlock: prefix + "cart_added_left_btn" + postfix,
            sidebarCartAddedLeftBtnImgBlock: prefix + "cart_added_left_btn_img" + postfix,
            sidebarCartAddedLeftBtnImg: prefix + "cart_added_left_btn_img",
            sidebarCartAddedRightBlock: prefix + "cart_added_right" + postfix,
            sidebarCartAddedRightBtnBlock: prefix + "cart_added_right_btn" + postfix,
            sidebarCartAddedRightBtnImgBlock: prefix + "cart_added_right_btn_img" + postfix,
            sidebarCartAddedRightBtnImg: prefix + "cart_added_right_btn_img",
            sidebarCartAddedListParentBlock: prefix + "cart_added_list_parent" + postfix,
            sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
            sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
            sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
            sidebarCartAddedProductImg: prefix + "cart_added_product_img",
            sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
            sidebarCartAddedProductqtyBlock: prefix + "cart_added_product_qty" + postfix,
            sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
            sidebarCartAddedProductDescTitleTextBlock: prefix + "cart_added_product_desc_title_text" + postfix,
            sidebarCartAddedProductDescTitleText: prefix + "cart_added_product_desc_title_text",
            sidebarCartAddedProductDescQTYPriceBlock: prefix + "cart_added_product_desc_qty_price" + postfix,
            sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
            sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
            sidebarCartAddedProductDescPriceRegularTextBlock: prefix + "cart_added_product_desc_price_regular_text" + postfix,
            sidebarCartAddedProductDescPriceRegularText: prefix + "cart_added_product_desc_price_regular_text",
            sidebarCartAddedProductDescPriceRegularTextExc: prefix + "cart_added_product_desc_price_regular_text_exc",
            sidebarCartAddedProductDescPriceActiveBlock: prefix + "cart_added_product_desc_price_active" + postfix,
            sidebarCartAddedProductDescPriceActiveTextBlock: prefix + "cart_added_product_desc_price_active_text" + postfix,
            sidebarCartAddedProductDescPriceActiveText: prefix + "cart_added_product_desc_price_active_text",
            sidebarCartAddedProductDescPriceActiveTextExc: prefix + "cart_added_product_desc_price_active_text_exc",
            sidebarCartAddedProductDescPriceActiveTextMsg: prefix + "cart_added_product_desc_price_active_text_msg",
            sidebarCartAddedProductDescAttBlock: prefix + "cart_added_product_desc_att" + postfix,
            sidebarCartAddedProductDescAttColorBlock: prefix + "cart_added_product_desc_att_color" + postfix,
            sidebarCartAddedProductDescAttColorTextBlock: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttColorText: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttSizeBlock: prefix + "cart_added_product_desc_att_size" + postfix,
            sidebarCartAddedProductDescAttSizeTextBlock: prefix + "cart_added_product_desc_att_size_text" + postfix,
            sidebarCartAddedProductDescAttSizeText: prefix + "cart_added_product_desc_att_size_text",
            

            sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
            sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
            sidebarRecommendedTitleText: prefix + "recommended_title_text",
            sidebarRecommendedTitleImgBlock: prefix + "recommended_title_img" + postfix,
            sidebarRecommendedTitleImg: prefix + "recommended_title_img",
            sidebarRecommendedTabsBlock: prefix + "recommended_tabs" + postfix,
            sidebarRecommendedTabsTitleBlock: prefix + "recommended_tabs_title" + postfix,
            sidebarRecommendedTabsTitleTextBlock: prefix + "recommended_tabs_title_text" + postfix,
            sidebarRecommendedTabsTitleText: prefix + "recommended_tabs_title_text",
            sidebarRecommendedTabsLeftBlock: prefix + "recommended_tabs_left" + postfix,
            sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
            sidebarRecommendedTabsRightBlock: prefix + "recommended_tabs_right" + postfix,
            sidebarRecommendedTabsLeftBtnBlock: prefix + "recommended_tabs_left_btn" + postfix,
            sidebarRecommendedTabsLeftBtnImgBlock: prefix + "recommended_tabs_left_btn_img" + postfix,
            sidebarRecommendedTabsLeftBtnImg: prefix + "recommended_tabs_left_btn_img",
            sidebarRecommendedTabsRightBtnBlock: prefix + "recommended_tabs_right_btn" + postfix,
            sidebarRecommendedTabsRightBtnImgBlock: prefix + "recommended_tabs_right_btn_img" + postfix,
            sidebarRecommendedTabsRightBtnImg: prefix + "recommended_tabs_right_btn_img",
            sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
            sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
            sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
            sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
            sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
            sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
            sidebarRecommendedProductsItemThumbBlock: prefix + "recommended_products_item_thumb" + postfix,
            sidebarRecommendedProductsListItemThumbBlock: prefix + "recommended_products_list_item_thumb" + postfix,
            sidebarRecommendedProductsListMainBlock: prefix + "recommended_products_list_main" + postfix,
            sidebarRecommendedProductsRightBlock: prefix + "recommended_products_right" + postfix,
            sidebarRecommendedProductsLeftBtnBlock: prefix + "recommended_products_left_btn" + postfix,
            sidebarRecommendedProductsLeftBtnImgBlock: prefix + "recommended_products_left_btn_img" + postfix,
            sidebarRecommendedProductsLeftBtnImg: prefix + "recommended_products_left_btn_img",
            sidebarRecommendedProductsRightBtnBlock: prefix + "recommeded_products_right_btn" + postfix,
            sidebarRecommendedProductsRightBtnImgBlock: prefix + "recommended_products_right_btn_img" + postfix,
            sidebarRecommendedProductsRightBtnImg: prefix + "recommended_products_right_btn_img",
            sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
            sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
            sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
            sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
            sidebarCheckoutContinueBtnspan: prefix + "checkout_continue_btn_span",
            sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
            sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
            sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
            sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
            sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
            sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
            sidebarCheckoutBasketBtnspan: prefix + "checkout_basket_btn_span",
            sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
            sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productEnergyRating: prefix + "product_desc_energy_rating" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextExc: prefix + "product_desc_price_active_text_exc",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceRegularTextExc: prefix + "product_desc_price_regular_text_exc",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productAttEditTextBlock: prefix + "product_desc_att_edit_text" + postfix,
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
            productAttEditImg: prefix + "product_desc_att_edit_img",
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            sidebarModalBlock: ["sidebarHeaderTitleBlock","sidebarHeaderBlock","sidebarCartAddedBlock", "sidebarCheckoutBlock", "sidebarRecommendedBlock"],
            sidebarHeaderBlock: ["sidebarHeaderContinueBlock",  "sidebarHeaderItemBlock"],
            sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
            sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
            sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
            sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock", "sidebarHeaderSubTitleTextBlock"],
            sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
            sidebarHeaderSubTitleTextBlock: ["sidebarHeaderSubTitleText"],
            sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
            sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountFigureBlock","sidebarCartAddedProductDescSubTotalPriceBlock"],
            sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitleTextBlock"],
            sidebarHeaderItemCountTitleTextBlock: ["sidebarHeaderItemCountTitleText"],
            sidebarHeaderItemCountFigureBlock: ["sidebarHeaderItemCountFigureTextBlock"],
            sidebarHeaderItemCountFigureTextBlock: ["sidebarHeaderItemCountFigureText"],

            sidebarCartAddedProductDescSubTotalPriceBlock: ["sidebarCartAddedProductDescSubTotalActiveBlock", "sidebarCartAddedProductDescSubTotalPriceRegularBlock"],
            sidebarCartAddedProductDescSubTotalActiveBlock: ["sidebarCartAddedProductDescSubTotalActiveTextBlock"],
            sidebarCartAddedProductDescSubTotalActiveTextBlock: ["sidebarCartAddedProductDescSubTotalActiveText","sidebarCartAddedProductDescSubTotalActiveTextExc", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: ["sidebarCartAddedProductDescSubTotalRegularTextBlock"],
            sidebarCartAddedProductDescSubTotalRegularTextBlock: ["sidebarCartAddedProductDescSubTotalRegularText","sidebarCartAddedProductDescSubTotalRegularTextExc"],
            
            sidebarCartAddedBlock: ["sidebarCartAddedLeftBlock", "sidebarCartAddedListParentBlock", "sidebarCartAddedRightBlock"],
            sidebarCartAddedListParentBlock:["sidebarCartAddedListBlock"],
            sidebarCartAddedLeftBlock: ["sidebarCartAddedLeftBtnBlock"],
            sidebarCartAddedLeftBtnBlock: ["sidebarCartAddedLeftBtnImgBlock"],
            sidebarCartAddedLeftBtnImgBlock: ["sidebarCartAddedLeftBtnImg"],
            sidebarCartAddedRightBlock: ["sidebarCartAddedRightBtnBlock"],
            sidebarCartAddedRightBtnBlock: ["sidebarCartAddedRightBtnImgBlock"],
            sidebarCartAddedRightBtnImgBlock: ["sidebarCartAddedRightBtnImg"],
            sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
            sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
            sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
            sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock","sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescQTYPriceBlock"],
            sidebarCartAddedProductDescQTYPriceBlock:["sidebarCartAddedProductDescPriceBlock","sidebarCartAddedProductqtyBlock"],
            sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitleTextBlock"],
            sidebarCartAddedProductDescTitleTextBlock: ["sidebarCartAddedProductDescTitleText"],
            sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceActiveBlock", "sidebarCartAddedProductDescPriceRegularBlock"],
            sidebarCartAddedProductDescPriceActiveBlock: ["sidebarCartAddedProductDescPriceActiveTextBlock"],
            sidebarCartAddedProductDescPriceActiveTextBlock: ["sidebarCartAddedProductDescPriceActiveText","sidebarCartAddedProductDescPriceActiveTextExc", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegularTextBlock"],
            sidebarCartAddedProductDescPriceRegularTextBlock: ["sidebarCartAddedProductDescPriceRegularText","sidebarCartAddedProductDescPriceRegularTextExc"],

            sidebarCartAddedProductDescAttBlock: ["sidebarCartAddedProductDescAttColorBlock", "sidebarCartAddedProductDescAttSizeBlock"],
            sidebarCartAddedProductDescAttColorBlock: ["sidebarCartAddedProductDescAttColorTextBlock"],
            sidebarCartAddedProductDescAttColorTextBlock: ["sidebarCartAddedProductDescAttColorText"],
            sidebarCartAddedProductDescAttSizeBlock: ["sidebarCartAddedProductDescAttSizeTextBlock"],
            sidebarCartAddedProductDescAttSizeTextBlock: ["sidebarCartAddedProductDescAttSizeText"],

            sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendedTabsBlock", "sidebarRecommendedProductsBlock"],
            sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock", "sidebarRecommendedTitleImgBlock"],
            sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
            sidebarRecommendedTitleImgBlock: ["sidebarRecommendedTitleImg"],
            sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsLeftBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
            sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
            sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
            sidebarRecommendedTabsLeftBlock: ["sidebarRecommendedTabsLeftBtnBlock"],
            sidebarRecommendedTabsLeftBtnBlock: ["sidebarRecommendedTabsLeftBtnImgBlock"],
            sidebarRecommendedTabsLeftBtnImgBlock: ["sidebarRecommendedTabsLeftBtnImg"],
            sidebarRecommendedTabsRightBlock: ["sidebarRecommendedTabsRightBtnBlock"],
            sidebarRecommendedTabsRightBtnBlock: ["sidebarRecommendedTabsRightBtnImgBlock"],
            sidebarRecommendedTabsRightBtnImgBlock: ["sidebarRecommendedTabsRightBtnImg"],
            sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
            sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
            sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
            sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock","sidebarRecommendedProductsItemThumbBlock", "sidebarRecommendedProductsRightBlock"],
            sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
            sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
            sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
            sidebarRecommendedProductsItemThumbBlock:["sidebarRecommendedProductsListItemThumbBlock"],
            sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
            sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
            sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
            sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
            sidebarRecommendedProductsListBlock: ["productModuleBlock"],
            sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
            sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
            sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
            sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
            sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText","sidebarCheckoutContinueBtnspan"],
            sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
            sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
            sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
            sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnspan","sidebarCheckoutBasketBtnText"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            // productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock","productEnergyRating", "productOfferBlock","productInfoBlock", "productPackOfBlock","productAttDetailsBlock","productQtyAddBtnBlock"],
            // productAttDetailsBlock:["productvariantSimpleBlock","productAttBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText","productPriceActiveTextExc", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText","productPriceRegularTextExc"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            
            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    },
    am: {
        className: {
            afModalBlock: prefix + "af" + postfix,
            afModalTitleBlock: prefix + "af_title" + postfix,
            afModalTitleTextBlock: prefix + "af_title_text" + postfix,
            afModalTitleText: prefix + "af_title_text",
            afModalClose: prefix + "af_modal_close",
            afModalBundlesBlock: prefix + "af_bundles" + postfix,
            afLeftBlock: prefix + "af_left" + postfix,
            afLeftBtnBlock: prefix + "af_left_btn" + postfix,
            afLeftBtnImgBlock: prefix + "af_left_btn_img" + postfix,
            afLeftBtnImg: prefix + "af_left_btn_img",
            afProductListMainBlock: prefix + "af_product-list-main" + postfix,
            afProductListBlock: prefix + "af_product-list" + postfix,
            afRightBlock: prefix + "af_right" + postfix,
            afRightBtnBlock: prefix + "af_right_btn" + postfix,
            afRightBtnImgBlock: prefix + "af_right_btn_img" + postfix,
            afRightBtnImg: prefix + "af_right_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",
            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productEnergyRating: prefix + "product_desc_energy_rating" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextExc: prefix + "product_desc_price_active_text_exc",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceRegularTextExc: prefix + "product_desc_price_regular_text_exc",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            afModalBlock: ["afModalTitleBlock", "afModalBundlesBlock"],
            afModalTitleBlock: ["afModalTitleTextBlock"],
            afModalTitleTextBlock: ["afModalTitleText","afModalClose"],
            afModalBundlesBlock: ["afLeftBlock", "afProductListMainBlock", "afRightBlock"],
            afLeftBlock: ["afLeftBtnBlock"],
            afLeftBtnBlock: ["afLeftBtnImgBlock"],
            afLeftBtnImgBlock: ["afLeftBtnImg"],
            afProductListMainBlock: ["afProductListBlock"],
            afProductListBlock: ["productModuleBlock", "productModuleBlock", "productModuleBlock"],
            afRightBlock: ["afRightBtnBlock"],
            afRightBtnBlock: ["afRightBtnImgBlock"],
            afRightBtnImgBlock: ["afRightBtnImg"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            // productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock","productEnergyRating", "productOfferBlock", "productInfoBlock", "productPackOfBlock","productAttDetailsBlock","productQtyAddBtnBlock"],
            // productAttDetailsBlock:["productvariantSimpleBlock","productAttBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText","productPriceActiveTextExc", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText","productPriceRegularTextExc"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],
            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],

            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    },
    tickbox:{
        className : {
            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,

            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productTitleTextHeader: prefix + "product_desc_title_text_header",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productEnergyRating: prefix + "product_desc_energy_rating" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextExc: prefix + "product_desc_price_active_text_exc",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceRegularTextExc: prefix + "product_desc_price_regular_text_exc",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,

            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock","productEnergyRating","productOfferBlock","productAttDetailsBlock", "productInfoBlock", "productPackOfBlock","productQtyAddBtnBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleTextHeader","productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText","productPriceActiveTextExc", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText","productPriceRegularTextExc"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    }
}

INC.methods = {};
INC.methods.networkReq = function (nwConfigObj, cb) {

    nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);

    xhr.onload = function () { }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if(xhr.response != ""){
                let p_ids = INC.methods.getProductIdFromWebPage()
                if(INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null){
                    cb(xhr.response);
                }else{
                    cb(xhr.response);
                }
                if(INC.config.pageType == "pdp"){
                    p_ids=INC.methods.getProductIdFromWebPage()
                    var repd=JSON.parse(xhr.response)
                    if(repd.CategoryRecommendations == null){
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                }
                sessionStorage.setItem('bundleJSON',xhr.response)
            }else {
                let p_ids = INC.methods.getProductIdFromWebPage()
                if(sidebar_configurator_id.indexOf(p_ids) >= 0){
                    if (INC.config.pageType == "pdp") {
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view",'configurator');
                    }
                }else{
                    if(INC.config.pageType == "pdp"){
                        p_ids=INC.methods.getProductIdFromWebPage()
                        setTimeout(function(){
                            INC.methods.irbReq_is_categ_recomendation(p_ids, 10, "catalog_product_view");
                        },1000)
                    }
                }
            }
        }
    }

    xhr.send(JSON.stringify(nwConfigObj.params));
}

INC.methods.irbReq = function (productId, bundleCount, elementName) {
    elementName = elementName || "";
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    var irbReqParams;
    if(INC.config.pageType == "pdp" || INC.config.pageType == "cartPage"){
        irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" + 
        "&client_visitor_id=" + INC.config.ivid //+
        // "&is_tc=" + "1" +
        // "&no_of_bundles=" + bundleReqCount
        ;
    }else {
        irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid +
        "&is_tc=" + "1" +
        "&fr=" + "1" + 
        "&no_of_bundles=" + bundleReqCount
        ;
    }
    
    var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL;

    return this.refreshBundles(networkConfigObj);
}

INC.methods.refreshBundles = function (nwConfigObj) {
    var incDataStore = INC.dataStore;

    INC.methods.networkReq(nwConfigObj, function (response) {
        
        if (response.length == 0) return;
        var responseJSON
        if(typeof(response) != "object"){
            responseJSON = JSON.parse(response);
        }else{
            responseJSON = response;
        }
        var isrecomendation=false;
        if(responseJSON.CategoryRecommendations != null){
            if(responseJSON.CategoryRecommendations.length > 0){
                isrecomendation = true
            }
        }
        var bundleResponse;
        if (Object.prototype.hasOwnProperty.call(responseJSON, 'CategoryRecommendations') && isrecomendation === true) {
            responseJSON.timeStamp = Date.now();
            bundleResponse = responseJSON;
            INC.config.recommendation = true
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);
            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
            INC.config.recommendation = true
            
            switch (INC.config.pageType) {
                case "pdp": INC.methods.createAMBlock(null,"PDP","recommendation"); break;
            }
        }else if(responseJSON.Bundles != null){
            if (Object.prototype.hasOwnProperty.call(responseJSON, 'Bundles') && Array.isArray(responseJSON.Bundles) && responseJSON.Bundles.length > 0) {

                INC.config.AssociatedProducts = responseJSON.AssociatedProducts
                responseJSON.timeStamp = Date.now();
                bundleResponse = responseJSON;
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
    
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
    
                switch (INC.config.pageType) {
                    case "pdp": INC.methods.createPDPBlock(); break;
                    case "cartPage": INC.methods.createAMBlock(); break;
                    case "homePage":
                        INC.methods.createAMBlock();
                        break;
                    case "productList":
                        INC.config.dupDataObjectProducts=[]
                        INC.methods.createSidebarBlock();
                        var findObj = new INC.classes.FindObj();
                        findObj["id"] = INC.config.plpProductId;
                        
                        var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                        sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedBlock")).style.visibilty = "hidden";
                        document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px";
                        sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = "|";
                        sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                        if(INC.dataStore.plpProductQty == 0){
                            INC.dataStore.plpProductQty = 1
                        }
                        INC.methods.addProductToSidebarCart(findObj, INC.dataStore.plpProductQty,null,"client_add_btn");
                        if(document.querySelector('.ic_popup_module_wrapper.active .inc_popup_close') != null){
                            document.querySelector('.ic_popup_module_wrapper.active .inc_popup_close').click();
                        }
                        INC.methods.showSidebar();
                       
                        // INC.config.empty_prod_details.push({
                        //     p_id:productId,
                        //     p_name:p_name,
                        //     p_img:p_img,
                        //     p_activePrice:p_activePrice,
                        //     regularPrice:regularPrice
                        // })
                        var img_elem = setInterval(function(){
                            var circle_img=document.querySelector('.inc_cart_added_product_img img')
                            if(circle_img != null){
                                clearInterval(img_elem)
                                var subtotalinc_active=document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text');
                                if(INC.config.empty_prod_details[0] != undefined){
                                    if(INC.config.empty_prod_details[0].p_activePrice != undefined){
                                        if(subtotalinc_active != null){
                                            var subt=(+INC.config.empty_prod_details[0].p_activePrice * INC.dataStore.plpProductQty)
                                            subtotalinc_active.innerHTML=formatter.format(subt)
                                            subtotalinc_active.setAttribute('subtotalactiveprice',subt)
                                            subtotalinc_active.setAttribute('subtotalactiveprice',subt)
                                            var subtotalregular=document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text_block')
                                            subtotalregular. setAttribute('subtotalregularprice',0)
                                        }
                                        var prd_names=document.querySelector('.inc_cart_added_product_desc_title_text')
                                        // prd_names.innerHTML = p_name
                                        if(INC.config.empty_prod_details[0].p_name != undefined){
                                            prd_names.innerHTML =  INC.dataStore.plpProductQty + "<small>x </small>" +  INC.config.empty_prod_details[0].p_name
                                        }
                                        if(INC.config.empty_prod_details[0].p_name != undefined){
                                            circle_img.src = INC.config.empty_prod_details[0].p_img
                                        }
                                        var prd_price=document.querySelector('.inc_cart_added_product_desc_price_active_text')
                                        if(prd_price != null && INC.config.empty_prod_details[0].p_activePrice != null){
                                            prd_price.innerHTML=formatter.format(INC.config.empty_prod_details[0].p_activePrice)
                                        }
                                    }
                                }
                                setTimeout(function(){
                                    if(document.querySelector('#colorbox') != null){
                                        if(document.querySelector('#colorbox').style.display == "block"){
                                            // clearInterval(succesalert)
                                            document.querySelector('#cboxClose').click()
                                        }
                                    }
                                },2000)
                                
                            }
                        },100)
                        break;
                }
            }
        }
    });
}

INC.methods.irbReq_is_tc = function (productId, bundleCount, elementName,configurator) {

    elementName = elementName || "";
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    if(sidebar_configurator_id.indexOf(productId) >= 0){
        bundleReqCount = 30
    }
    var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid +
        "&fr=" + "1" + 
        "&is_tc=" + "1" +
        "&no_of_bundles=" + bundleReqCount
        ;
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if(xhr.response != ""){
                if(configurator == "configurator"){
                    if (typeof(response) != "object") {
                        var responseJSONt = JSON.parse(xhr.response);
                    } 
                    var bundleResponset = responseJSONt;
                   
                    INC.dataStore.methods().buildDataStoreObj(bundleResponset,'configurator');
                    setTimeout(function(){
                        cb_tc(JSON.parse(xhr.response));
                    },200)
                } else{
                    if((INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) || INC.config.pageType == "productList"){
                        cb_tc(JSON.parse(xhr.response));
                    }
                }
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}

INC.methods.irbReq_is_categ_recomendation = function(productId, bundleCount, elementName, plpCategory) {
    var bundleResponse = "";
    INC.dataStore.methods().buildDataStoreObj(bundleResponse);
    INC.config.recommendation = true
    
    elementName = elementName || "";
    var apiKey = INC.config.clientToken;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    var irbReqParams = "";
    if(plpCategory != null){
        var elementName_ = 'catalog_category_view'
        var catid=Base64.encode(plpCategory)
        irbReqParams =
            "product_ids=" + 
            "&category_id=" + catid +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName_ +
            "&fr=" + "1" +
            "&client_visitor_id=" + INC.config.ivid +
            "&rc=" + "1" +
            "&no_of_bundles=" + bundleCount
        if (INC.config.pageType == "pdp") {
            irbReqParams = irbReqParams + "&rt=" + "10"
        }else if (INC.config.pageType == "productList") {
            irbReqParams = irbReqParams + "&rt=" + "2"
        }

    }else{
        irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + INC.config.ivid +
            "&rc=" + "1" 
    }
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function() {}
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    cb_tc(JSON.parse(xhr.response),"recommendation");
                }
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}

INC.methods.getSelectorClassName = function (classNames, className) {
    return "." + classNames[className];
}
INC.methods.get_product_ratings = function(filed3, rating_containers, page_type) {
    if(filed3 != undefined){
        if(filed3.toString().indexOf('|') == -1){
            filed3 = filed3 + "|" + " "
        }
        if(filed3 != undefined && filed3 != "" && filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0"){
            var rating = filed3.split('|')[0];
            if (rating == "" || rating == undefined) {
                rating = 0
            }
            rating = parseFloat(rating).toFixed(1)
            rating = rating.toString();
            var rating_m = null;
            if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
                rating_m = rating.replace(".", "-");
            }
            if (rating == 0) {
                rating = "0-0"
            }
            if (rating == 1) {
                rating = "1-0"
            }
            if (rating == 2) {
                rating = "2-0"
            }
            if (rating == 3) {
                rating = "3-0"
            }
            if (rating == 4) {
                rating = "4-0"
            }
            if (rating == 5) {
                rating = "5-0"
            }
            if (rating == "") {
                rating = 0;
            }
            if (rating_m != null) {
                rating_containers.classList.add("rating_" + rating_m);
            } else {
                rating_containers.classList.add("rating_" + rating);
            }


            let count = document.createElement('span');
            count.classList.add('rating_count')
            rating_containers.appendChild(count);
            var avg = document.createElement('span');
            avg.classList.add('rating_avg')
            if (rating == undefined) {
                
                count.textContent = "(0)";
            } else {
                if(page_type != "modal"){
                    if(rating.replace('-', '.').trim() != ""){
                        count.textContent = "("+ rating.replace('-', '.').trim() +")"
                    }
                }else{
                    if(rating.replace('-', '.').trim() != ""){
                        count.textContent =  rating.replace('-', '.').trim() 
                    }
                }
                
            }
            let stars = document.createElement('span');
            stars.classList.add('rating_stars');
            stars.innerHTML = ""
            rating_containers.appendChild(stars);
        }else{
            let count = document.createElement('span');
            count.classList.add('rating_count')
            rating_containers.appendChild(count);
            if(page_type != "modal"){
                count.innerHTML = "(0)"
            }else{
                count.innerHTML = "0.0"
            }
            let stars = document.createElement('span');
            stars.innerHTML=""
            stars.style.color="#fff"
            stars.classList.add('rating_stars');
            stars.classList.add('noratings');
            rating_containers.appendChild(stars);
        }
    }
}
INC.methods.getProductIdFromWebPage = function() {
    if (INC.config.pageType == "pdp") {
        var el;
        if (document.querySelector('#productCode') != null) {
            el = document.querySelector('#productCode').value
        } else {
            if(document.querySelector(".product-code #product-code-val") != null){
                el = document.querySelector(".product-code #product-code-val").innerText;
            }
        }
    }
    let prod_code = document.querySelectorAll('form input[name="productCodePost"]')
    let prod_id = []
    let pr_id = "";
    for (let p = 0; p < prod_code.length; p++) {
        if (prod_code[p].value != "") {
            pr_id = prod_code[p].value;
            prod_id.push(pr_id)
            INC.config.Product_id = prod_id[0];
            break;
        }
    }
    var prod_codetarget = document.querySelector('form input[name="targetProductCode"]')
    if(prod_codetarget != null){
        pr_id = "";
        prod_id = []
        pr_id = prod_codetarget.value;
        prod_id.push(pr_id)
        INC.config.Product_id = prod_id[0];
    }

    if (prod_id[0] == undefined) {
        INC.config.Product_id = el;
        INC.config.mainProductid = el
        return el || "";

    } else {
        INC.config.Product_id = prod_id[0];
        INC.config.mainProductid = prod_id[0]
        return prod_id[0] || "";

    }
}


INC.methods.detectPageType = function() {
    //page-responsiveProductList
    if (document.querySelector('body.pageType-CategoryPage') != null) return "productList";
    if (document.querySelector('body.products-list-page') != null) return "productList";
    if (document.querySelector('body.page-responsiveProductList') != null) return "productList";
    if (document.querySelector('body.pageLabel-homepage') != null) return "homePage";
    if (document.querySelector('body.page-responsiveCartPage') != null) return "cartPage";
    if (document.querySelector('body.page_basket') != null) return "cartPage";
    if (document.querySelector('body') != null) return "pdp";
}
INC.methods.detectDeviceType = function () {
    return (window.innerWidth > 768) ? "desktop" : "mobile";
}
INC.methods.detectLanguage = function detectLanguage() { return "en"; }
INC.methods.showSidebar = function () {
    if(document.querySelector('.inc_sidebar_modal_block') != null){
        var seidebar_pr_length=document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
        if(document.querySelector('.inc_sidebar_cart_added_block') != null){
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('active')
        }

        var slider_variable;
        
        if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
            slider_variable = 3;
        }else{
            slider_variable = 2;
        }
        
        if (!(seidebar_pr_length > slider_variable)) {
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            
        }
    
        if (seidebar_pr_length > slider_variable) {
            INC.clientConfig.slidevalue=0
            document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";
            
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "opacity:0.5");
        }
        
        var all_cate_tab = document.querySelectorAll('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text');
        
        if(all_cate_tab.length == 0){
            if(document.querySelector('.inc_sidebar_modal_block') != null){
                document.querySelector('.inc_sidebar_modal_block').setAttribute('id','inc_empty_sidebar')
            }
        }
        if(document.querySelector('#progress_bar_dialog') != null){
            document.querySelector('#progress_bar_dialog').style.display="none"
        }
        if(document.querySelector('.inc_header_item_count_figure_text') != null){
            document.querySelector('.inc_header_item_count_figure_text').innerHTML = "|"
        }
        if(INC.config.pageType == "productList") {
            if(document.querySelector('.inc_af_block') != null){
                inc_scroll_height=  window.window.$(".inc_af_block").offset().top
            }
        }
        if(document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null){
            if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= window.window.$(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  window.window.$(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }else if(INC.config.pageType == "productList"  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }
            if(document.querySelector('.sidebar_outer') != null){
                document.querySelector('.sidebar_outer').style.display="block"
                document.querySelector('.inc_sidebar_modal_block').style.display="block"
                document.querySelector('.inc_sidebar_modal_block').classList.add('active')
                document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
            }
            document.querySelector('html').classList.add('inc_overlay');
            var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
            if(elSidebarOverlay != null){
                elSidebarOverlay.style.display = "block";
            }
            document.querySelector('.inc_sidebar_modal_block').style.display = "block";
            document.querySelector('.inc_sidebar_modal_block').classList.add("active");
            
            
            if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null){
                if(document.querySelector('.inc_recommended_tabs_list_item_text') != null){
                    document.querySelector('.inc_recommended_tabs_list_item_text').click()
                }
            }
        }
        if(seidebar_pr_length == 0){
            document.querySelector('html').classList.remove('inc_overlay')
            document.querySelector('body').setAttribute('style','')
        }
        document.querySelector('.sidebar_outer .inc_sidebar_modal_block .inc_header_title_block').setAttribute('style','display: flex;')
        document.querySelector('.inc_header_sub_title_text_block').setAttribute('style','margin-left: 10px;')
        if(INC.config.pageType == "productList"){
            if (document.querySelector(".inc_af_product-list_block")) {
                if (document.querySelectorAll(".inc_af_product-list_block .inc_product_module_block").length > 3) {
                    INC.clientConfig.slidevalue = 0;
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    document.querySelector(".inc_af_left_btn_block").setAttribute("style", "opacity:0.5");
                    document.querySelector(".inc_af_right_btn_block").setAttribute("style", "opacity:1");
                     document.querySelector(".inc_af_right_btn_img").classList.remove('disabled')
                    document.querySelector(".inc_af_left_btn_img").classList.add('disabled')
                    document.querySelector(".inc_af_product-list_block").setAttribute("style", "left:0px;");
                }
            }
        }
        setTimeout(function(){
            let sel_variant = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_variant_new1 .inc_variant_tag')
            for(let x=0;x<sel_variant.length;x++){
                if(sel_variant[x] != undefined){
                    if(sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                        sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                    }
                    let sel_var = sel_variant[x].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                    let alloptionss = sel_variant[x].querySelectorAll('option')
                    for(let j=0;j<alloptionss.length;j++){
                        let texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                        if(sel_var != undefined){
                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                alloptionss[j].selected = 'selected'
                            }else{
                                if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                    alloptionss[j].selected = 'selected'
                                }
                            }
                        }
                    }
                }
            }

            for(let y=0;y<sel_variant.length;y++){
                if(sel_variant[y] != undefined){
                    let sel_var = sel_variant[y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                    let selv = sel_variant[y]
                    let alloptionss = sel_variant[y].querySelectorAll('option')
                    for(let m=0;m<alloptionss.length;m++){
                        if(sel_var != undefined){
                            var texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }
                        }
                    }
                }
            }
        },2000)
    }else{
        document.querySelector('html').classList.remove('inc_overlay');
    }
}
INC.methods.hideSidebar = function () {
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    INC.config.pdpaddedProductList = []
    elSidebarOverlay.style.display = "none";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    document.querySelector('html').classList.remove('inc_overlay')
    document.querySelector('html').classList.remove('inc_popup_open')
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.remove("active");
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).style.display="none"
    
    if(document.querySelector('.sidebar_outer') != null){
        document.querySelector('.inc_sidebar_modal_block').style.display="none"
        document.querySelector('.sidebar_outer').style.display="none"
        document.querySelector('.sidebar_outer').classList.remove('sidebar_outer_active')
    }
    if(document.querySelector('.inc_cart_added_list_block') != null) {
        document.querySelector('.inc_cart_added_list_block').innerHTML = "";
    }
    if(document.querySelector('#minishopcart_total') != null && document.querySelector('#miniBasketTabProdCount') != null){
        document.querySelector('#minishopcart_total').innerText = document.querySelector('#miniBasketTabProdCount').innerText.trim()
    }
    document.querySelector('body').setAttribute('style','')
    if(INC.config.pageType == 'productList'){
        if((document.querySelector('.inc_af_block') != null)){
            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
        }
        if (document.querySelector('.sidebar_outer') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }
}
INC.methods.addProductToSidebarCart = function(findObj, qty, productBlock, client_add_btn, type_bundle, moduleType) {
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;

    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));
    if (sbBlock != null) {
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;

        var subtotal_activepriceExc = 0;
        var subtotal_regularExc = 0;

        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text') != null) {
            subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text') != null) {
            subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text_exc') != null) {
            subtotal_activepriceExc = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text_exc').getAttribute('subtotalactiveprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text_exc') != null) {
            subtotal_regularExc = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text_exc').getAttribute('subtotalregularprice')
        }
        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0
        }
        if (client_add_btn == "client_add_btn" || (moduleType == "101" && document.querySelector('.sidebar_outer.sidebar_outer_active') == null)) {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (subtotal_activepriceExc == null) {
            subtotal_activepriceExc = 0
        }
        if (subtotal_regularExc == null) {
            subtotal_regularExc = 0
        }
        if (client_add_btn == "client_add_btn" || (moduleType == "101" && document.querySelector('.sidebar_outer.sidebar_outer_active') == null)) {
            subtotal_activepriceExc = 0;
            subtotal_regularExc = 0;
        }
        var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
        var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
        var elHeadersubtotalactivetextExc = getViewElement("sidebarCartAddedProductDescSubTotalActiveTextExc");
        var elHeadersubtotalregulartextExc = getViewElement("sidebarCartAddedProductDescSubTotalRegularTextExc");
        var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
        elHeadersubtotalactivetextExc.classList.add('inc_cart_added_product_desc_subtotal_price_active_text')
        elHeadersubtotalregulartextExc.classList.add('inc_cart_added_product_desc_subtotal_price_regular_text')
        elHeadersubtotalactivetext.classList.add('incvat_')
        elHeadersubtotalregulartext.classList.add('incvat_')
        var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

        var productObj = dataStore.methods().getProductById(findObj);

        var qty_sub_tside = ""
        for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
            if (INC.clientConfig.added_product_sku[q].skus == productObj.id) {
                qty_sub_tside = INC.clientConfig.added_product_sku[q].qtys
                break;
            }
        }
        if (client_add_btn == "client_add_btn") {
            qty_sub_tside = qty
        } else {
            if (qty_sub_tside == "" || qty_sub_tside == 0) {
                qty_sub_tside = qty
            }
        }

        productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
        productBlock.setAttribute('id', productObj.id)
        productBlock.setAttribute('sku', productObj.sku)
        productBlock.setAttribute('mainId', productObj.mainId)
        productBlock.setAttribute('qty', '1')
        productBlock.setAttribute('type_bundle', type_bundle)
        productBlock.classList.add(type_bundle)
        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elPriceActiveTextExc = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextExc"));
        var elPriceRegularTextExc = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularTextExc"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
        var eltextmesg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextMsg"));
        var elmoreproducttext = document.querySelector('.inc_cart_added_right_btn_img')
        var eladdedqtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));

        elPriceActiveTextExc.classList.add('inc_cart_added_product_desc_price_active_text')
        elPriceRegularTextExc.classList.add('inc_cart_added_product_desc_price_regular_text')
        elPriceActiveText.classList.add('incvat_')
        elPriceRegularText.classList.add('incvat_')
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activepriceExc = 0;
            subtotal_regularExc = 0;
        }
        sbCartBlock.setAttribute("style", "justify-content: flex-start;");
        var elImgTag;
        if(productObj.imageURL.indexOf('undefined') == -1){
            elImgTag = INC.methods.generateHTMLTags('img', {
                src: productObj.imageURL
            });
            if(onloadpdp == true){
                elImgTag.src = productObj.imageURL
            }
        }else{
            elImgTag = document.createElement('img')
        }
        setwidtheightimg(null,null,'justadded',elImgTag)
        elImg.appendChild(elImgTag);

        elTitleText.innerHTML = productObj.name;
        var color = "";
        var size = "";
        var just_check_prod_block;
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-id=' + '"' + productObj.sku + '"' + ']')
        } else {
            just_check_prod_block = document.querySelector('.inc_product_module_block[data-id=' + '"' + productObj.sku + '"' + ']')
        }
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }

        if (color != "") {

            elAttColorText.innerText = color;
        }

        elAttsizeText.innerText = size;
        var p_type_details = document.createElement('div');
        p_type_details.classList.add('del_message')
        if (type_bundle == "collection") {
            p_type_details.innerText = "Click & Collect"
        } else {
            p_type_details.innerText = "Added for delivery"
        }
        if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
            productBlock.classList.add('cross')
            for (let e = 0; e < INC.clientConfig.OOS.length; e++) {
                if (INC.clientConfig.OOS[e] == productObj.id.split('-')[0]) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {

                        eltextmesg.classList.add('inc_error_msg')
                        
                        if (type_bundle == "collection") {
                            if (productObj.Field6 == "CollectOnly") {
                                p_type_details.innerText = "Not Added"
                                eltextmesg.innerText = "Sorry, not added for collection, insufficient stock"
                            } else {
                                p_type_details.innerText = "Not Added"
                                eltextmesg.innerText = "Note: Not available in store. Item added for delivery."
                            }
                            eltextmesg.style.color = "#555"
                        } else {
                            p_type_details.innerText = "Not Added"
                            eltextmesg.innerText = INC.clientConfig.OOS_MESG[e]
                            eltextmesg.style.color = "#c3332e"
                        }
                    }
                }
            }
        }

        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();

        var activePriceExc = parseFloat(productObj.excactivePrice).toFixed(2).toString();
        var regularPriceExc = parseFloat(productObj.excregularPrice).toFixed(2).toString();

        // debugger
        if (activePrice != regularPrice) {
            elHeadersubtotalactivetext.classList.add('priceRed');
        }

        elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elPriceActiveText.innerHTML = elPriceActiveText.innerText + "<span>"+INC.config.excvattext+"</span>";

        elPriceActiveTextExc.innerText = INC.clientConfig.currencySymbol + formatter.format(activePriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elPriceActiveTextExc.innerHTML = elPriceActiveTextExc.innerText + "<span>"+INC.config.excvattext+"</span>";

        var subtotalactiveprice;
        var subtotalregukarprice;
        if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
            if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty_sub_tside)
                subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty_sub_tside)
            } else {
                subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty_sub_tside)
                subtotalregukarprice = +subtotal_regular + (+regularPrice * qty_sub_tside)
            }
        } else {
            if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                subtotalactiveprice = +subtotal_activeprice
                subtotalregukarprice = +subtotal_activeprice
            } else {
                subtotalactiveprice = +subtotal_activeprice
                subtotalregukarprice = +subtotal_regular
            }
        }

        //exc price
        var subtotalactivepriceExc;
        var subtotalregukarpriceExc;
        if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
            if (subtotal_regularExc == "" && +regularPriceExc != 0 && regularPriceExc != "") {
                subtotalactivepriceExc = +subtotal_activepriceExc + (+activePriceExc * qty_sub_tside)
                subtotalregukarpriceExc = +subtotal_activepriceExc + (+regularPriceExc * qty_sub_tside)
            } else {
                subtotalactivepriceExc = +subtotal_activepriceExc + (+activePriceExc * qty_sub_tside)
                subtotalregukarpriceExc = +subtotal_regularExc + (+regularPriceExc * qty_sub_tside)
            }
        } else {
            if (subtotal_regularExc == "" && +regularPriceExc != 0 && regularPriceExc != "") {
                subtotalactivepriceExc = +subtotal_activepriceExc
                subtotalregukarpriceExc = +subtotal_activepriceExc
            } else {
                subtotalactivepriceExc = +subtotal_activepriceExc
                subtotalregukarpriceExc = +subtotal_regularExc
            }
        }
        //qty block
        var inc_product_desc_qty_block = generate_html_tag('div', 'inc_product_desc_qty_block');
        eladdedqtyblock.appendChild(inc_product_desc_qty_block)
        inc_product_desc_qty_block.classList.add('singleqty')
        var inc_product_desc_qty_down_block = generate_html_tag('div', 'inc_product_desc_qty_down_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_down_block)
        var inc_product_desc_qty_down_btn = generate_html_tag('div', 'inc_product_desc_qty_down_btn');
        inc_product_desc_qty_down_block.appendChild(inc_product_desc_qty_down_btn)

        var inc_product_desc_qty_input_block = generate_html_tag('div', 'inc_product_desc_qty_input_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_input_block)
        var elQtyInput = this.generateHTMLTags('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 999);
        elQtyInput.setAttribute('maxlength', 3);
        elQtyInput.setAttribute('readonly', '');
        elQtyInput.value = qty_sub_tside;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute('pattern', '[0-9]');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
        inc_product_desc_qty_input_block.appendChild(elQtyInput)



        var inc_product_desc_qty_up_block = generate_html_tag('div', 'inc_product_desc_qty_up_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_up_block)
        var inc_product_desc_qty_up_btn = generate_html_tag('div', 'inc_product_desc_qty_up_btn');
        inc_product_desc_qty_up_block.appendChild(inc_product_desc_qty_up_btn)
        var old_qty;
        if(document.querySelector('.inc_header_item_count_title_text').innerText.indexOf('ITEM(s)') >= 0){
            old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('ITEM(s)')[0].replace('(', '').trim()
        }else{
            old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('Item(s)')[0].replace('(', '').trim()
        }
        if(old_qty == '') {
            old_qty = 0
        }
        if(moduleType == "101" && document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
            old_qty = 0
        }
        var qtyDiv = document.createElement('div');
        qtyDiv.setAttribute("id", productObj.id);
        qtyDiv.innerText = 'x' + parseInt(qty);
        qtyDiv.style.display = "none"
        qtyDiv.classList.add("inc_qty_number_block");

        productBlock.childNodes[0].appendChild(qtyDiv)
        
        p_type_details.classList.add('p_type_details')
        p_type_details.setAttribute('style', 'display:block;width:100%')
        productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
        if (document.querySelector('.inc_cart_added_product_block[type_bundle="' + type_bundle + '"][id="' + productObj.id + '"]') == null) {
            sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
            productBlock.classList.add('just_added')
            setTimeout(function(){
                productBlock.classList.remove('just_added')
            },3000)
            if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                    if (client_add_btn == "client_add_btn") {
                        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
                            sidebarHeaderItemCountTitleText.innerHTML = ""+parseInt(qty_sub_tside)+" ITEM(s)"
                        }else{
                            sidebarHeaderItemCountTitleText.innerHTML = ""+parseInt(qty_sub_tside)+" Item(s)"
                        }
                    } else {
                        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
                            sidebarHeaderItemCountTitleText.innerHTML = (parseInt(old_qty) + parseInt(qty_sub_tside)) + " ITEM(s)"
                        }else{
                            sidebarHeaderItemCountTitleText.innerHTML = (parseInt(old_qty) + parseInt(qty_sub_tside)) + " Item(s)"
                        }
                    }
                }
            }else if(moduleType == "101" && document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                    sidebarHeaderItemCountTitleText.innerHTML = "0 Item(s)"
                }
            }
        } else {
            
            var addedel = document.querySelector('.inc_cart_added_product_block[type_bundle="' + type_bundle + '"][id="' + productObj.id + '"]')
            if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                if (addedel.classList.contains('cross') == false) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
                } else {
                    addedel.parentNode.removeChild(addedel)
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
                }
            } else if (addedel.classList.contains('cross') == false) {
                var qtys = addedel.querySelector('.inc_cart_added_product_qty_block input').value
                elQtyInput.value = (+parseInt(qtys) + +parseInt(qty));
                addedel.querySelector('.inc_product_desc_qty_input_block input').value = (+parseInt(qtys) + +parseInt(qty));
                addedel.parentNode.removeChild(addedel)
                sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
                if(document.querySelector('.inc_header_item_count_title_text') != undefined){
                    var addeditemqty = document.querySelector('.inc_header_item_count_title_text').innerText.split('ITEM')[0].trim()
                    var fnalqty = parseInt(addeditemqty) + parseInt(qty)
                    document.querySelector('.inc_header_item_count_title_text').innerText = ""+fnalqty+" Item(s)"
                }
            } else {
                sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
            }

        }
        sbCartBlock.style.justifyContent = "flex-start"

        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')
        var morecount;
        var alladdedprodlength;
        var tcount;
        if (client_add_btn == "client_add_btn") {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
            alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
            morecount = 2
            if (window.innerWidth < 820) {
                morecount = 1
            }
            tcount = alladdedprodlength - morecount + " More Item(s)"
            elmoreproducttext.innerHTML = "+" + tcount
            document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
        } else {
            if (old_qty != undefined) {
                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                    morecount = 2
                    if (window.innerWidth < 820) {
                        morecount = 1
                    }
                    alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                    if (alladdedprodlength > morecount) {
                        tcount = alladdedprodlength - morecount + " More Item(s)"
                        
                        if(document.querySelector('.inc_sidebar_cart_added_block.active') != null){
                            elmoreproducttext.innerHTML = "Show Less"
                        }else{
                            elmoreproducttext.innerHTML = "+" + tcount
                        }
                        document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
                        document.querySelector('.inc_cart_added_right_btn_block').style.visibility = "visible"
                    } else {
                        elmoreproducttext.innerHTML = ""
                    }
                    
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_' + alladdedprodlength)
                    if (alladdedprodlength == 1) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
                    } else if (alladdedprodlength == 2) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
                    } else if (alladdedprodlength == 3) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
                    } else if (alladdedprodlength > 3) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
                    }
                }
            }
        }
        alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_' + alladdedprodlength)
        if (alladdedprodlength == 1) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
        } else if (alladdedprodlength == 2) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
        } else if (alladdedprodlength == 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
        } else if (alladdedprodlength > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
        }

        

        if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
            getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
        }

        elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)

        if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        } else {
            
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elHeadersubtotalregulartext.innerHTML = ""
        }

        elHeadersubtotalactivetextExc.setAttribute('subtotalactiveprice', subtotalactivepriceExc)
        elHeadersubtotalregulartextExc.setAttribute('subtotalregularprice', subtotalregukarpriceExc)

        if (+subtotalactivepriceExc != null && (+subtotalactivepriceExc < +subtotalregukarpriceExc)) {
            elHeadersubtotalactivetextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactivepriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
            elHeadersubtotalregulartextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarpriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        } else {
            
            elHeadersubtotalactivetextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactivepriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
            elHeadersubtotalregulartextExc.innerHTML = ""
        }

        if (window.innerWidth > 819) {
            if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
            } else {
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
            }
        } else {
            if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
            } else {
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
            }
        }
    }
    crosscategoryprodcount()

}

INC.methods.createAMBlock = function (ticket,PDP_type,recommendation) {
    document.querySelector('body').classList.add('inc_bundles');
    function getViewElement(className) {
        return amBlock.querySelector(getSelectorClassName(classNames, className));
    }
    if(INC.dataStore.dataStoreObj.undefined == undefined){
        var classNames = INC.uiConfig.am.className;
        var amBlock = this.getElementChilds("afModalBlock", "am");
        var getSelectorClassName = INC.methods.getSelectorClassName;
        if(PDP_type == 'PLP') {
            amBlock.classList.add('plp_recs')
        }
        if(PDP_type == "PDP") {
            amBlock.classList.add('pdp_recs')
        }
        getViewElement("afProductListBlock").innerHTML = "";

        var elAmTitleText = getViewElement("afModalTitleText");

        var amProductListBlock = getViewElement("afProductListBlock");
        const mediaQuery = window.matchMedia("(min-width: 992px)");
        var productIds = [];
        const element = document.querySelector('.container .right-aside');
        let stickyLayout = false;
        if(element != null) {
            const styles = window.getComputedStyle(element);
            if(styles.position == "sticky" && mediaQuery.matches) {
                amBlock.classList.add('inc_sticky');
                stickyLayout = true;
            }
        }
        Array.prototype.forEach.call(document.querySelectorAll('.item-delite button'), function (elProductCode) {
            productIds.push(elProductCode.getAttribute('onclick').split("('")[1].split("')")[0]);
        });
        if(productIds.length == 0){
            Array.prototype.forEach.call(document.querySelectorAll('#itemList .item .delete a'), function (elProductCode) {
                productIds.push(elProductCode.getAttribute('onclick').split("GaTagAdapterRemoveToCart(")[1].split(')')[0].replace("'","").replace("'","").replace('"','"').replace('"','"'));
            });
        }
        if(productIds.length == 0){
            Array.prototype.forEach.call(document.querySelectorAll('.order-item__product .product-code-number'), function(elProductCode) {
                productIds.push(elProductCode.innerText.trim());
            });
        }

        let bundleProductsArray=[]
        if(recommendation == "recommendation" || PDP_type == "PDP" || PDP_type == "PLP"){
            bundleProductsArray = INC.config.recommendationProduct;
        }else{
            bundleProductsArray = INC.dataStore.bundleProductsArray;
        }
        
        if(PDP_type == "PDP" || recommendation == "recommendation" || PDP_type == "PLP"){
            amBlock.classList.add('inc_rec_length'+INC.config.recommendationProduct.length)
            if(INC.config.recommendationProduct.length < 4){
                amBlock.classList.add('inc_less_than_4')
            }
            var duplamid=[]
            bundleProductsArray.forEach(function(mainProductId) {
                if (duplamid.indexOf(mainProductId) == -1) {
                    if(Object.keys(bundleProductsArray).length > 0){
                        var elAmTitleText = getViewElement("afModalTitleText");
                        if (PDP_type == "PDP" || PDP_type == "productList") {
                            elAmTitleText.innerText = "Similar products";
                        } else {
                            elAmTitleText.innerText = "Customers Also Bought";
                        }
                    }
                    duplamid.push(mainProductId)
                    var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                        mainId: mainProductId
                    });
                    var prd_modulerec = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock, null, true);
                    if (prd_modulerec.getAttribute('data-id') != "undefined") {
                        amProductListBlock.appendChild(prd_modulerec);
                    }
                    if (PDP_type == "PLP") {
                        elAmTitleText.innerText = "Best sellers";
                    } else {
                        elAmTitleText.innerText = "Similar Products";
                    }
                }
            });
        } else{
            bundleProductsArray.forEach(function (mainProductId) {
                if(INC.config.Product_id != mainProductId){
                    if (productIds.indexOf(mainProductId) == -1) {
                        elAmTitleText.innerText = INC.config.BeforeYouChecktext;
                        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                        amProductListBlock.appendChild(INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false,amBlock));
                    }
                }
            });
        }

        var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function() {
                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('simple') == false){
                    productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }

                if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_af_product-list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_module_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_modal_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;
                if (qty == undefined || qty == "") {
                    qty = 1
                }
                if(INC.config.pageType == "productList"){
                    var p_ids=productBlockNode.getAttribute('data-main_id');
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                }
                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                var productModuleBlock = productBlockNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                
                if(flag_check == 1){
                    if(productBlockNode.querySelector('.inc_product_showcase_block .inc_product_desc_add_text') != null) {
                        productBlockNode.querySelector('.inc_product_showcase_block .inc_product_desc_add_text').innerText = "Adding..."
                    }
                    if(productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text') != null) {
                        productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text').innerText = "Adding..."
                    }
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                }else{
                    
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                }
                
            });
        });
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function() {

                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('simple') == false){
                    productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }

                if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_module_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;
                if (qty == undefined || qty == "") {
                    qty = 1
                }
                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                if (productBlockNode.querySelector('.img_color_swatch') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                    } else {
                        productBlockNode.querySelector('.img_color_swatch').click()
                    }
                } else {
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                }
            });
        });
        if(amProductListBlock.querySelector('.inc_product_module_block') != null){
            INC.methods.clear();
            if(recommendation == "recommendation" && PDP_type == "PDP" ){
                var amBlockSibling = document.querySelector('.container') || document.querySelector('body');
                if(amBlockSibling != null){ 
                    var nexamsib = amBlockSibling.nextElementSibling
                    if(document.querySelector('.inc_pdp_block') != null){
                        nexamsib = amBlockSibling.nextElementSibling.nextElementSibling
                        nexamsib.parentNode.insertBefore(amBlock, nexamsib);
                    }else{
                        nexamsib.parentNode.insertBefore(amBlock, nexamsib);
                    }
                    
                }
            }else if(recommendation == "recommendation" && PDP_type == "PLP" ){
                var plpPlc = document.querySelector('.legal-info.container');
                var plpPlacement = document.querySelector('body main');
                var plpcatLanding = document.querySelector('body main .category-landing')
                if(plpPlc != null){ 
                    let containerplacement = plpPlc.previousElementSibling
                    containerplacement.appendChild(amBlock)
                }else if(plpcatLanding != null) {
                    const left_side_hidden = document.querySelector('body main .container .row');
                    const element = document.querySelector('.left-aside');
                    const styles = window.getComputedStyle(element);
                    const displayProp = styles.getPropertyValue('display');
                    if(displayProp == 'none') {
                        document.querySelector('html').classList.add('plp_best_seller');
                        // if(plpcatLanding.previousElementSibling.classList.contains('banner') == true) {
                        //     let categPlc = document.querySelector('body main .container .row .content')
                        //     categPlc.appendChild(amBlock)
                        // } else {
                        //     plpcatLanding.insertAdjacentElement('afterend', amBlock);
                        // }
                        plpcatLanding.insertAdjacentElement('afterend', amBlock);
                    } else if(left_side_hidden != null) {
                        left_side_hidden.insertAdjacentElement('afterend', amBlock);
                    }
                } else if(plpPlacement != null) {
                    plpPlacement.appendChild(amBlock)
                }
            } else {
                if(INC.config.pageType == "cartPage"){
                    var elAMPosition_tab = document.querySelector('#tealium-pageload-data');
                    var elmaintab = document.querySelector('main');
                    var elAMposition_before = document.querySelector('.cart-recentlyviewed');
        
                    var elAMPosition123 =  document.querySelector('main').children[document.querySelector('main').childElementCount-1].children[document.querySelector('main').children[document.querySelector('main').childElementCount-1].childElementCount-1];
                    INC.methods.clear();
        
                    if (window.innerWidth > 819) {
                        elAMPosition123.parentNode.appendChild(amBlock)
        
                    } else if (window.innerWidth > 767) {
                        if (elAMposition_before != null) {
                            var parentDiv = elAMposition_before.parentNode
                            parentDiv.insertBefore(amBlock, elAMposition_before)
                        } else {
                            if(elAMPosition_tab != null){
                                elAMPosition_tab.appendChild(amBlock);
                            }else{
                                elmaintab.appendChild(amBlock);
                            }
                        }
                    } else {
                        elAMposition_before = document.querySelector('.container .row aside.right-aside');
                        elAMposition_before.appendChild(amBlock)
                    }
                }else if(INC.config.pageType == "homePage"){

                    ////////Creating HR line/////////////
                    INC.methods.clear();
                    var hr_container = document.createElement('div');
                    hr_container.classList.add('container','inc_hr');
                    var hr_line = document.createElement('hr');
                    hr_line.classList.add('fullwidth-blue-hr','mt-0');
                    INC.methods.clear();
                    hr_container.append(hr_line);

                    //////////////Appending////////////////
                    var reference_node = document.querySelector('.component__actions');
                    reference_node.parentNode.insertBefore(hr_container, reference_node.nextSibling);

                    var am_container = document.createElement('div');
                    am_container.classList.add('container');
                    am_container.appendChild(amBlock);
                    
                    let elAMPosition = document.querySelector('.inc_hr');
                    INC.methods.clear();
                    elAMPosition.parentNode.insertBefore(am_container,elAMPosition.nextSibling);
                    document.querySelector('.inc_af_block .inc_af_title_block .inc_af_title_text_block .inc_af_title_text').innerText = "Featured Products";

                    //////////////Styling for Home Page////////////////
                }
            }

            var prd_length=3
            if(window.innerWidth > 1199){
                prd_length=4
            }
            if(stickyLayout && mediaQuery.matches) {
                prd_length=3;
            }
            let opacity_ = "0.5"
            if(PDP_type == "PLP") {
                opacity_ = "1"
            }
            let opacity_1 = "1"
            if(PDP_type == "PLP") {
                opacity_1 = "1"
            }
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "hidden";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "hidden";
            
            if(amBlock.parentNode != null){
                var productBlocks = amProductListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
                var sliderBtnCounter = 0;

                if (productBlocks.length >= (prd_length+1)) {
                    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");
                    amBlock.querySelector('.inc_af_left_btn_img').classList.add('disabled')
                    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");
                }
                if (PDP_type == "PLP") {
                    amBlock.querySelector('.inc_af_right_btn_img').innerHTML = `
                        <svg class="svg-inline--fa fa-chevron-down fa-w-14 rotate-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>`;
                
                    amBlock.querySelector('.inc_af_left_btn_img').innerHTML = `
                        <svg class="svg-inline--fa fa-chevron-down fa-w-14 rotate-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>`;
                }
                amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).addEventListener("click", function () {
                    sliderBtnCounter++;
                    if (sliderBtnCounter >= productBlocks.length - (prd_length+1)) {
                        sliderBtnCounter--;
                    }
                    var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                    // productBlocks[sliderBtnCounter - 1].style.display = "none";
                    var cc_ount=3;
                    if(window.innerWidth > 1199){
                        cc_ount = 4
                        if(window.innerWidth > 1449){
                            cc_ount = 4
                        }
                    }
                    if(stickyLayout && mediaQuery.matches) {
                        cc_ount = 3;
                    }
                    var wid_sld=270
                    if (INC.config.recommendation == true){
                        if(window.innerWidth > 1199){
                            wid_sld=260
                        }
                    } else {
                        if(window.innerWidth > 1199){
                            wid_sld=280
                        }
                    }
                    if(PDP_type == "PLP") {
                        let width_slide = ""
                        let width_sld = document.querySelector('.inc_af_block .inc_product_module_block').clientWidth
                        wid_sld = width_sld;
                    }
                    if(stickyLayout && mediaQuery.matches) {
                        let width_slide = ""
                        let width_sld = document.querySelector('.inc_af_block .inc_product_module_block').clientWidth
                        wid_sld = width_sld;
                    }
                    if(+INC.clientConfig.slidevalue + +cc_ount < all_p_length){
                        amBlock.querySelector('.inc_af_left_btn_img').classList.remove('disabled')
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:"+opacity_1+"");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:"+opacity_1+"");
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - wid_sld) + 'px';
                        var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    
                    if(+INC.clientConfig.slidevalue + +cc_ount == all_p_length){
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");
                        amBlock.querySelector('.inc_af_right_btn_img').classList.add('disabled')
                    }
                });

                amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function () {
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                    
                    var wid_sld=270;
                    if (INC.config.recommendation == true){
                        if(window.innerWidth > 1199){
                            wid_sld=260
                        }
                    } else {
                        if(window.innerWidth > 1199){
                            wid_sld=280
                        }
                    }
                    if(PDP_type == "PLP") {
                        let width_slide = ""
                        let width_sld = document.querySelector('.inc_af_block .inc_product_module_block').clientWidth
                        wid_sld = width_sld;
                    }
                    if(stickyLayout && mediaQuery.matches) {
                        let width_slide = ""
                        let width_sld = document.querySelector('.inc_af_block .inc_product_module_block').clientWidth
                        wid_sld = width_sld;
                    }
                    if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                    if(INC.clientConfig.slidevalue > 0){
                        amBlock.querySelector('.inc_af_right_btn_img').classList.remove('disabled')
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:"+opacity_1+"");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:"+opacity_1+"");
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + wid_sld) + 'px';
                        var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                        // menu.style['transitionDuration'] = '0.5s'
                        // menu.style['marginLeft'] = INC.clientConfig.offset
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if(INC.clientConfig.slidevalue == 0){
                        amBlock.querySelector('.inc_af_left_btn_img').classList.add('disabled')
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:"+opacity_+"");

                    }
                });
                setTimeout(function(){
                    if(document.querySelector('.inc_af_title_block') != null){
                        document.querySelector('.inc_af_title_block').setAttribute('role',"contentinfo")
                    }
                    setTimeout(function(){
                        let sel_variant = document.querySelectorAll('.inc_af_block .inc_variant_new1 .inc_variant_tag')
                        for(let b=0;b<sel_variant.length;b++){
                            if(sel_variant[b] != undefined){
                                if(sel_variant[b].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                    sel_variant[b].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                                }
                                let sel_var = sel_variant[b].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                
                                let alloptionss = sel_variant[b].querySelectorAll('option')
                                for(let j=0;j<alloptionss.length;j++){
                                    let texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                                    if(sel_var != undefined){
                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            alloptionss[j].selected = 'selected'
                                        }else{
                                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                                alloptionss[j].selected = 'selected'
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        for(let l=0;l<sel_variant.length;l++){
                            if(sel_variant[l] != undefined){
                                let sel_var = sel_variant[l].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                let selv = sel_variant[l]
                                let alloptionss = sel_variant[l].querySelectorAll('option')
                                for(let m=0;m<alloptionss.length;m++){
                                    if(sel_var != undefined){
                                        let texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }
                                    }
                                }
                            }
                        }
                        // onloadpdp = true
                    },1000)
                },100)
                setTimeout(function(){
                    onloadpdp = true
                },400)
            }
        }

        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
            document.querySelector('html').classList.add('wickes_inc_configurator')
        }else{
            document.querySelector('html').classList.add('wickes_inc_no_configurator')
        }
    }
    if (INC.config.pageType == "cartPage") {
        if (document.querySelector('.inc_af_block') != null) document.querySelector('.inc_af_block').classList.add('af_cart_page')
    }else if(INC.config.pageType == "pdp"){
        if (document.querySelector('.inc_af_block') != null){
            document.querySelector('.inc_af_block').classList.add('inc_recommendations')
        }
    }
}
INC.methods.createPDPBlock = function (sidebar) {
    function getViewElement(className) {
        return pdpBlock.querySelector(getSelectorClassName(classNames, className));
    }
    if (INC.bundles) {
        document.querySelector('body').classList.add('inc_bundles');
        var empty_sidebarflag=false
        if(INC.dataStore.dataStoreObj != undefined){
            if(INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined){
                if(INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined){
                    if(INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679"){
                        empty_sidebarflag  = true
                    }
                }
            }
        }
        if(sidebar != "sidebar"){
            if(INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == false){
                var classNames = INC.uiConfig.pdp.className;
                var pdpBlock = this.getElementChilds("pdpModalBlock", "pdp");
                if(INC.config.stockinfo == false){
                    //pdpBlock.style.display = "none"
                }
                var getSelectorClassName = INC.methods.getSelectorClassName;
                Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock")), function (block) {
                    block.parentNode.removeChild(block);
                });
    
                
                
                var modalTitle = getViewElement("pdpModalTitleText");
                modalTitle.innerText = INC.config.FBTTitle;
                
                var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
               
                var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false,pdpBlock);
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                var elPdpMainProductBlock = getViewElement("pdpModalMainProductBlock");
                var pdpBundleProductListItemsBlock = getViewElement("pdpBundleProductListItemsBlock");
                pdpBundleProductListItemsBlock.innerHTML = "";
                
                elPdpMainProductBlock.innerHTML = "";
                var mainprodtitletext = document.createElement('div')
                mainprodtitletext.classList.add('mainprodtitletext')
                mainprodtitletext.innerText = "Current Item"
                elPdpMainProductBlock.appendChild(mainprodtitletext)
                elPdpMainProductBlock.appendChild(mainProductBlock);
                var mainProductHeader = getViewElement("productHeaderTitleText");
                mainProductHeader.innerText = "Main Product".toUpperCase();
                var pdpBundleProductListMainBlock = getViewElement("pdpBundleProductListMainBlock");
                pdpBundleProductListMainBlock.innerHTML = "";
    
                
    
                var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;
    
                if (INC.bundles) {
                    for (var i = 0; i < productVisibleCount; i++) {
                        if(tickboxexcludeprod.indexOf( bundleProductsArray[i]) == -1){
                            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                            var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true,pdpBlock);
                            if (window.innerWidth <= 819) {productBlock.style.display = "none"}
                            pdpBundleProductListMainBlock.appendChild(productBlock);
                            
                            var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                            pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                            var item_title_head = productBlock.querySelector('.inc_product_desc_title_text_header')
                            item_title_head.innerHTML = "Current item"
                            item_title_head.style.textTransform = "none"
                        }
                    }
                    var header = getViewElement("pdpBundleProductHeaderText");
                    if (header != null) {
                        header.innerText = "Frequently bought with"
                        header.style.textTransform = "none"
                    }
                    pdpBundleProductListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock")).style.display = "block";
        
                    var pdpBundleCartBlock = this.createPDPBundleCartBlock();
                    var rpdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
                    rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                    pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleBlock")).appendChild(pdpBundleCartBlock);
        
                    if(pdpBlock.classList.contains('promo_available') == true){
                        var cssht = '.inc_pdp_block.promo_available .inc_product_desc_offertext_block {display: block!important; min-height: 18px;}';
                        var css_inc = document.createElement('style'); 
                        css_inc.type = 'text/css'; 
                        css_inc.innerHTML=cssht
                        document.getElementsByTagName("head")[0].appendChild(css_inc); 
                    }
                    
                    var clientselectelm = document.querySelector('.pdp-price-container select#variant')
                    var client_var = "";
                    var sel_variant = "";
                    if(clientselectelm != null){
                        var selvar = clientselectelm;
                        sel_variant = selvar.options[selvar.selectedIndex].getAttribute("value");
                        client_var = selvar.options[selvar.selectedIndex].innerText.toLocaleLowerCase();
                    }
                    
                    sel_variant = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_variant_tag')
                    if(sel_variant != null){
                        let alloptionss = sel_variant.querySelectorAll('option')
                        for(let j=0;j<alloptionss.length;j++){
                            if(client_var.indexOf('please select') >= 0 || client_var == ""){
                                if(j == 1){
                                    alloptionss[j].selected = 'selected'
                                    inc_onchange_color_variant(sel_variant)
                                    break;
                                }
                            }else{
                                if(alloptionss[j].getAttribute('datasize') == client_var.toLocaleLowerCase()){
                                    alloptionss[j].selected = 'selected'
                                    inc_onchange_color_variant(sel_variant)
                                    break;
                                }
                            }
                        }
                    }
                    //INC.config.Product_id
                    var sel_variant_1 = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_variant_tag')
                    if(sel_variant_1 != null){
                        let alloptionss = sel_variant_1.querySelectorAll('option')
                        for(let j=0;j<alloptionss.length;j++){
                            if(alloptionss[j].getAttribute('data-cpid') == INC.config.Product_id){
                                alloptionss[j].selected = 'selected'
                                inc_onchange_color_variant(sel_variant_1)
                                break;
                            }
                        }
                    }
                    var sel_variant1 = pdpBlock.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block')
                    //inc_variant_tag
                    
                    for(let b=0;b<sel_variant1.length;b++){
                        if(b < 2 || sel_variant1[b].querySelector('.inc_variant_new1') != null){
                            if(sel_variant1[b].querySelector('.inc_variant_tag') != null){
                                if(sel_variant1[b] != undefined){
                                    var seltag=sel_variant1[b].querySelector('.inc_variant_tag')
                                    if(seltag.parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                        seltag.parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                                    }
                                    var sel_var = seltag.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                    var alloptionss = seltag.querySelectorAll('option')
                                    for(let j=0;j<alloptionss.length;j++){
                                        var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                                        if(sel_var != undefined){
                                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                                alloptionss[j].selected = 'selected'
                                            }else{
                                                if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                                    alloptionss[j].selected = 'selected'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
    
                    if(window.innerWidth >1139){
                        for(let l=0;l<sel_variant1.length;l++){
                            if(sel_variant1[l].querySelector('.inc_variant_tag') != null){
                                if(l < 2 || sel_variant1[l].querySelector('.inc_variant_new1') != null){
                                    if(sel_variant1[l] != undefined){
                                        let seltagsa=sel_variant1[l].querySelector('.inc_variant_tag')
                                        let sel_var = seltagsa.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                        let selv = seltagsa
                                        let alloptionss = seltagsa.querySelectorAll('option')
                                        for(let m=0;m<alloptionss.length;m++){
                                            if(sel_var != undefined){
                                                let texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
        
                                                if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                                    inc_onchange_color_variant(selv)
                                                }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                                    inc_onchange_color_variant(selv)
                                                }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                                    inc_onchange_color_variant(selv)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                   //check price mismatch here
                    if(window.location.host == 'www.wickes.co.uk'){
                        if(pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_price_active_text') != null){
                            
                            let ourVariantActive = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_price_active_text').innerText.split('Inc')[0].replace('£','').replace(',','')
                            let ourVariantRegular = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_price_regular_text').innerText.split('Inc')[0].replace('£','').replace(',','')

                            let ourVariantActive_ex = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_price_active_text_exc').innerText.split('Exc')[0].replace('£','').replace(',','')
                            let ourVariantRegular_ex = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_price_regular_text_exc').innerText.split('Exc')[0].replace('£','').replace(',','')
                            var prdid = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-id')
                            let ourActive = null
                            let ourSpecial = null
                            let ourActive_ex = null
                            let ourSpecial_ex = null

                            if (ourVariantRegular == "") {
                                ourActive = ourVariantActive
                            } else {
                                ourActive = ourVariantRegular
                                ourSpecial = ourVariantActive
                            }
                            if (ourVariantRegular_ex == "") {
                                ourActive_ex = ourVariantActive_ex
                            } else {
                                ourActive_ex = ourVariantRegular_ex
                                ourSpecial_ex = ourVariantActive_ex
                            }
                        
                            let mismatch = incPriceMismatch(ourActive, ourSpecial,ourActive_ex, ourSpecial_ex, prdid)
                            
                            if (mismatch) {
                                if (pdpBlock.querySelector('.inc_pdp_block')) {
                                    pdpBlock.querySelector('.inc_pdp_block').style.display = "none"
                                }
                                if (pdpBlock.querySelector('.inc_bundle_avail_block')) {
                                    pdpBlock.querySelector('.inc_bundle_avail_block').style.display = "none"
                                }
                                return;
                            }
                        }
                    }
                    
                   //
                    if(pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block') == null){
                        pdpBlock.style.display="none"
                    }
                    INC.methods.clear();
                    if (window.innerWidth < 768) {
                        var pdpBlockSiblingss = document.querySelector('.pdp')
                        pdpBlockSiblingss.insertBefore(pdpBlock, pdpBlockSiblingss.childNodes[11]);
                    } else {
                        var sib_parsys = document.querySelector('.pdp');
                        sib_parsys.parentNode.insertBefore(pdpBlock, sib_parsys.nextSibling);
                    }
        
        
                    var elProductAddBlock = pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"));
        
                    
        
                    var productBlocks = getViewElement("pdpBundleProductListBlock").querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
                    var inc_close_moreprod = getViewElement("pdpBundleProductListItemsWrapperHeaderclose")
                    var show_more_less_text =  getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                    show_more_less_text.innerHTML = INC.config.SeeOtherProdText;
                    show_more_less_text.classList.add('down_wrrow');
                    
                    if (INC.config.deviceType == "mobile") {
                        if(document.querySelectorAll('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block')[0] != undefined){
                            document.querySelectorAll('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block')[0].click()
                        }
        
                        var eltitletext = document.querySelector('.inc_pdp_bundle_product_list_wrapper_header_text_block')
                        var spanText = document.createElement('span')
                        spanText.innerText = INC.config.SeeOtherProdText
                        eltitletext.appendChild(spanText)
                    }
        
                    inc_close_moreprod.addEventListener('click',function(){
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open')
                        document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
                    })
                    getViewElement("pdpBundleProductListItemsBlockShowMoreLess").addEventListener("click", function (ev) {
                        var show_more_less_text =  getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                        var clickshowmore=ev.target.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text')
                        if(clickshowmore == null){
                            clickshowmore = ev.target
                        }
                        if(clickshowmore.classList.contains('down_wrrow') == true){
                            show_more_less_text.innerHTML = "Show less products";
                            show_more_less_text.classList.remove('down_wrrow');
                            show_more_less_text.classList.add('up_wrrow');
                            if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= window.window.$(".inc_pdp_block").offset().top
                            }
                            document.querySelector('.inc_pdp_bundle_product_list_wrapper_items_block').classList.add('active');
                            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                    setTimeout(function(){
                                        if(document.querySelector('.inc_pdp_block') != null){
                                            inc_scroll_height= window.window.$(".inc_pdp_block").offset().top
                                        }
                                    },100)
                                }
                            }
                        }else{
                            show_more_less_text.innerHTML = INC.config.SeeOtherProdText;
                            show_more_less_text.classList.remove('up_wrrow');
                            show_more_less_text.classList.add('down_wrrow');
                            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
                                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                                    document.querySelector('body').style.position = "relative"
                                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                }
                            }
                            document.querySelector('body').style.position = "relative"
                            document.querySelector('html').classList.remove('inc_overlay');
                            document.querySelector('html').classList.remove('inc_popup_open')
                            document.querySelector('.inc_pdp_bundle_product_list_wrapper_items_block').classList.remove('active');
                        }
                    });
                    getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                    getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
                    var sliderBtnCounter = 0;
                    var lengthCount = productBlocks.length + 1;
                    var prd_length;
                    if(window.innerWidth < 1190){
                        prd_length = 1
                    }else{
                        prd_length = 2
                    }
                    if (productBlocks.length > prd_length) {
                        getViewElement("pdpBundleProductRightBtnBlock").addEventListener("click", function () {
                            var prod_c = 1;
                            var width_prod = 260;
                            if(window.innerWidth > 1189){
                                prod_c = 2
                                width_prod = 270;
                            }else if(window.innerWidth > 900){
                                prod_c = 1
                                width_prod = 260;
                            }else if(window.innerWidth < 901){
                                prod_c = 1
                                width_prod = 240;
                            }
                            
                            if(INC.clientConfig.slidevalue+prod_c < productBlocks.length){
                                getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                                getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue++
                                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                                var menu = getViewElement("pdpBundleProductListMainBlock");
                                menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                            }
                            if(INC.clientConfig.slidevalue+prod_c == productBlocks.length){
                                getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                                getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:0.5");
                            }
                            sliderBtnCounter++;
                            if (sliderBtnCounter > lengthCount - 3) {
                                sliderBtnCounter--;
                            }
                        });
                        
        
                        getViewElement("pdpBundleProductLeftBtnBlock").addEventListener("click", function () {
                            var width_prod = 260;
                            if(window.innerWidth > 1189){
                                width_prod = 270;
                            }else if(window.innerWidth > 900){
                                width_prod = 260;
                            }else if(window.innerWidth < 901){
                                width_prod = 240;
                            }
                            if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                            if(INC.clientConfig.slidevalue > 0){
                                getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                                getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue--
                                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                                var menu = getViewElement("pdpBundleProductListMainBlock");
                                menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                            }
                            if(INC.clientConfig.slidevalue == 0){
                                getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                                getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
                            }
                            sliderBtnCounter--;
                            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                        });
                    }
                    
                    if (!(productBlocks.length > prd_length)) {
                        getViewElement("pdpBundleProductRightBtnBlock").style.visibility = "hidden";
                        getViewElement("pdpBundleProductLeftBtnBlock").style.visibility = "hidden";
                    }
                    setTimeout(function(){
                        for (var i = 0; i < 8; i++) {
                            if (typeof (elProductAddBlock[i]) != "undefined" && i % 2 != 0){
                                if(window.innerWidth > 1139){
                                    if(i == 1 || i == 3 || i == 5){
                                        var module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                        if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null){
                                            if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_block.active') == null){
                                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                            }
                                        } 
                                        if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                            if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.active') == null){
                                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                            }
                                        }
                                        elProductAddBlock[i].click();
                                    }
                                }else if(i == 1){
                                    let module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                    if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null){
                                        if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_block.active') == null){
                                            module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                        }
                                    } 
                                    if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                        if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.active') == null){
                                            module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                        }
                                    }
                                    elProductAddBlock[i].click();  
                                }
                            } 
        
                        }
                    },50)
                    
                    setTimeout(function(){
                        onloadpdp = true
                    },400)
                }
            }
        }
        if (INC.bundles) {
            if(sidebar == "sidebar" && INC.bundles == true){
                this.createSidebarBlock();
            }
        }
    }
}

INC.methods.createPDPBundleCartBlock = function () {
    var classNames = INC.uiConfig.pdp.className;
    var pdpBundleCartBlock = this.getElementChilds("pdpModalBundleCartBlock", "pdp");
    var getSelectorClassName = INC.methods.getSelectorClassName;
    function getViewElement(className) {
        return pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }
    
    var elBundleCartTitleText = getViewElement("pdpBundleCartTitleText");
    var elBundleCartSummaryViewBtnText = getViewElement("pdpBundleCartSummaryViewBtnText");
    var elBundleCartAddBtnBlock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
    var elBundleCartAddBlock = getViewElement("pdpBundleCartSummaryAddBlock");
    var elBundleCartTitleTextblock = getViewElement("pdpBundleCartTitleTextBlock");
    var elBundleCartAddBtnclickcollectBlock = getViewElement("pdpBundleCartSummaryAddBtnClickCollectBlock");

    elBundleCartTitleText.innerText = "Price summary";

    elBundleCartTitleTextblock.addEventListener('click',function(){
        if(window.innerWidth < 820){
            var cartsummaryel = this.parentNode.parentNode.parentNode;
            this.classList.toggle('inc_active')
            cartsummaryel.classList.toggle('inc_active')
            if(document.querySelector('.inc_pdp_block') != null && onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= window.window.$(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  window.window.$(".inc_af_block").offset().top
                        }
                    },100)
                }
            }
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.toggle('active')  

                if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
                    cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="block";
                }else{
                    cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
                }
            
        }
    })

    var inc_checkout_exclude_item_block = generate_html_tag('div','inc_checkout_exclude_item_block')
    var inc_checkout_exclude_item_text = generate_html_tag('div','inc_checkout_exclude_item_text')
    inc_checkout_exclude_item_text.innerText = INC.config.ExcItemAlreadyinCartText
    inc_checkout_exclude_item_block.appendChild(inc_checkout_exclude_item_text)
    elBundleCartAddBlock.parentNode.insertBefore(inc_checkout_exclude_item_block,elBundleCartAddBlock)

    var inc_collect_point_checkout_block = generate_html_tag('div','inc_collect_point_checkout_block')
    var inc_collect_point_text = generate_html_tag('div','inc_collect_point_text')
    inc_collect_point_checkout_block.appendChild(inc_collect_point_text)

    var elBundleCartTitleImgBlock = getViewElement("pdpBundleCartTitleImgBlock");
    elBundleCartTitleImgBlock.addEventListener('click', function () {
        var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }else{
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="block";
        }
    });

    elBundleCartSummaryViewBtnText.innerText = "Added items";

    elBundleCartAddBtnBlock.addEventListener("click", function(e) {
        var mainpageIds = []
        for (var i in INC.dataStore.bundleCartProducts) {
            for (let x = 0; x < INC.dataStore.bundleCartProducts[i]; x++) {
                mainpageIds.push(i);
            }
        }
        if(document.querySelector('.inc_recommended_tabs_list_item_text') != null){
            document.querySelector('.inc_recommended_tabs_list_item_text').click()
        }
        var children = ProductArr.concat(mainpageIds);

        ProductArr = children
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        }
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
       
        var btn_cart = e.target
        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text" ){
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        }else{
            btn_cart.classList.add('inc_loading')
        }
        
        if (window.innerWidth < 820) {
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        } 
        setTimeout(function(){
            INC.methods.addBundleToCart(btn_cart, "delivery");
        },500)


        if(window.innerWidth < 820){
            document.querySelector('.inc_pdp_bundle_block').classList.remove('inc_active');
            var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }
               
            
        }
        

    });
    elBundleCartAddBtnclickcollectBlock.addEventListener("click", function(e) {
        //new sidebar functionality//
        var mainpageIds = []
        for (var i in INC.dataStore.bundleCartProducts) {
            for (let x = 0; x < INC.dataStore.bundleCartProducts[i]; x++) {
                mainpageIds.push(i);
            }
        }
        var children = ProductArr.concat(mainpageIds);

        ProductArr = children
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        }
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
       
        var btn_cart = e.target
        
        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
            btn_cart.parentNode.classList.add('inc_loading')
        }else{
            btn_cart.classList.add('inc_loading')
        }
        if (window.innerWidth < 820) {
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        }
        
        setTimeout(function(){
            INC.methods.addBundleToCart(btn_cart, "collection");
        },500)


        if(window.innerWidth < 820){
            document.querySelector('.inc_pdp_bundle_block').classList.remove('inc_active');
            var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }
               
            
        }

    });

    return pdpBundleCartBlock;
}
INC.methods.createSidebarBlock = function () {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var sbBlock = this.getElementChilds("sidebarModalBlock", "sidebar");
    var sidebar_dialoge_block =  document.createElement('div')
    sidebar_dialoge_block.classList.add('sidebar_outer')
    sidebar_dialoge_block.appendChild(sbBlock)
    var getSelectorClassName = INC.methods.getSelectorClassName;
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    
    getViewElement("sidebarCartAddedListBlock").innerHTML = "";

    var elHeaderContinueText = getViewElement("sidebarHeaderContinueText");
    var elHeaderTitleText = getViewElement("sidebarHeaderTitleText");
    var elHeaderTitleSubText = getViewElement("sidebarHeaderSubTitleText");
    var elHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elRecommendedTitleText = getViewElement("sidebarRecommendedTitleText");
    var elRecommendedTabsListBlock = getViewElement("sidebarRecommendedTabsListBlock");
    var elRecommendedProductsBlock = getViewElement("sidebarRecommendedProductsBlock");
    var elRecommendedProductsListBlock = getViewElement("sidebarRecommendedProductsListBlock");
    var elCheckoutContinueBtnText = getViewElement("sidebarCheckoutContinueBtnText");
    var elCheckoutBasketBtnText = getViewElement("sidebarCheckoutBasketBtnText");
    var elheaditemblock = getViewElement("sidebarHeaderItemBlock");
    var elheadtitleblock = getViewElement("sidebarHeaderTitleBlock");
    var elrectitleblock = getViewElement("sidebarRecommendedTitleBlock");
    var elcheckoutblock = getViewElement("sidebarCheckoutBlock");
    var elrecblock = getViewElement("sidebarRecommendedTabsBlock");
    var eladedblk = getViewElement("sidebarCartAddedListBlock")
    var elsidebarthumlistblock = getViewElement("sidebarRecommendedProductsListItemThumbBlock");

    var elrecomendblock = getViewElement("sidebarRecommendedBlock");
    


    var close_sisebar_icon  = generate_html_tag('span','close_sisebar_icon')
    elheadtitleblock.appendChild(close_sisebar_icon)

    //role="contentinfo"
    elheaditemblock.setAttribute('role',"banner")
    elrectitleblock.setAttribute('role',"banner")
    elheadtitleblock.setAttribute('role',"banner")
    elcheckoutblock.setAttribute('role',"contentinfo")
    elRecommendedProductsListBlock.setAttribute('role',"contentinfo")
    elRecommendedProductsListBlock.setAttribute('tabindex',0)
    elrecblock.setAttribute('role',"contentinfo")
    eladedblk.setAttribute('role',"contentinfo")

    
    
    elHeaderContinueText.innerText = "Back";
    elHeaderTitleText.innerText = INC.config.ItemAddedToCarttext;
    elHeaderTitleText.style.textTransform = "none"
    elHeaderTitleSubText.innerText = INC.config.ExcItemAlreadyinCartText
    elHeaderItemCountTitleText.setAttribute('style','text-transform: none;')
    elRecommendedTitleText.innerText = INC.config.OtherCustAlsoBoughtText;
    elRecommendedTitleText.style.textTransform = "none"
    elCheckoutContinueBtnText.innerText = INC.config.ContinueShopping;
    elCheckoutContinueBtnText.style.textTransform="none"

    var elCheckoutLink = document.createElement('a');
    elCheckoutLink.href = INC.clientConfig.checkoutLink;
    var elCheckoutTextDiv = document.createElement('div');
    elCheckoutTextDiv.innerText = INC.config.CartText;
    elCheckoutTextDiv.style.textTransform="none"
    elCheckoutTextDiv.setAttribute('draggable', 'false');
    elCheckoutLink.appendChild(elCheckoutTextDiv);
    elCheckoutBasketBtnText.appendChild(elCheckoutLink);
    

    var productCategoriesArray = dataStore.methods().getUniqueCatergories();
    var catlength = 0
    var categ_list = sortByKey(INC.config.category_seqId, 'id')
    
    var category_sequance = []
    if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
        elRecommendedTitleText.innerText = "You may need these to complete your project";
        catlength = 5
        category_sequance = INC.config.category_sequance
        elCheckoutTextDiv.innerText = "Checkout";
        elCheckoutContinueBtnText.innerText = "Continue Shopping";
    } else{
        category_sequance = productCategoriesArray
        catlength = 5
    }

    var progress_bar_block = document.createElement('div')
    progress_bar_block.classList.add('inc_recommended_tabs_list_progressbar_block')
    progress_bar_block.classList.add('inc_progress_1')
    elRecommendedTabsListBlock.parentNode.insertBefore(progress_bar_block,elRecommendedTabsListBlock)


    elRecommendedTabsListBlock.innerHTML = "";
    var category_count=0
    
    var tot_cat_length = Object.keys(productCategoriesArray).length
    elRecommendedTabsListBlock.classList.add('inc_categ_'+Object.keys(productCategoriesArray).length)


    if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
        for(let c=0;c<categ_list.length;c++){
            productCategoriesArray.forEach(function(productCategory) {
                if (category_count < catlength && productCategory != undefined) {
                    if(categ_list[c].category == productCategory){
                        if(category_sequance.indexOf(productCategory) >= 0){
                            category_count++
                            var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
                            var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
                            
                            sidebarTabsListItemText.innerText = productCategory;
                            
                            sidebarTabsListItemBlock.setAttribute('index',category_count);

                            sidebarTabsListItemBlock.addEventListener("click", function() {
                                elRecommendedProductsBlock.innerHTML = "";
                                elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                                var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                                elRecommendedProductsListBlock.innerHTML = "";
                                Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function(elTabsItemBlock) {
                                    elTabsItemBlock.classList.remove("active");
                                });
                                sidebarTabsListItemBlock.classList.add("active");
                                INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory);
                            });
                            var inc_progress_list_block = document.createElement('div');
                            inc_progress_list_block.classList.add('inc_progress_list_block')
                            progress_bar_block.appendChild(inc_progress_list_block);


                            var inc_progress_list_text = document.createElement('div');
                            inc_progress_list_text.innerText = productCategory;
                            inc_progress_list_text.classList.add('inc_progress_list_text')
                            inc_progress_list_block.appendChild(inc_progress_list_text);
                            inc_progress_list_block.setAttribute('index',category_count)
                            elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                        
                            var category_progress_count_block = document.createElement('div')
                            category_progress_count_block.classList.add('category_progress_count_block')
                            var category_progress_count_text = document.createElement('div')
                            category_progress_count_text.classList.add('category_progress_count_text')
                            if(tot_cat_length == category_count || category_count == 4){
                                category_progress_count_text.innerText = category_count
                            }else{
                                category_progress_count_text.innerText = category_count
                            }
                            if(category_count == 1){
                                inc_progress_list_block.classList.add('inc_active')
                                inc_progress_list_block.classList.add('progress_show')
                            }
                            category_progress_count_block.appendChild(category_progress_count_text)
                            inc_progress_list_text.parentNode.insertBefore(category_progress_count_block,inc_progress_list_text)
                        }
                    }
                    
                } else if (category_count == 0 && productCategory == undefined) {
                    var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                    elRecommendedProductsListBlock.innerHTML = ""
                }
            });
        }
    }else{
        productCategoriesArray.forEach(function (productCategory) {
            if(category_count < 5 && productCategory != undefined){
                category_count++
            
                var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
                var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
                sidebarTabsListItemText.parentNode.parentNode.setAttribute('title',productCategory)
                sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                sidebarTabsListItemText.setAttribute('style','text-transform:capitalize;')
                sidebarTabsListItemBlock.addEventListener("click", function () {
    
                    elRecommendedProductsBlock.innerHTML = "";
                    elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                    var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                    elRecommendedProductsListBlock.innerHTML = "";
                    elsidebarthumlistblock.innerHTML = "";
                    Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function (elTabsItemBlock) {
                        elTabsItemBlock.classList.remove("active");
                    });
                    sidebarTabsListItemBlock.classList.add("active");
                    INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory,elsidebarthumlistblock);
                });
                elRecommendedTabsListBlock.setAttribute('tabindex',0)
                elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
            }
        });
    }

    if(elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null){
        elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    }else{
        elRecommendedTitleText.style.display="none";
    }

    if (elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null) {
        elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    } else {
        elRecommendedTitleText.style.display = "none";
    }


    var inc_next_previous_block = document.createElement('div')
    inc_next_previous_block.classList.add('inc_next_previous_block')
    inc_next_previous_block.style.marginBottom = "12px"
    var inc_previous_block = document.createElement('div')
    inc_previous_block.classList.add('inc_previous_block')
    inc_previous_block.innerText = "Previous"
    inc_previous_block.setAttribute("style", "pointer-events: none;opacity:0.5;");
    inc_next_previous_block.appendChild(inc_previous_block)

    var inc_next_block = document.createElement('div')
    inc_next_block.classList.add('inc_next_block')
    inc_next_block.innerText = "Next"
    inc_next_previous_block.appendChild(inc_next_block)

    var inc_click_checkout = document.createElement('div')
    inc_click_checkout.classList.add('inc_click_checkout')
    inc_click_checkout.innerText = "View Basket"
    inc_click_checkout.style.display ='none';
    inc_next_previous_block.appendChild(inc_click_checkout)

    elrecomendblock.appendChild(inc_next_previous_block)

    
    
    inc_next_block.addEventListener('click',function(){
        document.querySelector('.inc_recommended_products_block').setAttribute('style','min-height: 170px;')
        var elnext = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
        var elnextcurrentactive = elnext.querySelector('.inc_progress_list_block.inc_active')
        var activetab=document.querySelector(".inc_recommended_tabs_list_item_block.active")
        if(elnextcurrentactive == null){
            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                if(elnext.querySelector('.inc_progress_list_block.inc_active') != null){
                    elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                elnext.querySelector('.inc_progress_list_block').classList.add('progress_show')
                elnext.querySelector('.inc_progress_list_block').classList.add('inc_active')
                document.querySelector('.inc_recommended_tabs_list_item_block').click()
            }
        }else if(elnextcurrentactive.nextElementSibling != null){
            if(elnextcurrentactive.nextElementSibling.innerText != "Checkout"){
                if(activetab.nextElementSibling != null){
                    activetab.nextElementSibling.click()
                }
            }
            if(elnext.querySelector('.inc_progress_list_block.inc_active') != null){
                elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
            }
            elnextcurrentactive.nextElementSibling.classList.add('progress_show')
            elnextcurrentactive.nextElementSibling.classList.add('inc_active')
            
            document.querySelector('.inc_previous_block').setAttribute('style','')
            document.querySelector('.inc_previous_block').classList.remove('inc_prev_disable')
            if(elnextcurrentactive.nextElementSibling.nextElementSibling == null){
                document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
                document.querySelector('.inc_next_block').setAttribute('style', 'display:none;')
                document.querySelector('.inc_click_checkout').style.display = 'flex';
                
            }
            if(elnextcurrentactive.nextElementSibling.innerText == "Checkout"){
                document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                document.querySelector('.inc_click_checkout').innerText = "Please click on checkout"
                document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
            }
        }else{
            document.querySelector('.inc_next_block').classList.add('inc_next_disable')
            document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
        }
        setTimeout(function(){
            var all_length_progress = document.querySelectorAll('.progress_show').length
            if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_1')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_2')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_3')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_4')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_5')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('inc_progress_' + all_length_progress)
            }
            document.querySelector('.inc_recommended_products_block').setAttribute('style','')
        },100)
    });

    inc_previous_block.addEventListener('click',function(){
        document.querySelector('.inc_recommended_products_block').setAttribute('style','min-height: 170px;')
        var elprev = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
        var elprevcurrentactive = elprev.querySelector('.inc_progress_list_block.inc_active')
        var activetab=document.querySelector(".inc_recommended_tabs_list_item_block.active")
        if(elprevcurrentactive.previousElementSibling != null){
            if(elprevcurrentactive.innerText != "Checkout"){
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                
                elprevcurrentactive.previousElementSibling.classList.add('inc_active')
                activetab.previousElementSibling.click()
                document.querySelector('.inc_next_block').setAttribute('style','display:flex;')
                document.querySelector('.inc_click_checkout').setAttribute('style','display:none;')
                if(elprevcurrentactive.previousElementSibling.previousElementSibling == null){
                    document.querySelector('.inc_previous_block').setAttribute('style','opacity:0.5;pointer-events: none;')
                    document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
                    document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
                    document.querySelector('.inc_next_block').setAttribute('style','')
                    
                }
            }else{
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                document.querySelector('.inc_click_checkout').innerText = ""
                elprevcurrentactive.previousElementSibling.classList.add('inc_active')
            }
        }else{
            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                document.querySelector('.inc_progress_list_block').classList.add('inc_active')
                document.querySelector('.inc_recommended_tabs_list_item_block').click()
            }
            document.querySelector('.inc_previous_block').setAttribute('style','opacity:0.5;pointer-events: none;')
            document.querySelector('.inc_next_block').setAttribute('style','')
            
            document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
            document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
        }
        setTimeout(function(){

            var all_length_progress = document.querySelectorAll('.progress_show').length
            if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_1')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_2')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_3')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_4')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_5')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('inc_progress_' + all_length_progress)
            }
            document.querySelector('.inc_recommended_products_block').setAttribute('style','')//min-height: auto;
        },100)
    });

    inc_click_checkout.addEventListener("click", function () {
        window.location.href = INC.clientConfig.checkoutLink;
    });


    
    
    getViewElement("sidebarHeaderContinueBlock").addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });

    getViewElement("sidebarCheckoutContinueBlock").addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.clientConfig.offset = 0;
        INC.config.pdpaddedProductList = []
        INC.clientConfig.slidevalue = 0;
        INC.methods.hideSidebar();
    });

    getViewElement("sidebarCheckoutBasketBlock").addEventListener("click", function () {
        window.location.href = INC.clientConfig.checkoutLink;
    });

    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
        document.querySelector('html').classList.add('wickes_inc_configurator')
        elRecommendedTabsListBlock.style.display = "none";
    }else{
        document.querySelector('html').classList.add('wickes_inc_no_configurator')
        inc_next_previous_block.style.display = "none"
        progress_bar_block.style.display = "none"
    }

    var addedProductBlocks = "";
    var addedSliderBtnCounter = 0;

    getViewElement("sidebarCartAddedRightBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        addedSliderBtnCounter++;
        if (addedSliderBtnCounter > addedProductBlocks.length - 2) {
            addedSliderBtnCounter--;
        }
        if (addedProductBlocks.length > 2) {
            addedProductBlocks[addedSliderBtnCounter - 1].style.display = "none";
        }
    });

    getViewElement("sidebarCartAddedLeftBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        addedSliderBtnCounter--;
        if (addedSliderBtnCounter == -1) addedSliderBtnCounter = 0;
        addedProductBlocks[addedSliderBtnCounter].style.display = "flex";
    });

    getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");

    var body = document.querySelector('body');
    body.appendChild(sidebar_dialoge_block);
    var elSideBarOverlayBlock = document.createElement('div');
    elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
    elSideBarOverlayBlock.addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    close_sisebar_icon.addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    elSideBarOverlayBlock.style.display = "none";
    body.appendChild(elSideBarOverlayBlock);
    
    if(INC.dataStore.dataStoreObj.undefined != undefined ){
        if(document.querySelector('.inc_recommended_products_block') != null){
            document.querySelector('.inc_recommended_products_block').style.display="none"
        }
        if(document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null){
            var p_img=document.querySelector('.s7staticimage img').src
            document.querySelector('.inc_cart_added_product_img').src=p_img
        }
    }
    setTimeout(function(){
        if(document.querySelector('.inc_recommended_products_list_block') != null){
            document.querySelector('.inc_recommended_products_list_block').setAttribute('role',"contentinfo")
        }
    },100)

    setTimeout(function(){
        if(document.querySelectorAll('.inc_progress_list_block').length == 1 || document.querySelectorAll('.inc_progress_list_block').length == 0){
                document.querySelector('.inc_next_block').style.display="none"
                document.querySelector('.inc_previous_block').style.display ="none"
                document.querySelector('.inc_click_checkout').style.display ="flex"
            
            if(document.querySelector('.category_progress_count_block') != null){
                document.querySelector('.category_progress_count_block').style.display="none"
            }
        }
        if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
            var leng_categ=document.querySelectorAll('.inc_progress_list_block').length
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('category_'+leng_categ)
        }
    },10)
}

INC.methods.updateSidebarBlock = function(type_bundle, tickbox) {
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));
    if(sbBlock != null){
        var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
        var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
        var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
        var elHeadersubtotalactivetextExc = getViewElement("sidebarCartAddedProductDescSubTotalActiveTextExc");
        var elHeadersubtotalregulartextExc = getViewElement("sidebarCartAddedProductDescSubTotalRegularTextExc");
        elHeadersubtotalactivetextExc.classList.add('inc_cart_added_product_desc_subtotal_price_active_text')
        elHeadersubtotalregulartextExc.classList.add('inc_cart_added_product_desc_subtotal_price_regular_text')
        elHeadersubtotalactivetext.classList.add('incvat_')
        elHeadersubtotalregulartext.classList.add('incvat_')
        var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
        var elmoreproducttext = document.querySelector('.inc_cart_added_right_btn_img')
        if(tickbox != "tickbox"){
            sbCartBlock.innerHTML = "";
        }

        // var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
        let bundleCartProductsArray = "";
        let bundle_arr = ""
        if(tickbox == "tickbox"){
            bundleCartProductsArray = Object.keys(dataStore.tickboxProducts);
            bundle_arr = INC.dataStore.tickboxProducts
        }else{
            bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            bundle_arr = INC.dataStore.bundleCartProducts
        }
        let oldqty=0
        if(document.querySelector('.inc_header_item_count_title_text') != null){
            oldqty = document.querySelector('.inc_header_item_count_title_text').innerText.toLowerCase().split('item(s)')[0].trim()
            if(oldqty == ""){
                oldqty = 0
            }
        }
        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
            sidebarHeaderItemCountTitleText.innerHTML = bundleCartProductsArray.length - INC.clientConfig.OOS.length + " ITEM(s)"
        }else{
            sidebarHeaderItemCountTitleText.innerHTML = bundleCartProductsArray.length - INC.clientConfig.OOS.length + " Item(s)"
        }
        var headerItemCountFigureText = 0;
        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var subtotalactivepriceExc = 0
        var subtotalregukarpriceExc = 0
        if(tickbox == "tickbox"){
            if(oldqty != 0){
                sidebarHeaderItemCountTitleText.innerHTML = parseInt(oldqty) - INC.clientConfig.OOS.length + " Item(s)"
                headerItemCountFigureText = parseInt(oldqty)
            }
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                subtotalactiveprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
            }
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text') != null) {
                subtotalregukarprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
            }
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text_exc') != null) {
                subtotalactivepriceExc = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text_exc').getAttribute('subtotalactiveprice')
            }
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text_exc') != null) {
                subtotalregukarpriceExc = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text_exc').getAttribute('subtotalregularprice')
            }
        }
        bundleCartProductsArray.forEach(function(productSKU) {
            var findObj = new INC.classes.FindObj({
                sku: productSKU
            });
            var productObj = INC.dataStore.methods().getProductBySKU(findObj);
            var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
            //current  active prod
            var qty_sub_t = ""
            for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                if (INC.clientConfig.added_product_sku[q].skus == productObj.id) {
                    qty_sub_t = INC.clientConfig.added_product_sku[q].qtys
                    break;
                }
            }

            if (qty_sub_t == "" || qty_sub_t == 0) {
                qty_sub_t = bundle_arr[productSKU]
            }
            if(tickbox == "tickbox" && INC.clientConfig.OOS.indexOf(productObj.id) >= 0){
                headerItemCountFigureText = headerItemCountFigureText + parseInt(0);
            }else if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                headerItemCountFigureText = headerItemCountFigureText + parseInt(qty_sub_t);
            }
            var color = "";
            var size = "";
            var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id=' + '"' + productSKU + '"' + ']')
            if (just_check_prod_block != null) {
                if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                    size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
                }
                if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                    color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                }
            }

            productBlock.style.userSelect = "none";

            var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
            var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
            var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
            var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
            var elPriceActiveTextExc = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextExc"));
            var elPriceRegularTextExc = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularTextExc"));
            var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
            var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
            var eltextmesg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextMsg"));
            var eladdedqtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));


            elPriceActiveTextExc.classList.add('inc_cart_added_product_desc_price_active_text')
            elPriceRegularTextExc.classList.add('inc_cart_added_product_desc_price_regular_text')
            elPriceActiveText.classList.add('incvat_')
            elPriceRegularText.classList.add('incvat_')
            var elImgTag;
            if(productObj.imageURL){
                if(productObj.imageURL.indexOf('undefined') == -1){
                    elImgTag = INC.methods.generateHTMLTags('img', {
                        src: productObj.imageURL
                    });
                    if(onloadpdp == true){
                        elImgTag.src = productObj.imageURL
                    }
                }else{
                    elImgTag = document.createElement('img')
                }
            }else{
                elImgTag = document.createElement('img')
            }
            setwidtheightimg(null,null,'justadded',elImgTag)
            elImg.appendChild(elImgTag);

            elTitleText.innerHTML = productObj.name;
            if (color != "") {

                elAttColorText.innerText = color;
            }

            elAttsizeText.innerText = size;
            var p_type_details = document.createElement('div');
            p_type_details.classList.add('del_message')
            if (type_bundle == "collection") {
                p_type_details.innerText = "Click & Collect"
            } else {
                p_type_details.innerText = "Added for delivery"
            }

            var activePrice = formatter.format(productObj.activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()//parseFloat(productObj.activePrice).toFixed(2).toString();
            var regularPrice = formatter.format(productObj.regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()//parseFloat(productObj.regularPrice).toFixed(2).toString();
            var activePriceExc = formatter.format(productObj.excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
            var regularPriceExc = formatter.format(productObj.excregularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()

            if (activePrice != regularPrice) {
                elHeadersubtotalactivetext.classList.add('priceRed');
            } else {
                if (elHeadersubtotalactivetext.classList.contains('priceRed')) {
                    elHeadersubtotalactivetext.classList.remove('priceRed');
                }
            }
            if (activePriceExc != regularPriceExc) {
                elHeadersubtotalactivetextExc.classList.add('priceRed');
            } else {
                if (elHeadersubtotalactivetextExc.classList.contains('priceRed')) {
                    elHeadersubtotalactivetextExc.classList.remove('priceRed');
                }
            }
            if(tickbox == "tickbox" && INC.clientConfig.OOS.indexOf(productObj.id) >= 0){
                subtotalactiveprice
            }else{
                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                    subtotalactiveprice = (+subtotalactiveprice + +productObj.activePrice * parseInt(qty_sub_t));
                    subtotalregukarprice = (+subtotalregukarprice + +productObj.regularPrice * parseInt(qty_sub_t));
                }
                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                    subtotalactivepriceExc = (+subtotalactivepriceExc + +productObj.excactivePrice * parseInt(qty_sub_t));
                    subtotalregukarpriceExc = (+subtotalregukarpriceExc + +productObj.excregularPrice * parseInt(qty_sub_t));
                }
            }
            if (subtotalactiveprice != subtotalregukarprice) {
                elHeadersubtotalactivetext.classList.add('priceRed');
            } else {
                if (elHeadersubtotalactivetext.classList.contains('priceRed')) {
                    elHeadersubtotalactivetext.classList.remove('priceRed');
                }
            }
            if (subtotalactivepriceExc != subtotalregukarpriceExc) {
                elHeadersubtotalactivetextExc.classList.add('priceRed');
            } else {
                if (elHeadersubtotalactivetextExc.classList.contains('priceRed')) {
                    elHeadersubtotalactivetextExc.classList.remove('priceRed');
                }
            }
            elPriceActiveText.innerText = INC.clientConfig.currencySymbol + activePrice;
            elPriceActiveText.innerHTML = elPriceActiveText.innerText  + "<span>"+INC.config.incvattext+"</span>"

            elPriceActiveTextExc.innerText = INC.clientConfig.currencySymbol + activePriceExc;
            elPriceActiveTextExc.innerHTML = elPriceActiveTextExc.innerText  + "<span>"+INC.config.excvattext+"</span>";

            if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                productBlock.classList.add('cross')
                for (let e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS[e] == productObj.id.split('-')[0]) {
                        if (INC.clientConfig.OOS_MESG[e] != undefined) {
                            eltextmesg.classList.add('inc_error_msg')
                            if (type_bundle == "collection") {
                                if (productObj.Field6 == "CollectOnly") {
                                    p_type_details.innerText = "Not Added"
                                    eltextmesg.innerText = "Sorry, not added for collection, insufficient stock"
                                } else {
                                    p_type_details.innerText = "Not Added"
                                    if(tickbox == "tickbox"){
                                        eltextmesg.innerText = "Sorry, not added for collection, insufficient stock"
                                    }else{
                                        eltextmesg.innerText = "Note: Not available in store. Item added for delivery."
                                    }
                                }
                                eltextmesg.style.color = "#555"
                            } else {
                                p_type_details.innerText = "Not Added"
                                eltextmesg.innerText = INC.clientConfig.OOS_MESG[e]
                                eltextmesg.style.color = "#c3332e"
                            }
                        }
                    }
                }
            }
            productBlock.setAttribute('id', productObj.id)
            productBlock.setAttribute('sku', productObj.sku)
            productBlock.setAttribute('mainId', productObj.mainId)
            productBlock.setAttribute('qty', '1')
            productBlock.setAttribute('type_bundle', type_bundle)
            productBlock.classList.add(type_bundle)

            var qtyDiv = document.createElement('div');
            qtyDiv.setAttribute("id", productObj.id);
            qtyDiv.style.display = "none"
            qtyDiv.classList.add("inc_qty_number_block");
            qtyDiv.innerText = 'x' + bundle_arr[productObj.id];
            productBlock.childNodes[0].appendChild(qtyDiv)

            
            p_type_details.classList.add('p_type_details')
            p_type_details.setAttribute('style', 'display:block;width:100%')
            productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)

            //qty block
            var inc_product_desc_qty_block = generate_html_tag('div', 'inc_product_desc_qty_block');
            eladdedqtyblock.appendChild(inc_product_desc_qty_block)
            inc_product_desc_qty_block.classList.add('singleqty')
            var inc_product_desc_qty_down_block = generate_html_tag('div', 'inc_product_desc_qty_down_block');
            inc_product_desc_qty_block.appendChild(inc_product_desc_qty_down_block)
            var inc_product_desc_qty_down_btn = generate_html_tag('div', 'inc_product_desc_qty_down_btn');
            inc_product_desc_qty_down_block.appendChild(inc_product_desc_qty_down_btn)
            if (qty_sub_t == 0) {
                // inc_product_desc_qty_block.style.display = "none"
            }
            var inc_product_desc_qty_input_block = generate_html_tag('div', 'inc_product_desc_qty_input_block');
            inc_product_desc_qty_block.appendChild(inc_product_desc_qty_input_block)
            var elQtyInput = generate_html_tag('input');
            elQtyInput.setAttribute('type', "number");
            elQtyInput.setAttribute('aria-label', "quantity");
            elQtyInput.setAttribute('min', 1);
            elQtyInput.setAttribute('max', 999);
            elQtyInput.setAttribute('readonly', '');
            elQtyInput.setAttribute('maxlength', 3);
            elQtyInput.value = parseInt(qty_sub_t);
            elQtyInput.setAttribute('old_qty', '1');
            elQtyInput.setAttribute('pattern', '[0-9]');
            elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
            elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
            inc_product_desc_qty_input_block.appendChild(elQtyInput)



            var inc_product_desc_qty_up_block = generate_html_tag('div', 'inc_product_desc_qty_up_block');
            inc_product_desc_qty_block.appendChild(inc_product_desc_qty_up_block)
            var inc_product_desc_qty_up_btn = generate_html_tag('div', 'inc_product_desc_qty_up_btn');
            inc_product_desc_qty_up_block.appendChild(inc_product_desc_qty_up_btn)



            inc_product_desc_qty_down_block.addEventListener('click', function() {

                var el_qty_input = this.parentNode.querySelector('input')
                var elitemblock = this.parentNode.parentNode.parentNode
                el_qty_input.value = (el_qty_input.value - 1 < 1) ? 1 : el_qty_input.value - 1;
                if (parseInt(el_qty_input.value) == 1 && elitemblock.querySelector('.inc_product_desc_qty_block').classList.contains('singleqty') == true) {
                    let data__id = elitemblock.getAttribute('data__id')
                    let data__position = elitemblock.getAttribute('data__position')
                    elitemblock.classList.add('show_loader')
                    if (data__id == null) {
                        data__id = elitemblock.getAttribute('id')
                    }
                    if (data__position == null) {
                        data__position = ""
                    }
                    INC.methods.updateaddedProduct(data__position, data__id, 0, 0, elitemblock, 'yes')
                } else {
                    let data__id = elitemblock.getAttribute('data__id')
                    let data__position = elitemblock.getAttribute('data__position')
                    let added_qty = elitemblock.getAttribute('added_qty')
                    elitemblock.classList.add('show_loader')
                    if (data__id == null) {
                        data__id = elitemblock.getAttribute('id')
                    }
                    if (data__position == null) {
                        data__position = ""
                    }
                    INC.methods.updateaddedProduct(data__position, data__id, added_qty, +added_qty - 1, elitemblock, null)
                }

                if (parseInt(el_qty_input.value) > 1) {
                    elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                } else {
                    elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                }
            });

            inc_product_desc_qty_up_block.addEventListener('click', function() {
                var elitemblock = this.parentNode.parentNode.parentNode

                var el_qty_input = this.parentNode.querySelector('input')
                el_qty_input.value = (parseInt(el_qty_input.value) + 1 > 99) ? 99 : parseInt(el_qty_input.value) + 1;

                if (parseInt(el_qty_input.value) > 1) {
                    elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                } else {
                    elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                }
                let data__id = elitemblock.getAttribute('data__id')
                let data__position = elitemblock.getAttribute('data__position')
                let added_qty = elitemblock.getAttribute('added_qty')
                elitemblock.classList.add('show_loader')
                if (data__id == null) {
                    data__id = elitemblock.getAttribute('id')
                }
                if (data__position == null) {
                    data__position = ""
                }
                INC.methods.updateaddedProduct(data__position, data__id, added_qty, +added_qty + 1, elitemblock, null)

            });
            

            sbCartBlock.appendChild(productBlock);

        });
        var totlactprc =  0;
        var totlregprc =  0;
        var totlactprcExc =  0;
        var totlregprcExc =  0;
        if(parseFloat(subtotalregukarprice) < parseFloat(subtotalactiveprice)){
            totlactprc =  subtotalregukarprice;
            totlregprc =  subtotalactiveprice;
        }else{
            totlactprc =  subtotalactiveprice;
            totlregprc =  subtotalregukarprice;
        }
        if(parseFloat(subtotalregukarpriceExc) < parseFloat(subtotalactivepriceExc)){
            totlactprcExc =  subtotalregukarpriceExc;
            totlregprcExc =  subtotalactivepriceExc;
        }else{
            totlactprcExc =  subtotalactivepriceExc;
            totlregprcExc =  subtotalregukarpriceExc;
        }
        if (+totlactprc != null && (+totlactprc < +totlregprc)) {
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlactprc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlregprc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', totlactprc)
            elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', totlregprc)
        } else {
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', totlactprc)
            elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', 0)
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlregprc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elHeadersubtotalregulartext.innerHTML = ""
        }
        
        if (+totlactprcExc != null && (+totlactprcExc < +totlregprcExc)) {
            elHeadersubtotalactivetextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlactprcExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            elHeadersubtotalregulartextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlregprcExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
            elHeadersubtotalactivetextExc.setAttribute('subtotalActiveprice', totlactprcExc)
            elHeadersubtotalregulartextExc.setAttribute('subtotalRegularprice', totlregprcExc)
        } else {
            elHeadersubtotalactivetextExc.setAttribute('subtotalActiveprice', totlactprcExc)
            elHeadersubtotalregulartextExc.setAttribute('subtotalRegularprice', 0)
            elHeadersubtotalactivetextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totlregprcExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            elHeadersubtotalregulartextExc.innerHTML = ""
        }

        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0 && INC.config.loadconfigurator == true){
            sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " ITEM(s)"
        }else{
            sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " Item(s)"
        }
        var morecount = 2
        if (window.innerWidth < 820) {
            morecount = 1
        }
        if (bundleCartProductsArray.length > 2) {
            getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
            getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
        }

        if (!(bundleCartProductsArray.length > 2)) {
            getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
            getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
        }
        if (Object.keys(bundle_arr).length > morecount) {
            var tcount = Object.keys(bundle_arr).length - morecount + " More Item(s)"
            elmoreproducttext.innerHTML = "+" + tcount
            document.querySelector('.inc_cart_added_right_btn_img').setAttribute('added_counts', (Object.keys(bundle_arr).length - morecount))
            if(document.querySelector('.inc_cart_added_right_btn_block') != null){
                document.querySelector('.inc_cart_added_right_btn_block').style.visibility = "visible"
            }
            getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        } else {
            elmoreproducttext.innerHTML = ""
        }
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')

        if (Object.keys(bundle_arr).length == 1) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
        } else if (Object.keys(bundle_arr).length == 2) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
        } else if (Object.keys(bundle_arr).length == 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
        } else if (Object.keys(bundle_arr).length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
        }
        

        if (window.innerWidth > 819) {
            if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
            } else {
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
            }
        } else {
            if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
            } else {
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
                document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
            }
        }
    }else{
        document.querySelector('html').classList.remove('inc_overlay')
        var a = document.querySelector(".header-wrapper")
        a.scrollIntoView();
    }
    crosscategoryprodcount()
}
INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory,elsidebarthumlistblock) {
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var productListArray = INC.dataStore.bundleProductsArray;
    var dupl_sidebar_prod=[]
    var recthumnblock=elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_item_thumb_block')
    recthumnblock.innerHTML = ""
    var ccount=0
    if(INC.config.pageType != "pdp"){
        INC.config.config_prd_list = INC.dataStore.bundleProductsArray
    }
    if(INC.config.loadconfigurator == true){
        productListArray = INC.config.configuratorabtestprod
    }
    for (var i = 0; i < productListArray.length; i++) {
        if(tickboxexcludeprod.indexOf(productListArray[i]) == -1){
            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArray[i] });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if(INC.dataStore.dataStoreObj.undefined == undefined ){
                    if(dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1){
                        dupl_sidebar_prod.push(firstProductObjByMainId.id)
                        var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false,elRecommendedProductsListBlock,elsidebarthumlistblock);
                        var findObj = new INC.classes.FindObj({ id: firstProductObjByMainId.id });
                        var productObj = INC.dataStore.methods().getProductById(findObj);
                        if(recthumnblock != undefined){
                            var thumnail_product_list = generate_html_tag('div','thumnail_product_list')
                            recthumnblock.appendChild(thumnail_product_list)
                            var thumnail_product_list_img = generate_html_tag('img')
                            thumnail_product_list_img.src = productObj.imageURL
                            thumnail_product_list_img.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
                            thumnail_product_list.appendChild(thumnail_product_list_img)
                            thumnail_product_list.setAttribute('data-id', productObj.id);
                            thumnail_product_list.setAttribute('data-sku', productObj.sku);
                            thumnail_product_list.setAttribute('data-main_id', productObj.mainId);
                            thumnail_product_list.setAttribute('data-bundle_id', productObj.bundleId);
                            thumnail_product_list.setAttribute('data_main_variant', productObj.mainProdVariant);
                            thumnail_product_list.setAttribute('index', ccount);
                            // productBlock.setAttribute('index', ccount);
                            ccount++
                            thumnail_product_list.addEventListener('click',function(){
                                if(this.parentNode.querySelector('.thumnail_product_list.active') != null){
                                    this.parentNode.querySelector('.thumnail_product_list.active').classList.remove('active')
                                }
                                this.classList.add('active')
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                var slide_w=540
                                if(window.innerWidth > 1590){
                                    slide_w=540
                                }
                                var dataId = this.getAttribute('data-id')
                                var ind = this.getAttribute('index');
                                INC.clientConfig.slidevalue = parseInt(ind) - 1
                                var prodlength = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_product_module_block')
                                if(document.querySelector('.inc_recommended_products_list_main_block .inc_product_module_block[data-id="'+dataId+'"]') != null){
                                    document.querySelector('.inc_recommended_products_list_main_block .inc_product_module_block[data-id="'+dataId+'"]')
                                }
                                INC.clientConfig.offset = -(INC.clientConfig.slidevalue * slide_w) + 'px';
                                if(INC.clientConfig.slidevalue+1 < prodlength.length){
                                    document.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                    document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                    document.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                                }
                                INC.clientConfig.slidevalue++
                                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
                                var menu = document.querySelector('.inc_recommended_products_list_block')
                                menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                                if(+INC.clientConfig.slidevalue + 1 == prodlength.length){
                                    document.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                    document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                                }else{
                                    document.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                    document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                                }
                                if(INC.clientConfig.slidevalue == 0){
                                    document.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                    document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                    document.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
                                }
                            })
                        }
                        productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function() {
                            var productBlockNode = this.parentNode.parentNode;
                            if (this.parentNode.parentNode.className == "inc_product_desc_block" || this.parentNode.parentNode.className == "inc_product_desc_block promo_attr_avail") {
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('simple') == false){
                                productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('inc_product_module_block') == true){
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('inc_product_modal_block') == true){
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                            }
                            var sku = productBlockNode.getAttribute('data-sku');
                            var findObj = new INC.classes.FindObj({
                                id: sku
                            });
                            var qty = productBlockNode.querySelector('input').value;
                            if (qty == undefined || qty == "") {
                                qty = 1
                            }
                            var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                            var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));

                            setTimeout(function() {
                                Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                    el.classList.remove("checked");
                                });

                            }, 2000);
                            var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')

                            var productModuleBlock = productBlockNode.parentNode.parentNode
                            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                            if(flag_check == 1){
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                            }else{
                                if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                                    productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                                }
                                if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                                    productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                                }
                            }
                        });
                        productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function() {

                            var productBlockNode = this.parentNode.parentNode;
                            if (this.parentNode.parentNode.className == "inc_product_desc_block" || this.parentNode.parentNode.className == "inc_product_desc_block promo_attr_avail") {
                                
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode;
                            }
                            if(productBlockNode.classList.contains('simple') == false){
                                productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            var sku = productBlockNode.getAttribute('data-sku');
                            var findObj = new INC.classes.FindObj({
                                id: sku
                            });
                            var qty = productBlockNode.querySelector('input').value;
                            if (qty == undefined || qty == "") {
                                qty = 1
                            }
                            var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddTextclickcollect"));
                            var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImgclickcollect"));
                            setTimeout(function() {
                                Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                    el.classList.remove("checked");
                                });

                            }, 2000);
                            var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text_click_collect')
                            if (productBlockNode.querySelector('.img_color_swatch') != null) {
                                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                                    
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                                } else {
                                    productBlockNode.querySelector('.img_color_swatch').click()
                                }
                            } else {
                                    
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                                var elmnt = document.querySelector(".inc_header_title_block");
                                elmnt.scrollIntoView();
                            }
                        });
                        elRecommendedProductsListBlock.appendChild(productBlock);
                    }
                }
            }
        }
    }

    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    elRecommendedProductsListBlock.setAttribute('style','margin-left: 0')

    if (!(elRecommendedProductsListBlock.childNodes.length > 3)) {
        recthumnblock.style.display="none"
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }

    if (elRecommendedProductsListBlock.childNodes.length > 3) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    }
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
    var sliderBtnCounter = 0;

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if(INC.clientConfig.slidevalue+1 < productBlocks.length){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:1");
            INC.clientConfig.slidevalue++
            var slide_w=270
            if(window.innerWidth > 1590){
                slide_w=270
            }
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
                slide_w=342
                if(window.innerWidth > 1590){
                    slide_w=342
                }
            }
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        var cc_ount=2;
        if (window.innerWidth > 819) {
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
                cc_ount = 3
            }else{
                cc_ount = 2;
            }
            
        }

        if(+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:0.5");
        }
        sliderBtnCounter++;
        if (sliderBtnCounter > productBlocks.length - cc_ount) {
            sliderBtnCounter--;
        }
    });

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function () {
        
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if(INC.clientConfig.slidevalue > 0){
            var slide_w=270
            if(window.innerWidth > 1590){
                slide_w=270
            }
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0 && INC.config.loadconfigurator == true){
                slide_w=342
                if(window.innerWidth > 1590){
                    slide_w=342
                }
            }
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:1");
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            // menu.style['transitionDuration'] = '0.5s'
            // menu.style['marginLeft'] = INC.clientConfig.offset
            menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        if(INC.clientConfig.slidevalue == 0){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
        }
        sliderBtnCounter--;
        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
    });
    crosscategoryprodcount()
    setTimeout(function(){
        var sel_variant = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_variant_new1 .inc_variant_tag')
        for(let x=0;x<sel_variant.length;x++){
            if(sel_variant[x] != undefined){
                if(sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                    sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                }
                var sel_var = sel_variant[x].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                var alloptionss = sel_variant[x].querySelectorAll('option')
                for(let j=0;j<alloptionss.length;j++){
                    var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                    if(sel_var != undefined){
                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                            alloptionss[j].selected = 'selected'
                        }else{
                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                alloptionss[j].selected = 'selected'
                            }
                        }
                    }
                }
            }
        }

        for(let y=0;y<sel_variant.length;y++){
            if(sel_variant[y] != undefined){
                let sel_var = sel_variant[y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                let selv = sel_variant[y]
                let alloptionss = sel_variant[y].querySelectorAll('option')
                for(let m=0;m<alloptionss.length;m++){
                    if(sel_var != undefined){
                        let texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }
                    }
                }
            }
        }
    },1000)
    setTimeout(function(){
        onloadpdp = true
    },400)        
}
INC.methods.sendBundleClickTracking = function(productId,producttype, blockType) {
    var pageType = "";

    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.active') == null && INC.config.pageType == "pdp") {
        pageType = "100";
    }
    if(INC.config.pageType == "pdp"){
        INC.methods.trackingEvents("bundleProductClickTracking", {
            "product_id": productId,
            "core_product_id": INC.config.Product_id
        }, pageType,producttype, blockType);
    }else{
        INC.methods.trackingEvents("bundleProductClickTracking", {
            "product_id": productId,
            "core_product_id": INC.dataStore.pdpProductId
        }, pageType,producttype, blockType);
    }
}

INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    function getViewElement(className) {
        return productModuleBlock.querySelector(getSelectorClassName(classNames, className));
    }
    if(INC.dataStore.dataStoreObj.undefined == undefined){
        var producttocreateflag=true;
        var classNames = INC.uiConfig[blockType].className;
        var findObj = new INC.classes.FindObj({ id: pdpProductId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        
        if (INC.bundles) {
            var getSelectorClassName = this.getSelectorClassName;
            
            if((blockType == "pdp" && INC.config.DealProducts.indexOf(productObj.mainId) >= 0) || (blockType == "cartPage" && INC.config.DealProducts.indexOf(productObj.mainId) >= 0)){
                producttocreateflag = false
            }
            if(producttocreateflag){
                var productModuleBlock = this.getElementChilds("productModuleBlock", blockType);
                productModuleBlock.style.userSelect = "none";
                productModuleBlock.setAttribute('data-id', productObj.id);
                productModuleBlock.setAttribute('data-sku', productObj.sku);
                productModuleBlock.setAttribute('data-main_id', productObj.mainId);
                productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
                productModuleBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
                productModuleBlock.setAttribute('data-category_name', productObj.categoryName);
                productModuleBlock.setAttribute('product_type', productObj.ProductType);
                productModuleBlock.setAttribute('module_inc', blockType);
                productModuleBlock.classList.add(productObj.ProductType)
                productModuleBlock.setAttribute('id', 'inc'+productObj.mainId);
                
                var elProductShowcaseBlock = getViewElement("productShowcaseBlock");
                var elProductModalBlock = getViewElement("productModalBlock");
    
                elProductShowcaseBlock.innerHTML = "";
                elProductModalBlock.innerHTML = "";
                if(elProductShowcaseBlock != null){
                    elProductShowcaseBlock.setAttribute('role',"contentinfo")
                }
                if(elProductModalBlock != null){
                    elProductModalBlock.setAttribute('role',"contentinfo")
                }
                var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck,parentblock);
                var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck,parentblock);
    
                elProductShowcaseBlock.appendChild(productShowcaseBlock);
                elProductModalBlock.appendChild(productModalBlock);

                return productModuleBlock;
            }
        }else{
            return;
        }
    }
}

function setwidtheightimg(blockType,productBlock,typeblock,imgel){
    INC.config.pageType == "pdp"
    INC.config.pageType == "cartPage"
    if(typeblock == "justadded"){
        if(window.innerWidth > 820){
            imgel.setAttribute('width','60')
            imgel.setAttribute('height','60')
        }else{
            imgel.setAttribute('width','55')
            imgel.setAttribute('height','55')
        }
    }else if(typeblock == "pricesummary"){
        imgel.setAttribute('width','48')
        imgel.setAttribute('height','48')
    }else{
        if(typeblock == 'modal'){
            if(window.innerWidth > 820){
                imgel.setAttribute('width','297.8')
                imgel.setAttribute('height','297.8')
            }else {
                imgel.setAttribute('width','100%')
                imgel.setAttribute('height','250')
            }
        }
        if(blockType == 'pdp'){
            if(typeblock != 'modal'){
                if(window.innerWidth > 1200){
                    imgel.setAttribute('width','193.5')
                    imgel.setAttribute('height','190')
                }else if(window.innerWidth > 900){
                    imgel.setAttribute('width','186')
                    imgel.setAttribute('height','150')
                }else if(window.innerWidth > 820){
                    imgel.setAttribute('width','171')
                    imgel.setAttribute('height','140')
                }else if(window.innerWidth > 768){
                    imgel.setAttribute('width','240')
                    imgel.setAttribute('height','140')
                }else if(window.innerWidth > 450){
                    imgel.setAttribute('width','168')
                    imgel.setAttribute('height','140')
                }else if(window.innerWidth > 380){
                    imgel.setAttribute('width','138')
                    imgel.setAttribute('height','140')
                }else if(window.innerWidth < 380){
                    imgel.setAttribute('width','102')
                    imgel.setAttribute('height','140')
                }
            }
        }else if(blockType == 'sidebar'){
            if(window.innerWidth > 820){
                imgel.setAttribute('width','130')
                imgel.setAttribute('height','90')
            }else {
                imgel.setAttribute('width','100%')
                imgel.setAttribute('height','250')
            }
        }else if(blockType == 'am'){
            if(window.innerWidth > 1200){
                imgel.setAttribute('width','193.5')
                imgel.setAttribute('height','190')
            }else if(window.innerWidth > 820){
                imgel.setAttribute('width','193.5')
                imgel.setAttribute('height','150')
            }else{
                imgel.setAttribute('width','96.25')
                imgel.setAttribute('height','140')
            }
        }
    }
}
function qtyupdateInc(prdblk, elQtyInput, elPackOfListBlock, productObj, getSelectorClassName, classNames, elAddText) {
    if (elQtyInput.value.length == 0) {
        elQtyInput.value = 1;
    }
    if (elQtyInput.value == 0) {
        elQtyInput.value = 1;
    }
    if (elQtyInput.value > 99) {
        elQtyInput.value = 99;
    }
    if (elQtyInput.value == 99) {
        elQtyInput.value = 1;
    }
    if (productObj.promotionalMessage != null && productObj.promotionalMessage != undefined && productObj.promotionalMessage != 'undefined') {
        if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
            var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];
            if (elQtyInput.value.length == 0) elQtyInput.value = min_q;
            if (elQtyInput.value == 0) elQtyInput.value = min_q;
            if (elQtyInput.value > 99) elQtyInput.value = 99;
        }
    }else if(productObj.promotionalMessage != undefined){
        if (elQtyInput.value.length == 0) elQtyInput.value = 1;
        if (elQtyInput.value == 0) elQtyInput.value = 1;
        if (elQtyInput.value > 99) elQtyInput.value = 99;
    }
    var productModuleBlock = prdblk.parentNode.parentNode;
    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

    showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

    var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

    productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

    var id = prdblk.getAttribute('data-id');
    var qty = parseInt(elQtyInput.value);
    var main_id = prdblk.getAttribute('data-main_id');
    var bundle_id = prdblk.getAttribute('data-bundle_id');
    var pname=prdblk.querySelector('.inc_product_desc_title_text').innerText;
    var pprice=prdblk.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
    
    if(elQtyInput.value == ""){
        qty = 1
        productModalBlock.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=qty
    }else if(elQtyInput.value.indexOf('.') >= 0){
        qty = elQtyInput.value.replace('.','')
        productModalBlock.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=qty
    }
    if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "UPDATE") {
        if(prdblk.getAttribute('module_inc') != "tickbox"){
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
        }
    }
}
INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
    findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
    if(Object.keys(product0Obj).length != 0){
        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        var getSelectorClassName = this.getSelectorClassName;

        //sidebar
        if(window.innerWidth > 819 && (blockType == "pdp" || blockType == "tickbox")){
            let price_htmlprc = productBlock.querySelector('.inc_product_desc_qty_block').innerHTML
            let price_siblingprc=null;
            if(productColorsObj["colorArray"].length == 1 || product0Obj["att0Array"].length == 1){
                price_siblingprc=productBlock.querySelector('.inc_product_desc_offer_block')
            }else{
                price_siblingprc=productBlock.querySelector('.inc_product_desc_variant_popup_close_block')
            }
            let html_prc_blockprc = document.createElement('div');
            html_prc_blockprc.classList.add('inc_product_desc_qty_block')
            html_prc_blockprc.innerHTML = price_htmlprc
            let price_html_remrd = productBlock.querySelector('.inc_product_desc_qty_block');
            price_html_remrd.parentNode.removeChild(price_html_remrd);
            price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)
        }else{
            let price_htmlprc = productBlock.querySelector('.inc_product_desc_qty_block').innerHTML
            let price_siblingprc = null;
            if(productObj.ProductType == "simple" || productColorsObj["colorArray"].length == 1 || product0Obj["att0Array"].length == 1){
                price_siblingprc=productBlock.querySelector('.inc_product_desc_offer_block')
            }else{
                price_siblingprc=productBlock.querySelector('.inc_product_desc_att_variant_add_block')
            }
            let html_prc_blockprc = document.createElement('div');
            html_prc_blockprc.classList.add('inc_product_desc_qty_block')
            html_prc_blockprc.innerHTML = price_htmlprc
            let price_html_remrd = productBlock.querySelector('.inc_product_desc_qty_block');
            price_html_remrd.parentNode.removeChild(price_html_remrd);
            price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)
        }


        if(productObj.ProductType != "simple" && blockType != "pdp" && blockType != "tickbox"){
            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
            let productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
            let product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
            let flagsimple=false
            if (productColorsObj["colorArray"].length == 0 && product0Obj["att0Array"].length == 0) {
                flagsimple = true
            }
            if(flagsimple == false){
                let btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
                let btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_variant_view_details_block')
                let html_prc_btn = document.createElement('div');
                html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
                html_prc_btn.innerHTML = btn_htmlprc
                let btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
                btn_html_remrd.parentNode.removeChild(btn_html_remrd);
                //btn_siblingprc.appendChild(html_prc_btn)
                btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc);
                if(window.innerWidth < 820){
                    html_prc_btn.setAttribute('style','display:flex;')
                }else{
                    html_prc_btn.setAttribute('style','display:flex;')
                }
                
            }else if(blockType != "pdp" && blockType != "tickbox"){
                let btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
                let btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_block')
                let html_prc_btn = document.createElement('div');
                html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
                html_prc_btn.innerHTML = btn_htmlprc
                let btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
                btn_html_remrd.parentNode.removeChild(btn_html_remrd);
                btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc)
                if(window.innerWidth < 820){
                    html_prc_btn.setAttribute('style','display:flex;')
                }else{
                    html_prc_btn.setAttribute('style','display:flex;')
                }
            }
        }else if(blockType != "pdp" && blockType != "tickbox"){
            var btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
            var btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_block')
            var html_prc_btn = document.createElement('div');
            html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
            html_prc_btn.innerHTML = btn_htmlprc
            var btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            btn_html_remrd.parentNode.removeChild(btn_html_remrd);
            btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc)
            if(window.innerWidth < 820){
                html_prc_btn.setAttribute('style','display:flex;')
            }else{
                html_prc_btn.setAttribute('style','display:flex;')
            }
        }
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.setAttribute('module_inc', blockType);
        productBlock.classList.add(productObj.ProductType)
        
        var elHeaderInfoBlck = getViewElement("productInfoMainBlock");
        var elHeader = getViewElement("productHeaderMainBlock");
        var elImgBlock = getViewElement("productImgBlock");
        var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
        var elTitleBlock = getViewElement("productTitleBlock");
        var elTitleTextBlock = getViewElement("productTitleTextBlock");
        var elTitleText = getViewElement("productTitleText");
        var elPriceActiveText = getViewElement("productPriceActiveText");
        var elPriceRegularText = getViewElement("productPriceRegularText");
        var elPriceActiveTextExc = getViewElement("productPriceActiveTextExc");
        var elPriceRegularTextExc = getViewElement("productPriceRegularTextExc");
        var elAttDetails = getViewElement("productAttDetailsBlock");
        var elAttBlock = getViewElement("productAttBlock");
        var elAttColorBlock = getViewElement("productAttColorBlock");
        var elAttColorTitleText = getViewElement("productAttColorTitleText");
        var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
        var elAttColorListBlock = getViewElement("productAttColorListBlock");
        var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
        var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
        var elOfferTextBlock = getViewElement("productOfferTextBlock");
        var elAtt0Block = getViewElement("productAttzeroBlock");
        var elAtt0TitleText = getViewElement("productAttzeroTitleText");
        var elPackOfListBlock = getViewElement("productPackOfListBlock");
        var elQtyBlock = getViewElement("productQtyBlock");
        var elQtyInputText = getViewElement("productQtyInputText");
        var elQtyDownBlock = getViewElement("productQtyDownBlock");
        var elQtyUpBlock = getViewElement("productQtyUpBlock");
        var elAddBlock = getViewElement("productAddBlock");
        var elAddText = getViewElement("productAddText");
        var elAddImg = getViewElement("productAddImg");
        var elratingsBlock = getViewElement("productRatingsBlock");
        var elworthPrice = getViewElement("productPriceWorthText");
        var elzoomicon = getViewElement("productImgMainZoomBtnImg");
        var elzoomblock = getViewElement("productImgMainZoomBlock");
        var elpackof = getViewElement("productPackOfBlock")
        var elviewdetails = getViewElement("productDetailstext")
        var elviewdetailsBlock = getViewElement("productDetailsBlock")
        var eladdvarianttext = getViewElement("productvariantSimpleText")
        var elconfigtitle = getViewElement("productAddTitle")
        var elvariantaddbtn = getViewElement("productAttvariantaddBlock")
        var elvariantaddbtntext = getViewElement("productAttvariantaddText")
        var elvariantviewdetails = getViewElement("productAttvariantviewdetailsBlock")
        var elvariantviewdetailstext = getViewElement("productAttvariantviewdetailsText")
        var eldescblock = getViewElement("productDescBlock");
        var elvariantpopupclose = getViewElement("productvariantPopupClose")
        var elselectoptaddbtn = getViewElement("productvariantSimpleBlock")
        var elofferBlock = getViewElement("productOfferBlock");
        var elproductOfferHeaderBlock = getViewElement("productOfferHeaderBlock");
        var elproductEnergyRatingBlock = getViewElement("productEnergyRating");
        var elAtt3Block = getViewElement("productAttSizeBlock");
        var elAtt4Block = getViewElement("productAttSizeBlock");
        elviewdetails.innerText = "View details"

        elPriceActiveTextExc.classList.add('inc_product_desc_price_active_text')
        elPriceRegularTextExc.classList.add('inc_product_desc_price_regular_text')
        elPriceActiveText.classList.add('incvat_')
        elPriceRegularText.classList.add('incvat_')

        if(window.innerWidth < 820){
            elzoomblock.style.display="none"
        }
        
        elpackof.style.display="none"
        var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
        var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");


        if(productObj.ProductType == "simple"){
            elofferBlock.parentNode.insertBefore(elQtyBlock,elofferBlock);
        }

        if(productObj.Field1 != ""){
            var RatingDivImg = document.createElement('div');
            RatingDivImg.classList.add("inc_energy_Rating_img");
            var RatingImg = document.createElement('img');
            RatingImg.setAttribute('src',productObj.Field1);

            var tableImgblock = document.createElement('div');
            var tableImgchildblock = document.createElement('div');
            var closeIconparent = document.createElement('div');
            closeIconparent.classList.add("inccloseIconparent")
            var closeIcon = document.createElement('span');
            var tableRatingImgParent = document.createElement('div');
            tableRatingImgParent.classList.add("inctableRatingImgParent")
            var tableRatingImg = document.createElement('img');
            
            if(productObj.GenericField != null){
                if(productObj.GenericField.split('|')[2] != ""){
                    tableRatingImg.setAttribute('src',productObj.GenericField.split('|')[2]);
                    tableRatingImgParent.appendChild(tableRatingImg)
                }
                
                if(productObj.GenericField.split('|')[3] != "" && productObj.GenericField.split('|')[3] != undefined){
                    var tableRatingImg1 = document.createElement('img');
                    tableRatingImg1.setAttribute('src',productObj.GenericField.split('|')[3]);
                    tableRatingImgParent.appendChild(tableRatingImg1)
                }
                if(productObj.GenericField.split('|')[4] != "" && productObj.GenericField.split('|')[4] != undefined){
                    var tableRatingImg2 = document.createElement('img');
                    tableRatingImg2.setAttribute('src',productObj.GenericField.split('|')[4]);
                    tableRatingImgParent.appendChild(tableRatingImg2)
                }
            }
            tableImgblock.classList.add("inc_table_image_block")
            tableImgchildblock.classList.add("inc_table_image_child_block")
            closeIconparent.appendChild(closeIcon)
            tableImgchildblock.appendChild(closeIconparent)
            
            tableImgchildblock.appendChild(tableRatingImgParent)

            RatingDivImg.appendChild(RatingImg)
            tableImgblock.appendChild(tableImgchildblock)
            //RatingDivImg.appendChild(tableImgblock)
            elproductEnergyRatingBlock.appendChild(RatingDivImg)
            elproductEnergyRatingBlock.appendChild(tableImgblock)
            RatingDivImg.addEventListener("click",function(){
                if(productObj.GenericField != null){
                    if(productObj.GenericField.split('|')[2] != ""){
                        elproductEnergyRatingBlock.classList.add("inc_active")
                        document.querySelector('html').classList.add('inc_overlay');
                    }
                }
            })

            closeIcon.addEventListener("click",function(){
                window.window.$(".inctableRatingImgParent").animate({ scrollTop:  0 }, 0);
                elproductEnergyRatingBlock.classList.remove("inc_active")
                document.querySelector('html').classList.remove('inc_overlay');
            })
        }
        
        if(productObj.GenericField != null){
            if(productObj.GenericField.split('|')[0] != ''){
                var RatingDivlink = document.createElement('div');
                RatingDivlink.classList.add("inc_energy_Rating_link");
                var Ratinglink = document.createElement('a');
                Ratinglink.innerText = "Product Information Sheet"
                Ratinglink.setAttribute('href', productObj.GenericField.split('|')[0]);
                Ratinglink.target = "_blank"
                RatingDivlink.appendChild(Ratinglink);
                elproductEnergyRatingBlock.appendChild(RatingDivlink)
            }
        
        }

        elAddBlockclickcollect.style.display = "none"
        elvariantpopupclose.addEventListener('click',function(){
            this.parentNode.classList.remove('active')
            productBlock.classList.remove('show_overlay')
            if (document.querySelector('.inc_sidebar_modal_block') != null){
                if (document.querySelector('.inc_sidebar_modal_block').classList.contains('active') == false)
                document.querySelector('html').classList.remove('inc_overlay');
            }
        });
        elviewdetailsBlock.addEventListener('click',function(){
            
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("active");
            });
            
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(blockType == "tickbox"){
                                inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                            }else if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height = window.$(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height =  window.$(".inc_af_block").offset().top
                            }
                        // document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                        },100)
                    }
                }
                document.querySelector('html').classList.add('inc_overlay');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            document.querySelector('html').classList.add('inc_popup_open')
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
            if(window.innerWidth < 820){
                window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_img_block').height() - 300}, 'fast');
            }
        })
        
        
        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
            productBlock.parentNode.classList.remove("active");
        });
        
        
        
        // elworthPrice.innerText = productObj.reviewsCount
        var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
        var elImgTag1;
        if(productObj.imageURLMain != undefined){
            if(productObj.imageURLMain.indexOf('undefined') == -1){
                elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURLMain });
                if(onloadpdp == true){
                    elImgTag1.src = productObj.imageURLMain
                }
            }else{
                elImgTag1 = document.createElement('img')
            }
        }else{
            elImgTag1 = document.createElement('img')
        }
        setwidtheightimg(blockType,productBlock,'showcase',elImgTag1)
        elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
        elImgTag1.setAttribute('role','img')
        elImgTag1.setAttribute('aria-label','Image')
        if(productObj.nameMain != null){
            elImgTag1.setAttribute('alt',productObj.nameMain.toLocaleLowerCase())
        }else{
            elImgTag1.setAttribute('alt',productObj.nameMain)
        }
        elImgTag1.setAttribute('data-mouseover',productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL',productObj["imageURLMain"])
        var productLink = document.createElement('a');
        var devURRl;
        if (window.location.host == "www-cand1.dev.wickes.co.uk") {
            devURRl = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk')
            productLink.href = devURRl;
        }else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
            devURRl = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
            productLink.href = devURRl;
        }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
            devURRl = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
            productLink.href = devURRl;
        } else {
            productLink.href = productObj.urlMain;
        }
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList',productObj["otherImageList"])
        productLink.setAttribute('imageURL',productObj["imageURLMain"])
        
        if (INC.config.recommendation == true && window.innerWidth > 820 && blockType != "tickbox" && INC.config.pageType != "productList"){
            productLink.setAttribute('target', '_blank');
        }
    
        if (INC.config.recommendation == false || INC.config.pageType == "productList"){
            productLink.addEventListener('click',function(e){
                var href;
                if(window.innerWidth > 820 && blockType != "tickbox"){
                    e.stopPropagation();
                    e.preventDefault();
                    var producttype=productObj.Field6;
                    href = productBlock.querySelector('.inc_product_img_main_img a').href
                    setTimeout(function(){
                        window.location.href = href
                    },800)
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
                }else{
                    e.preventDefault();
                    // if(blockType == "am" || blockType == "sidebar"){
                    //     e.preventDefault();
                    //     href = productBlock.querySelector('.inc_product_img_main_img a').href
                    //     setTimeout(function(){
                    //         window.location.href = href
                    //     },3000)
                    // }else{
                    //     e.preventDefault();
                    // }
                }
            })
        }
        add_swipe(productLink)

        elImgMainImg.appendChild(productLink);
        elImgMainImg.addEventListener("click", function (event) {
            var producttype=productObj.Field6;
            if(blockType != "tickbox" && INC.config.pageType != "productList"){
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
            }
            if (INC.config.recommendation == false || blockType == "tickbox" || INC.config.pageType == "productList"){
                if(blockType != "am" || blockType != "sidebar" || blockType == "tickbox"){
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    
                    if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                        productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                document.querySelector('body').style.position = "relative"
                                if(inc_scroll_height > 100){
                                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                }
                            }
                        }
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                                if(inc_scroll_height > 100){
                                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                }
                            }
                        }
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open')
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                    }
                    Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                        el.classList.remove("active");
                    });
                    
                    if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                setTimeout(function(){
                                    if(blockType == "tickbox"){
                                        inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                                    }else if(document.querySelector('.inc_pdp_block') != null){
                                        inc_scroll_height= window.$(".inc_pdp_block").offset().top
                                    }else if(document.querySelector('.inc_af_block') != null){
                                        inc_scroll_height=  window.$(".inc_af_block").offset().top
                                    }
                                // document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                                },100)
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
                    }
                    document.querySelector('html').classList.add('inc_popup_open')
                    
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
                    if(window.innerWidth < 820){
                        window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_img_block').height() - 300}, 'fast');
                    }
                }
            }else if(INC.config.recommendation && INC.config.pageType != "productList"){
                event.preventDefault();
                var href = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = href
                },3000)
            }
        });
        elzoomicon.setAttribute('title',INC.config.ViewDetailsText)
        var elImgMainZoomImgBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnImgBlock"));
    // elzoomtext.innerText = "Quick view"

        elImgMainZoomImgBlock.addEventListener('click', function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("active");
            });

            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(blockType == "tickbox"){
                                inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                            }else if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= window.$(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height=  window.$(".inc_af_block").offset().top
                            }
                        // document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                        },100)
                    }
                }
                document.querySelector('html').classList.add('inc_overlay');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            document.querySelector('html').classList.add('inc_popup_open')
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
            if(window.innerWidth < 820){
                window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_img_block').height() - 300}, 'fast');
            }
        });

        var elImgMainZoomTextBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnTextBlock"));

        // elImgMainZoomTextBlock.style.display = "none";
        elImgMainZoomTextBlock.addEventListener('click', function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("active");
            });
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(blockType == "tickbox"){
                                inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                            }else if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= window.$(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height=  window.$(".inc_af_block").offset().top
                            }
                        // document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                        },100)
                    }
                }
                document.querySelector('html').classList.add('inc_overlay');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            document.querySelector('html').classList.add('inc_popup_open')
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
            if(window.innerWidth < 820){
                window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_img_block').height() - 300}, 'fast');
            }
        });

        elImgGalleryListBlock.innerHTML = "";

        if ((productObj.otherImageList != null) && (productObj.otherImageList.length > 1) && (productObj.otherImageList[productObj.otherImageList.length-1] != "")) {
            var otimg = 0;
            var elOtherImgTag;
            productObj.otherImageList.forEach(function (otherImgURL) {
                
                if(productObj.otherImgURL.indexOf('undefined') == -1){
                    elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                    if(onloadpdp == true){
                        elOtherImgTag.src = otherImgURL
                    }
                }else{
                    elOtherImgTag = document.createElement('img')
                }
                elOtherImgTag.setAttribute('role','img')
                elOtherImgTag.setAttribute('aria-label','Image')
                elOtherImgTag.setAttribute('alt',productObj.name)
                elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                
                var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

                var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));
                
                elImgGalleryListItemImg.appendChild(elOtherImgTag);
                elImgGalleryListItemBlock.setAttribute('index',otimg)
                elImgGalleryListItemBlock.addEventListener("click", function () {

                    Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("active");
                    });

                    elImgGalleryListItemBlock.classList.add("active");

                    elImgMainImg.querySelector('img').src = otherImgURL;
                    elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                })

                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
                if(otimg == 0){
                    elImgGalleryListItemBlock.classList.add('active')
                }
                otimg++;
                if(productObj.otherImageList.length > 5){
                    elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
                }
            });
            
            // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
        }else{
            elImgMainZoomImgBlock.style.display="none"
        }

        
        if (INC.config.recommendation == false || blockType == "tickbox" || INC.config.pageType == "productList"){
            elTitleBlock.addEventListener("click", function() {
                if(blockType != "tickbox" && (window.innerWidth < 820 && INC.config.pageType != "productList")){
                    var producttype=productObj.Field6;
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
                }
            });
            elTitleTextBlock.addEventListener("click", function () {
                if(blockType != "am" || blockType != "sidebar" || blockType == "tickbox"){
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    
                    if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                        productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                document.querySelector('body').style.position = "relative"
                                if(inc_scroll_height > 100){
                                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                }
                            }
                        }
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                                if(inc_scroll_height > 100){
                                    window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                }
                            }
                        }
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open')
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                    }
                    Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                        el.classList.remove("active");
                    });
                    if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                setTimeout(function(){
                                    if(blockType == "tickbox"){
                                        inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                                    }else if(document.querySelector('.inc_pdp_block') != null){
                                        inc_scroll_height= window.$(".inc_pdp_block").offset().top
                                    }else if(document.querySelector('.inc_af_block') != null){
                                        inc_scroll_height=  window.$(".inc_af_block").offset().top
                                    }
                                },100)
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
                    }
                    document.querySelector('html').classList.add('inc_popup_open')
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
                    if(window.innerWidth < 820){
                        window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_img_block').height() - 300}, 'fast');
                    }
                }
            });
        }else{
            elTitleTextBlock.addEventListener("click", function () {
                if(blockType != "tickbox"){
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'),null,blockType);
                }
            })
        }
        
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        //elratingsBlock
        var field1 = productObj.ratingsCount;   
        INC.methods.get_product_ratings(field1,elratingsBlock);
        var pLink = document.createElement('a');
        var devURL;
        if (window.location.host == "www-cand1.dev.wickes.co.uk") {
            devURL = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk/')
            pLink.href = devURL;
        } else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
            let devURRl = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
            pLink.href = devURRl;
        }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
            let devURRl = productObj.urlMain.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
            pLink.href = devURRl;
        }else {
            pLink.href = productObj.urlMain;
        }
        if(blockType == "tickbox"){
            pLink.setAttribute('style','text-decoration: none;')
        }
        // pLink.target = "_blank";
        if (INC.config.recommendation == false || blockType == "tickbox" || INC.config.pageType == "productList"){
            pLink.addEventListener('click',function(e){
                if(window.innerWidth > 820 && blockType != "tickbox"){
                    e.stopPropagation();
                    var producttype=productObj.Field6;
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
                }else{
                    if(blockType == "am" || blockType == "sidebar"){
                        e.preventDefault();
                        // var href = productBlock.querySelector('.inc_product_img_main_img a').href
                        // setTimeout(function(){
                        //     window.location.href = href
                        // },3000)
                    }else{
                        e.preventDefault();
                    }
                } 
            })
        }
        devURL = productObj.url
        if (window.location.host == "www-cand1.dev.wickes.co.uk") {
            devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk/')
        } else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
            devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
        }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
            devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
        }else {
            devURL = productObj.url;
        }
        if (INC.config.recommendation == true && window.innerWidth > 820 && blockType != "tickbox" && INC.config.pageType != "productList"){
            pLink.setAttribute('target', '_blank');
            pLink.addEventListener('click',function(){
                event.preventDefault()
                setTimeout(function(){
                    window.location=devURL
                },3000)
            })
        }
        
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            pLink.setAttribute('style','cursor: default;text-decoration: none;')
        }else{
            // pLink.href = productObj.url;
        }
        pLink.setAttribute('style','text-transform: unset;')
        pLink.setAttribute('title',productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        
        
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
        var excactivePrice = parseFloat(productObj.excactivePricemain).toFixed(2).toString();
        var excregularPrice = parseFloat(productObj.excregularPricemain).toFixed(2).toString();

        var totalsaveprc =  get_discount_price(productObj.regularPriceMain,productObj.activePriceMain)
        var totalsaveper =  get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)
        
        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
            elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
            parentblock.classList.add('special_')
        }else{
            elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            elworthPrice.innerHTML = ""
        }

        elPriceRegularTextExc.innerText = "";
        if (excactivePrice != excregularPrice && excregularPrice != "" && excregularPrice != null && excregularPrice != 0) {
            elPriceActiveTextExc.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
            elPriceRegularTextExc.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(excregularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
        }else{
            elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
        }

        if(productObj.promotionalMessage != null){
            if(productObj.promotionalMessage.split("|")[0] == "" && productObj.promotionalMessage.split("|")[1] != undefined){
                productObj.promotionalMessage = productObj.promotionalMessage.split("|")[1].split('Offer')[0]
            }
        }
        var minqtyenabl = false;
        if (productObj.promotionalMessage != null && productObj.promotionalMessage != "" && productObj.promotionalMessage != undefined && productObj.promotionalMessage != 'undefined' && productObj.promotionalMessage != "Click & Collect") {
            var Promos;
            if (productObj.promotionalMessage.indexOf('|') >= 0) {
                if((productObj.promotionalMessage.split('|')[0].indexOf('Minimum') >= 0 || productObj.promotionalMessage.split('|')[0].indexOf('minimum') >= 0) && productObj.promotionalMessage.split('|')[1] != undefined){
                    Promos = productObj.promotionalMessage.split('|')[1];
                    minqtyenabl = true
                }else{
                    Promos = productObj.promotionalMessage.split('|')[0];
                }
                if(Promos == ""){
                    Promos = productObj.promotionalMessage.split('|')[1];
                }
            } else {
                Promos = productObj.promotionalMessage
            }
            var promo_div = document.createElement('div')
            promo_div.classList.add('promo_div_block')
            promo_div.innerText = Promos
            if(Promos.length < 20){
                
                //promo_div.style.fontSize = "20px"
                promo_div.style.display = "block"
            }else{
                if(Promos.length > 20){
                    promo_div.style.fontSize = "9px"
                    if(blockType == "sidebar"){
                        promo_div.style.fontSize = "12px"
                    }
                }
                promo_div.style.display = "block"
            }
            if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                elproductOfferHeaderBlock.classList.add('black_promo');
            } else if (Promos == "Clearance") {
                elproductOfferHeaderBlock.parentNode.classList.add('yellow_promo');
            } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                elproductOfferHeaderBlock.parentNode.classList.add('green_promo');
            } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                elproductOfferHeaderBlock.parentNode.classList.add('blue_promo');
            } else {
                elproductOfferHeaderBlock.parentNode.classList.add('red_promo');
            }
            if(productObj.promotionalMessage.indexOf('Minimum order') >= 0){
                elOfferTextBlock.style.display="block"
                //promo_div.style.fontSize = "11px"
            }
            if(productObj.promotionalMessage.split('|')[1] != undefined){
                elproductOfferHeaderBlock.appendChild(promo_div)
                productBlock.classList.add('pipeline_promo')
                var promo_div1 = document.createElement('div')
                promo_div1.classList.add('promo_div_block')
                if(parentblock != null && parentblock != undefined){
                    parentblock.classList.add('promo_available')
                }
                if(minqtyenabl == false){
                    promo_div1.innerText = productObj.promotionalMessage.split('|')[1]
                }else{
                    promo_div1.innerText = productObj.promotionalMessage.split('|')[0]
                }
                if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                    elOfferTextBlock.classList.add('black_promo');
                } else if (Promos == "Clearance") {
                    elOfferTextBlock.parentNode.classList.add('yellow_promo');
                } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                    elOfferTextBlock.parentNode.classList.add('green_promo');
                } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                    elOfferTextBlock.parentNode.classList.add('blue_promo');
                } else {
                    elOfferTextBlock.parentNode.classList.add('red_promo');
                }
                elOfferTextBlock.appendChild(promo_div1)
            }else{
                if(productObj.promotionalMessage.split('|')[0].indexOf('Minimum') >= 0 || productObj.promotionalMessage.split('|')[0].indexOf('minimum') >= 0){
                    if(parentblock != null && parentblock != undefined){
                        parentblock.classList.add('promo_available')
                    }
                    elOfferTextBlock.appendChild(promo_div)
                }else{
                    if(blockType == "am" || blockType == "sidebar"){
                        var promo_dive = document.createElement('div')
                        promo_dive.classList.add('empty_promo')
                        elOfferTextBlock.appendChild(promo_dive)
                    }
                    elproductOfferHeaderBlock.appendChild(promo_div)
                }
            }

        } else {
            let promo_div = document.createElement('div')
            promo_div.classList.add('empty_promo')
            elOfferTextBlock.appendChild(promo_div)
            elofferBlock.classList.add('Nopromo');
        }
        
        var qty_title=document.createElement('label')
        qty_title.innerText = INC.config.qtyText
        elQtyBlock.appendChild(qty_title);
        var elQtyInput = this.generateHTMLTags('input');

        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('name', "number");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 99);
        elQtyInput.setAttribute('maxlength', 99);
        elQtyInput.setAttribute('inputmode', 'numeric');
        elQtyInput.setAttribute('data-focus-visible-added', '');
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute('pattern', '[1-9]\\d*');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.' || event.key==='-'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInputText.appendChild(elQtyInput);
        if (productObj.promotionalMessage != null && productObj.promotionalMessage != undefined && productObj.promotionalMessage != 'undefined') {
            if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
                var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];
                elQtyInput.setAttribute('title', productObj.promotionalMessage.split('|')[0]);
                elQtyInput.setAttribute('type', 'number');
                elQtyInput.setAttribute('min', min_q);
                elQtyInput.setAttribute('value', min_q);
                elQtyInput.value = min_q;
                elQtyInput.setAttribute('old_qty', min_q);
                // elQtyInput.setAttribute('maxlength', 2);
                elQtyDownBlock.style.pointerEvents = "none";

            }
        }
        elQtyInput.addEventListener('click', function () {
            this.focus()
        })
        elQtyInput.addEventListener("keydown", function (event) {
            var keyCode = event.which || event.keyCode;
            
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            setTimeout(function () {
                qtyupdateInc(productBlock, elQtyInput, elPackOfListBlock, productObj, getSelectorClassName, classNames, elAddText)
            }, 500);
        });
        
        elQtyInput.addEventListener('focusout', function () {
            var elmt = this
            setTimeout(function () {
                qtyupdateInc(productBlock, elmt, elPackOfListBlock, productObj, getSelectorClassName, classNames, elAddText)
            }, 50);
        });

        

        elQtyInputText.appendChild(elQtyInput);

        elQtyDownBlock.addEventListener('click', function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
            if(prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input') != null){
                prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=elQtyInput.value
            }
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == INC.config.AddedText || elAddText.innerText == INC.config.UpdateText) {
                if(productBlock.getAttribute('module_inc') != 'tickbox'){
                    INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
                }
            }
        });

        elQtyUpBlock.addEventListener('click', function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
            prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=elQtyInput.value
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == INC.config.AddedText || elAddText.innerText == INC.config.UpdateText) {
                if(productBlock.getAttribute('module_inc') != 'tickbox'){
                    INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
                }
            }
        });

        

        
        if(productColorsObj.colorArray.length > 0){
            eldescblock.classList.add('promo_attr_avail')
            elAttColorListBlock.innerHTML = "";
            var one_attr_flag=false
            if(productColorsObj["colorArray"].length == 1){
                one_attr_flag = true
            }
            if (productColorsObj["colorArray"].length > 0) {
                if(productColorsObj["colorArray"][0].code != "Color"){
                    productBlock.classList.add('inc_variant_new'+productColorsObj["colorArray"].length)
                    var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                    var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                    //select_option_inc_title.innerText = ""+productColorsObj["colorArray"][0].code+":"
                    select_option_inc_block.appendChild(select_option_inc_title)
                    var selectvariant = generate_html_tag('select','inc_variant_tag')
                    select_option_inc_block.appendChild(selectvariant)
                    selectvariant.setAttribute('id','variant_inc_avail')
                    selectvariant.setAttribute('onchange','inc_onchange_color_variant(this)')
                    elAtt3Block.parentNode.insertBefore(select_option_inc_block,elAtt3Block)
                    var variantoption1 = generate_html_tag('option','variantoption')
                    variantoption1.innerText = "Please select: " + productColorsObj["colorArray"][0].code;
                    eladdvarianttext.innerText = "Select " + productColorsObj["colorArray"][0].code;
                    variantoption1.setAttribute('disabled','disabled')
                    variantoption1.setAttribute('selected','selected')
                    variantoption1.setAttribute('data-size', "");
                    variantoption1.setAttribute("datasize", "");
                    variantoption1.setAttribute("data-cpid","");
                    variantoption1.setAttribute('data-option', "");
                    selectvariant.appendChild(variantoption1)
                    // elAtt3Block.parentNode.insertBefore(selectvariant,elAtt3Block)
                    productColorsObj["colorArray"].forEach(function (sizeObj) {
                        var variantoption = generate_html_tag('option','variantoption')
                        variantoption.innerText = sizeObj["text"];
                        variantoption.setAttribute('data-size', sizeObj["text"]);
                        variantoption.setAttribute("data-cpid", sizeObj["cpid"]);
                        variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        variantoption.setAttribute('data-option', "1");
                        variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        selectvariant.appendChild(variantoption)
                        
                    });
                }
                productColorsObj["colorArray"].forEach(function (colorObj) {
                    elAttColorBlock.style.display="none"
                    elAttColorBlock.classList.add("active");
                    elAttColorTitleText.innerText = "Colour:";
                    var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                    var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                    var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
        
                    attColorImgBlock.addEventListener("click", function () {
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if(atteditbutton != null){
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = INC.config.EditText
                        }
                        elAttColorBlock.classList.remove('show_dropdown')
                        
                        if(productBlock.querySelector('.close_read_more') != null){
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var colorText = this.getAttribute("data-color")
                        elAttBlock.setAttribute("data-color", colorText);

                        if(atteditbutton != null){
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_block')

                        for(let cl=0;cl<all_color_list_item_img.length;cl++){
                            all_color_list_item_img[cl].classList.remove("active");
                        }
                        
                        this.parentNode.classList.add("active");

                        elAttColorTitleTextSelected.innerText = colorText;
                    
                        var alloptions = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block #variant_inc_avail').querySelectorAll('option');
                        var sel_variant = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block #variant_inc_avail');
                        for (var g = 0; g < alloptions.length; g++) {
                            if (alloptions[g].getAttribute('datasize') == colorText.toLocaleLowerCase()) {
                                alloptions[g].selected = 'selected'
                                inc_onchange_color_variant(sel_variant)
                                break;
                            }
                        }

                        prod_card_attr_block.querySelector('.inc_product_desc_add_err_text_block').innerHTML = '';
                    });
        
                    
        
                    attColorImg.style.backgroundColor = colorObj["colorCode"];
        
                    var colorTitle = INC.methods.generateHTMLTags('a');
                    colorTitle.innerText = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                    attColorImg.appendChild(colorTitle);
                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    attColorImgBlock.setAttribute('data-option', "0");
                    attColorImgBlock.setAttribute("data-cpid", colorObj["cpid"]);
                    
                    attColorImgBlock.appendChild(attColorImg);
                    attColorBlock.appendChild(attColorImgBlock);
                    elAttColorListBlock.appendChild(attColorBlock);
                    var prod_id = productBlock.getAttribute('data-main_id');
                    if(one_attr_flag == true){
                        setTimeout(function(){
                            if(INC.methods.getProductIdFromWebPage() == prod_id){  
                                attColorImgBlock.click()
                            }
                        },0)
                    }
                });
            }
        }
        if(product0Obj.att0Array.length > 0){
            eldescblock.classList.add('promo_attr_avail')
            if(product0Obj["att0Array"][0].code != "Color"){
                elAttBlock.classList.add('config_avail')
                elAttBlock.classList.add('elipsis_inc')
                productBlock.classList.add('inc_variant_new'+product0Obj.att0Array)
                // elp_var_title.innerHTML = INC.config.ColorSizeText
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                var productSizeText = "";
                let select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                let select_option_inc_title = generate_html_tag('div','select_option_inc_title')
            // select_option_inc_title.innerText = "Body Size:"
                select_option_inc_block.appendChild(select_option_inc_title)
                let selectvariant = generate_html_tag('select','inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id','variant_inc_avail')
                selectvariant.setAttribute('onchange',''+inc_onchange_variant(this)+'')
                elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
                let variantoption1 = generate_html_tag('option','variantoption')
                variantoption1.innerText = "Select your option";
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("data-cpid", "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option','variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute("data-cpid", sizeObj["cpid"]);
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if(product0Obj["att0Array"].length == 1){
                        variantoption.selected = 'selected'
                    }
                    selectvariant.appendChild(variantoption)
                    
                });
                if (product0Obj["att0Array"].length > 0) {
                    elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                    elAtt0Block.classList.add("active");
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                        attSizeImgBlock0.addEventListener("click", function () {
                            if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                            if(atteditbutton != null){
                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                atteditbutton.innerText = INC.config.EditText
                            }
                            elAtt0Block.classList.remove('show_dropdown')
                            
                            if(productBlock.querySelector('.close_read_more') != null){
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size");

                            elAttBlock.setAttribute("data-zero", attr_text);

                            if(atteditbutton != null){
                                // atteditbutton.parentNode.classList.add('active')
                            }
                            
                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                            for(let cl=0;cl<all_color_list_item_img.length;cl++){
                                all_color_list_item_img[cl].classList.remove("active");
                            }
                            
                            this.classList.add("active");
                            
                            elAtt0TitleText.innerText = attr_text;

                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText=sel_size
                            

                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                            var productModuleBlock = productBlock.parentNode.parentNode;

                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');
                            
                            var sel_attr_text=""
                            if(color_text != undefined){
                                sel_attr_text = color_text
                            }
                            if(zero_text != undefined){
                                if(sel_attr_text == ""){
                                    sel_attr_text = zero_text
                                }else{
                                    sel_attr_text = sel_attr_text + " / " + zero_text
                                }
                            }
                            if(size_text != undefined){
                                sel_attr_text = sel_attr_text + " / " + size_text
                            }
                            if(third_text != undefined){
                                sel_attr_text = sel_attr_text + " / " + third_text
                            }
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                            }
                            
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                            
                        });
                        
                        attSizeImgBlock0.classList.add('avail')
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];
                        
                        reg.test(chckType);
                        
                        
                        attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        if(product0Obj["att0Array"][0].code == "Size"){
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }else if(product0Obj["att0Array"][0].code == "letter"){
                            attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                        } else if(product0Obj["att0Array"][0].code == "choose"){
                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        }else{
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }
                            
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        
                    });
                    
                }
            }
        }
        
        var sizezero=INC.dataStore.methods().getProductopt0Obj(findObj)
        
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.innerText = "Add"
            switch (blockType) {
                case "pdp":  eladdvarianttext.innerText = "Add"; break;
                case "sidebar":
                case "am":  eladdvarianttext.innerText = "Add for Delivery"; break;
            }
            productBlock.classList.remove('simple')
            productBlock.classList.remove('configurable')
            productBlock.classList.add('simple')
            eladdvarianttext.classList.add('simple')
        }else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.innerText = "View colours";
            eladdvarianttext.innerText = "Select" +" "+productColorsObj["colorArray"][0].code;
            eladdvarianttext.classList.add('config')
            elconfigtitle.innerText = "Please select:" +" "+productColorsObj["colorArray"][0].code;
            elconfigtitle.setAttribute('style','color: #000;')
            elvariantaddbtntext.innerText = "Add";
            if(blockType == "pdp"){
                elvariantaddbtntext.setAttribute('style','display: block !important;')
            }
            productBlock.classList.remove('simple')
            productBlock.classList.remove('configurable')
            productBlock.classList.add('configurable')
            elvariantviewdetailstext.innerText = "View Details";
        }else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.innerText = "Select" +" "+productColorsObj["colorArray"][0].code;
            eladdvarianttext.classList.add('config')
            if(blockType == "pdp"){
                elvariantaddbtntext.setAttribute('style','display: block !important;')
            }
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.innerText = "View Sizes";
            elconfigtitle.innerText = "Please select:" +" "+productColorsObj["colorArray"][0].code;
            elconfigtitle.setAttribute('style','color: #000;')
            elvariantviewdetailstext.innerText = "View Details";
            productBlock.classList.remove('simple')
            productBlock.classList.remove('configurable')
            productBlock.classList.add('configurable')
        }
        if(productColorsObj["colorArray"].length == 1 || sizezero["att0Array"].length == 1){
            // eladdvarianttext.innerText = "Add";
            switch (blockType) {
                case "pdp":  eladdvarianttext.innerText = "Add"; break;
                case "sidebar":
                case "am":  eladdvarianttext.innerText = "Add for Delivery"; break;
            }
            eladdvarianttext.classList.add('simple')
        }
        elvariantaddbtn.addEventListener('click',function(){
            var productModuleBlock = productBlock.parentNode.parentNode
            if((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == true) && this.innerText.trim() != "Add for Delivery"){
                var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                if(flag_check == 1){
                    if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('html').classList.remove('inc_popup_open')
                    }
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    if(window.innerWidth < 820){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                                    document.querySelector('body').style.position = "relative"
                                }
                                if(inc_scroll_height > 100){
                                    window.scrollTo(0,inc_scroll_height);
                                }
                            }
                        }
                    }
                    productBlock.classList.remove('show_overlay')
                    if(this.textContent.trim() == "Add"){
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        if(document.querySelector('.inc_product_modal_block.active') != null){
                            document.querySelector('html').classList.add('inc_popup_open')
                        }
                    }
                }else{
                    if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                        productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                    }
                }
            }else{
                if(this.innerText.trim() == "Add for Delivery"){
                    let moduleblk=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    let flag_check = INC.methods.checkVariantSelection(moduleblk)
                    if(flag_check == 1){
                        if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        if(window.innerWidth < 820){
                            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                    if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                                        document.querySelector('body').style.position = "relative"
                                    }
                                    if(inc_scroll_height > 100){
                                        window.scrollTo(0,inc_scroll_height);
                                    }
                                }
                            }
                        }
                        productBlock.classList.remove('show_overlay')
                        if(this.textContent.trim() == "Add to basket"){
                            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                            if(document.querySelector('.inc_product_modal_block.active') != null){
                                document.querySelector('html').classList.add('inc_popup_open')
                            }
                        }
                    }else{
                        if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                            productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                        }
                    }
                }else{
                    let moduleblk=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    let flag_check = INC.methods.checkVariantSelection(moduleblk)
                    if(flag_check == 1){
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        if(document.querySelector('.inc_product_modal_block.active') != null){
                            document.querySelector('html').classList.add('inc_popup_open')
                        }
                        
                    } else{
                        if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                            productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_err_text_block').innerHTML = "Please select : " + productColorsObj["colorArray"][0].code;
                        }
                    }
                }
                
            }
        })

        elvariantviewdetails.addEventListener('click',function(){
            productBlock.classList.remove('show_overlay')
            this.parentNode.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('active')
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_details_prod_block').click()
        })
        elselectoptaddbtn.addEventListener('click',function(){
            if(blockType == "tickbox" && window.innerWidth > 819){
                if(blockType == "tickbox"){
                    inc_scroll_height = window.$(".inc_pdp_tick_box_block").offset().top
                }
                productBlock.querySelector('.inc_product_img_main_zoom_btn_img').click()
            }else{
                if(document.querySelector('.inc_product_desc_att_block.active') != null){
                    document.querySelector('.inc_product_desc_att_block.active').classList.remove('active')
                }
                if(this.querySelector('.inc_product_variant_simple_text.simple') != null){
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                }else{
                    productBlock.classList.add('show_overlay')
                    this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('active')
                    
                }
                if(window.innerWidth < 820){
                    if(document.querySelector('.inc_product_variant_simple_text.config') != null)
                    document.querySelector('html').classList.add('inc_overlay')
                }
            }
        })
        if(productObj.ProductType == "configurable" && (INC.config.pageType == "productList" || INC.config.pageType == "cartPage")){
            if(productColorsObj["colorArray"].length > 1 || sizezero["att0Array"].length > 1){
                let emptyDivConfig = generate_html_tag('div','empty_config_')
                elAttDetails.parentNode.insertBefore(emptyDivConfig,elAttDetails)
            }
        }
        switch (blockType) {
            case "pdp":
            case "tickbox":
                elAddText.innerText = INC.config.AddText;
                break;
            case "sidebar":
                elAddText.innerText = "Add for Delivery";
                elAddTextclickcollect.innerText = "Click & Collect";
                break;
            case "am":
                elAddText.innerText = "Add for Delivery";
                elAddTextclickcollect.innerText = "Click & Collect";
                break;
        }
        elAddBlock.addEventListener("click", function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            var productModuleBlock = productBlock.parentNode.parentNode;

            var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            var sku = productBlock.getAttribute('data-sku');
            var mainId = productBlock.getAttribute('data-main_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
            var qty = parseInt(elQtyInput.value);
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            if(prod_card.classList.contains('inc_product_showcase_block')){
                prod_card = prod_card.parentNode;
            }
            INC.config.product_seq.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            if(prod_card.parentNode.className.includes('_tick_box_') && document.querySelector('.inc_product_block.show_overlay .attributes_avail.active .inc_product_desc_variant_popup_close_block') != null){
                document.querySelector('.inc_product_block.show_overlay .attributes_avail.active .inc_product_desc_variant_popup_close_block').click()
            }
            if((document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null) || (document.querySelector('.inc_sidebar_modal_block.active') == null && blockType == "tickbox")){
                if(flag_check == 1 || onloadpdp == false){
                    switch (elAddText.innerText) {
                        case "Add": elAddText.innerText = "Added";
                            elAddText.classList.add('added');
                            elAddText.parentNode.parentNode.classList.add('Inc_checked');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Update";
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.add('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                            }
                            elAddImg.classList.add("checked");
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                            INC.config.product_seq.push(main_id)
                            if (INC.config.pageType == "pdp" && blockType == "pdp" && productModuleBlock.getAttribute('module_inc') != 'tickbox'){ 
                                INC.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
                            }
                            if(prod_card != null){
                                if(prod_card.querySelector('.inc_product_modal_block.active') != null){
                                    document.querySelector('body').style.position = "relative"
                                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                            document.querySelector('body').style.position = "relative"
                                            if(inc_scroll_height > 100){
                                                window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                            }
                                        }
                                    }
                                    prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                                }
                                
                            }
                            if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                                productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Added"
                                if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
                                }
                            }
                            productModuleBlock.querySelector('.inc_product_desc_add_block').classList.add('added_inc')
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.add('added_inc')
                            productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Update"
                            productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.add('inc_green')
                            break;
                        case "Added":
                            if(modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != "Update" && prod_card.querySelector('.inc_product_modal_block.active') != null){
                                                            
                                elAddText.innerText = "Add";
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Add";
                                let pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Add"
                                }
                                if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                }
                                productModuleBlock.querySelector('.inc_product_desc_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Add"
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.remove('inc_green')
                                INC.config.product_seq.remove_prod_list(main_id);
                                if (INC.config.pageType == "pdp" && blockType == "pdp" && productModuleBlock.getAttribute('module_inc') != 'tickbox') {
                                    INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,pname,pprice);
                                }
                            }else{
                                if(prod_card.querySelector('.inc_product_modal_block.active') == null){
                                    elAddText.innerText = "Add";
                                    elAddText.classList.remove('added');
                                    elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Add";
                                    let pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                    if (pListItemBlock != null) {
                                        pListItemBlock.classList.remove('product_added');
                                        pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                    }
                                    if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                                        productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Add"
                                    }
                                    if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                        productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                    }
                                    productModuleBlock.querySelector('.inc_product_desc_add_block').classList.remove('added_inc')
                                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.remove('added_inc')
                                    productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Add"
                                    productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.remove('inc_green')
                                    elAddImg.classList.remove("checked");
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                    INC.config.product_seq.remove_prod_list(main_id);
                                    if (INC.config.pageType == "pdp" && blockType == "pdp" && productModuleBlock.getAttribute('module_inc') != 'tickbox') INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,pname,pprice);
                                }
                            }
                            // if(prod_card.querySelector('.inc_product_modal_block.active') == null){
                            //     if(document.querySelector('.inc_pdp_block') != null){
                            //         inc_scroll_height= window.$(".inc_pdp_block").offset().top
                            //     }
                            // }
                            if(prod_card != null){
                                if(prod_card.querySelector('.inc_product_modal_block.active') != null){
                                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                            document.querySelector('body').style.position = "relative"
                                            if(inc_scroll_height > 100){
                                                window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                            }
                                        }
                                    }
                                    prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                                }
                            }
                            break;
                    }
                }else{
                    // if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                    //     productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                    //     document.querySelector('html').classList.remove('inc_overlay');
                    //     document.querySelector('html').classList.remove('inc_popup_open');
                    // }
                    if(document.querySelector('.inc_product_desc_att_block.attributes_avail.active') == null){
                        if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                            // document.querySelector('html').classList.remove('inc_overlay');
                            // document.querySelector('html').classList.remove('inc_popup_open');
                        }
                    }else{
                        if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                            productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                        }
                        if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                            productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                        }
                    }
                    
                }
            }else{
                if(flag_check == 1){
                    elAddText.innerText = "Adding...";
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                    if (INC.config.recommendation){
                        setTimeout(function(){
                            var a = document.querySelector(".header-wrapper")
                            a.scrollIntoView();
                        },250)
                    }
                }else{
                    // if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                    //     productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                    //     if(document.querySelector('.sidebar_outer.sidebar_outer_active') == null && document.querySelector('.inc_product_modal_block.active') == null){
                    //         document.querySelector('html').classList.remove('inc_overlay');
                    //         document.querySelector('html').classList.remove('inc_popup_open');
                    //     }
                    // }
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                        productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                        if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_title_text_block')!=null){
                            var errorMessage = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_title_text_block').innerText
                        }
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_err_text_block').innerHTML = errorMessage;
                    }
                }
            }
            setTimeout(function(){
                if(document.querySelector('.inc_product_modal_block.active') == null){
                    document.querySelector('html').classList.remove('inc_overlay');
                    document.querySelector('html').classList.remove('inc_popup_open');
                }
                if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                    document.querySelector('html').classList.add('inc_overlay');
                }
            },100)
        });


        elAddBlockclickcollect.addEventListener("click", function() {
            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }
            var productModuleBlock = productBlock.parentNode.parentNode;
            if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null) {
                // console.log("")
            } else {
                if (productModuleBlock.querySelector('.img_color_swatch') != null) {
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        elAddTextclickcollect.innerText = "Adding...";
                        elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                    } else {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                    }
                } else {
                    elAddTextclickcollect.innerText = "Adding...";
                    elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                }
            }

        });
        return productBlock;
    }
}

INC.methods.checkVariantSelection = function(prod_module_block){
    var attr_flag_size = false;
    var attr_flag_color = false;
    var elSize = prod_module_block.querySelector('#variant_inc_avail')
    var elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.active')
    if(elSize != null){
        var eldataOption = elSize.options[elSize.selectedIndex].getAttribute("data-option");
        if(eldataOption != ""){
            attr_flag_size = true
        }
    }else{
        attr_flag_size = true
    }
    if(elColor != null){
        //inc_product_desc_att_color_list_item_block active
        if(elColor.querySelector('.inc_product_desc_att_color_list_item_img_block.active') != null || elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null || elColor.parentNode.parentNode.querySelector('.inc_product_variant_simple_text').classList.contains('simple') == true){
            attr_flag_color = true
        }
    }else{
        attr_flag_color = true
    }
    if(attr_flag_color == true && attr_flag_size == true){
        return 1
    }else{
        return 0
    }
}

INC.methods.createProductModalBlock = function (pdpProductId, blockType) {
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    if(Object.keys(productObj).length != 0){
        var getSelectorClassName = this.getSelectorClassName;

        var price_htmlprc = productBlock.querySelector('.inc_product_desc_title_block').innerHTML
        var price_siblingprc=productBlock.querySelector('.inc_product_view_img_desc_block')
        var html_prc_blockprc = document.createElement('div');
        html_prc_blockprc.classList.add('inc_product_desc_title_block')
        html_prc_blockprc.innerHTML = price_htmlprc
        var price_html_remrd = productBlock.querySelector('.inc_product_desc_title_block');
        price_html_remrd.parentNode.removeChild(price_html_remrd);
        price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)

        var price_html = productBlock.querySelector('.inc_product_desc_ratings_block').innerHTML
        var price_sibling=productBlock.querySelector('.inc_product_manufacture_text_block')
        var html_prc_block = document.createElement('div');
        html_prc_block.classList.add('inc_product_desc_ratings_block')
        html_prc_block.innerHTML = price_html
        var price_html_rem = productBlock.querySelector('.inc_product_desc_ratings_block');
        price_html_rem.parentNode.removeChild(price_html_rem);
    
        price_sibling.appendChild(html_prc_block);

        if(window.innerWidth < 820){
            var desc_htmlprc = productBlock.querySelector('.inc_product_view_short_desc_block').innerHTML
            var desc_siblingprc=productBlock.querySelector('.inc_product_desc_block')
            var html_prc_descblock = document.createElement('div');
            html_prc_descblock.classList.add('inc_product_view_short_desc_block')
            html_prc_descblock.setAttribute('style','margin-top: 20px;border-top: 6px solid #f1f1f1;')
            html_prc_descblock.innerHTML = desc_htmlprc
            html_prc_descblock.querySelector('.inc_product_view_img_desc_text').setAttribute('style','margin-top: 12px;')
            var desc_html_remrd = productBlock.querySelector('.inc_product_view_short_desc_block');
            desc_html_remrd.parentNode.removeChild(desc_html_remrd);
            desc_siblingprc.appendChild(html_prc_descblock)

            productBlock.querySelector('.inc_product_view_short_desc_block').style.display = "none";
        }
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.setAttribute('module_inc', blockType);
        productBlock.classList.add(productObj.ProductType)
        var elHeaderInfoBlck = getViewElement("productInfoMainBlock");
        var elHeader = getViewElement("productHeaderMainBlock");
        var elInfoText = getViewElement("productInfoText");
        var elImgBlock = getViewElement("productImgBlock");
        var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
        var elTitleBlock = getViewElement("productTitleBlock");
        var elTitleText = getViewElement("productTitleText");
        var elMTitleText = getViewElement("productMaufactureText")
        var elPriceActiveText = getViewElement("productPriceActiveText");
        var elPriceRegularText = getViewElement("productPriceRegularText");
        var elPriceActiveTextExc = getViewElement("productPriceActiveTextExc");
        var elPriceRegularTextExc = getViewElement("productPriceRegularTextExc");
        var elAttBlock = getViewElement("productAttBlock");
        var elAttColorBlock = getViewElement("productAttColorBlock");
        var elAttColorTitleText = getViewElement("productAttColorTitleText");
        var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
        var elAttColorListBlock = getViewElement("productAttColorListBlock");
        var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
        var elOfferTextBlock = getViewElement("productOfferTextBlock");
        var elAtt0Block = getViewElement("productAttzeroBlock");
        var elAtt0TitleText = getViewElement("productAttzeroTitleText");
        var elPackOfListBlock = getViewElement("productPackOfListBlock");
        var elQtyBlock = getViewElement("productQtyBlock");
        var elQtyInputText = getViewElement("productQtyInputText");
        var elQtyDownBlock = getViewElement("productQtyDownBlock");
        var elQtyUpBlock = getViewElement("productQtyUpBlock");
        var elAddBlock = getViewElement("productAddBlock");
        var elAddText = getViewElement("productAddText");
        var elratingsBlock = getViewElement("productRatingsBlock");
        var elworthPrice = getViewElement("productPriceWorthText");
        var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
        var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
        var elzoomplus = getViewElement("productImgMainZoomBtnImg");
        var elzoomminus = getViewElement("productImgMainZoomminusImg");
        var elzoomreturn = getViewElement("productImgMainZoomRuturnImg");
        var img_block = getViewElement("productImgMainImgBlock");
        var elcolortitleblock = getViewElement("productAttColorTitleBlock");
        var elsizetitleblock = getViewElement("productAttzeroTitleBlock");
        var elProductDescriptionText=getViewElement("productDescriptionHeaderTitleText")
        var elMaindescription = getViewElement("productDescriptionMainBlock")
        var elviewdetailheader = getViewElement("productHeaderBlock")
        var eldescheader = getViewElement("productDescriptionHeaderBlock")
        var elInfomain = getViewElement("productInfoMainBlock")
        var elcloseblk = getViewElement("productHeaderImgBlock")
        var eldescblock = getViewElement("productDescBlock");
        var elshortdesc = getViewElement("productViewshortDescText")
        var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
        var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
        var elofferBlock = getViewElement("productOfferBlock");
        var elproductOfferHeaderBlock = getViewElement("productOfferHeaderBlock");
        var elAtt3Block = getViewElement("productAttSizeBlock");
        var elAtt4Block = getViewElement("productAttSizeBlock");

        elMTitleText.innerHTML = "<span>Product code:</span>" + productObj.idAdd; 
        elAddTextclickcollect.innerText = "Click & Collect";

        elPriceActiveTextExc.classList.add('inc_product_desc_price_active_text')
        elPriceRegularTextExc.classList.add('inc_product_desc_price_regular_text')
        elPriceActiveText.classList.add('incvat_')
        elPriceRegularText.classList.add('incvat_')

        if(window.innerWidth > 820){
            var new_tab = document.createElement('div');
            new_tab.classList.add('inc_tab_open');
            var p_link = document.createElement('a');
            var devURL;
            if (window.location.host == "www-cand1.dev.wickes.co.uk") {
                devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk/')
                p_link.href = devURL;
            }else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
                devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
                p_link.href = devURL;
            }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
                devURL = productObj.url.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
                p_link.href = devURL;
            } else {
                p_link.href = productObj.url;
            }
            p_link.target = "_blank";
            p_link.innerHTML = "Open in new Tab";
            new_tab.appendChild(p_link);
            elcloseblk.parentNode.insertBefore(new_tab,elcloseblk);

            p_link.addEventListener('click',function(){
                var producttype=productObj.Field6;
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'), producttype, blockType);
            })
            if(productObj.GenericField != null){
                if(productObj.GenericField.split('|')[0] != ''){
                    var RatingDivlink = document.createElement('div');
                    RatingDivlink.classList.add("inc_modal_energy_Rating_link");
                    var Ratinglink = document.createElement('a');
                    Ratinglink.innerText = "Product Information"
                    Ratinglink.setAttribute('href', productObj.GenericField.split('|')[0]);
                    Ratinglink.target = "_blank"
                    RatingDivlink.appendChild(Ratinglink);
        
                    new_tab.parentNode.insertBefore(RatingDivlink,new_tab);
                }
            }
        }

      
        elAddBlockclickcollect.style.display = "none"

        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

        elviewdetailheader.classList.add('active')
        elInfomain.classList.add('active')
        elcloseblk.classList.add('outer')
        elviewdetailheader.addEventListener('click',function(){
            if(productBlock.querySelector('.inc_product_description_main_block.desc_avail') != null){
                productBlock.querySelector('.inc_product_description_main_block.desc_avail').classList.remove('active')
            }
            productBlock.querySelector('.inc_product_Description_header_block').classList.remove('active')
            this.classList.add('active')
            productBlock.querySelector('.inc_product_info_main_block').classList.add('active')  
        })

        eldescheader.addEventListener('click',function(){
            if(productBlock.querySelector('.inc_product_description_main_block.desc_avail') != null){
                productBlock.querySelector('.inc_product_info_main_block').classList.remove('active')  
                productBlock.querySelector('.inc_product_description_main_block').classList.add('active')  
            }
            
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').classList.remove('active')
            this.classList.add('active')

            window.$(".inc_product_modal_block.active .inc_product_block .inc_product_description_main_block").animate({ scrollTop:  0 }, 0);
        })

        if(window.innerWidth < 820){
            elHeader.addEventListener("click", function () {
                if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                    document.querySelector('html').classList.remove('inc_overlay');
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                            document.querySelector('body').style.position = "relative"
                            if(inc_scroll_height > 100){
                                window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                            }
                        }
                    }
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                            if(inc_scroll_height > 100){
                                window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                            }
                        }
                    }
                    
                }
                document.querySelector('html').classList.remove('inc_popup_open')
                if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                }
                if(productBlock.querySelector('.close_read_more') != null){
                    productBlock.querySelector('.close_read_more').click()
                }
                if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                    productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
                }
                if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                    productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
                }
                productBlock.parentNode.classList.remove("active");
            });
        }

        

        img_block.setAttribute('role','img')
        img_block.setAttribute('aria-label','Image')
        
        elzoomplus.addEventListener('click',function(){
            this.parentNode.classList.add('active')
            var mainimgel = this.parentNode.parentNode.parentNode.parentNode
            if(window.innerWidth < 1200){
                mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:200%;')
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = "300px"
            }else{
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = "272px"
            }
        })
        elzoomminus.addEventListener('click',function(){
            this.parentNode.classList.remove('active')
            var mainimgel = this.parentNode.parentNode.parentNode.parentNode
            if(window.innerWidth < 1200){
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
                mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:100%;')
            }else{
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
            }
        })
        elzoomreturn.addEventListener('click',function(){
            this.parentNode.classList.remove('active')
            var mainimgel = this.parentNode.parentNode.parentNode.parentNode
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
            if(window.innerWidth < 1200){
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
                mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:100%;')
            }else{
                mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
            }
        })

        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
            if(docpdpinc != null){
                if(window.innerWidth < 1025 && window.innerWidth > 819){
                    docpdpinc.scrollLeft = 0
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                    }
                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                    }
                }
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
            }
            productBlock.parentNode.classList.remove("active");
        });

        var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
        var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURLMain });
        if(onloadpdp == true){
            elImgTag1.src = productObj.imageURLMain
        }

        elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
        elImgTag1.setAttribute('role','img')
        elImgTag1.setAttribute('aria-label','Image')
        if(productObj.nameMain != null){
            elImgTag1.setAttribute('alt',productObj.nameMain.toLocaleLowerCase())
        }else{
            elImgTag1.setAttribute('alt',productObj.nameMain)
        }
        setwidtheightimg(blockType,productBlock,'modal',elImgTag1)
        var productLink = document.createElement('a');

        if(productObj.url != undefined){
            var devURRl;
            if(productObj.url.indexOf('undefined') == -1){
                if (window.location.host == "www-cand1.dev.wickes.co.uk") {
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk')
                    productLink.href = devURRl;
                    productLink.setAttribute('data-href',devURRl);
                }else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
                    productLink.href = devURRl;
                    productLink.setAttribute('data-href',devURRl);
                }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
                    productLink.href = devURRl;
                    productLink.setAttribute('data-href',devURRl);
                } else {
                    productLink.href = productObj.url;
                    productLink.setAttribute('data-href',productObj.url);
                }
                
            }
        }
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList',productObj["otherImageList"])
        productLink.setAttribute('imageURL',productObj["imageURLMain"])
        add_swipe(productLink)
        
        

        elImgMainImg.appendChild(productLink);

        if(window.innerWidth < 820 && (INC.config.recommendation == false || blockType == "tickbox" || INC.config.pageType == "productList")){
            productLink.addEventListener("click", function(e) {
                e.preventDefault();
            });
        }

        elImgMainImg.addEventListener("click", function () {
            var producttype=productObj.Field6;
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
            var href = productBlock.querySelector('.inc_product_img_main_img a').href
            setTimeout(function(){
                window.location.href = href
            },3000)
        });

        elImgGalleryListBlock.innerHTML = "";

        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            var otimg=0
            productObj.otherImageList.forEach(function (otherImgURL) {
                let elOtherImgTag;
                if(productObj.otherImgURL.indexOf('undefined') == -1){
                    elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                    if(onloadpdp == true){
                        elOtherImgTag.src = otherImgURL
                    }
                }else{
                    elOtherImgTag = document.createElement('img')
                }
                elOtherImgTag.setAttribute('alt',productObj.name)
                elOtherImgTag.setAttribute('role','img')
                elOtherImgTag.setAttribute('aria-label','Image')
                elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );

                var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

                var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

                elImgGalleryListItemImg.appendChild(elOtherImgTag);
                elImgGalleryListItemBlock.setAttribute('index',otimg)
                elImgGalleryListItemBlock.addEventListener("click", function () {
                    Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("active");
                    });

                    elImgGalleryListItemBlock.classList.add("active");

                    elImgMainImg.querySelector('img').src = otherImgURL;
                    elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                    var activedots=elImgGalleryListItemBlock
                    if(activedots != null){
                        INC.config.inc_slideIndex = +activedots.getAttribute('index') + 1
                    }
                })

                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
                if(otimg == 0){
                    elImgGalleryListItemBlock.classList.add('active')
                }
                otimg++;
                if(productObj.otherImageList.length > 5){
                    elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
                }
            });

            // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
        }

        elTitleBlock.addEventListener("click", function () {
            var producttype=productObj.Field6;
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype, blockType);
            var href = productBlock.querySelector('.inc_product_desc_title_text a').href
            setTimeout(function(){
                window.location.href = href
            },3000)
        });

        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;

        
        var field1 = productObj.ratingsCount;
        INC.methods.get_product_ratings(field1,elratingsBlock, "modal");
        var pLink = document.createElement('a');
        if(productObj.url != undefined){
            if(productObj.url.indexOf('undefined') == -1){
                let devURRl;
                if (window.location.host == "www-cand1.dev.wickes.co.uk") {
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-cand1.dev.wickes.co.uk')
                    pLink.href = devURRl;
                    pLink.setAttribute('data-href',devURRl)
                }else if(window.location.host == 'www-vendor.dev.wickes.co.uk'){
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-vendor.dev.wickes.co.uk')
                    pLink.href = devURRl;
                    pLink.setAttribute('data-href',devURRl)
                }else if(window.location.host == 'www-cand3.dev.wickes.co.uk'){
                    devURRl = productObj.url.replace('https://www.wickes.co.uk','https://www-cand3.dev.wickes.co.uk')
                    pLink.href = devURRl;
                    pLink.setAttribute('data-href',devURRl)
                } else {
                    pLink.href = productObj.url;
                    pLink.setAttribute('data-href',productObj.url)
                }
                
            }
        }
        pLink.setAttribute('style','text-transform: unset;')
        pLink.setAttribute('title',productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);

        if(window.innerWidth < 820 && (INC.config.recommendation == false || blockType == "tickbox" || INC.config.pageType == "productList")){
            pLink.addEventListener("click", function(e) {
                e.preventDefault();
            });
        }
        
        if(productObj.description != ""){
            elProductDescriptionText.innerHTML = "Product Details";
            elProductDescriptionText.classList.add('desc_avail')
            elMaindescription.classList.add('desc_avail')
            
            if(window.innerWidth < 820){
                elMaindescription.innerHTML = productObj.description;
            }else{
                elMaindescription.innerHTML = productObj.description;
            }
            


            var short_desc=productObj.description;
            var deschtml =document.createElement('div')
            deschtml.innerHTML=short_desc;
            
            var newdescription = ""
            if(deschtml.innerText.length > 110) {
                var mainheaddesc=""
                if(deschtml.querySelector('h2') != null){
                    var remh2=deschtml.querySelector('h2')
                    remh2.parentNode.removeChild(remh2)
                }
                if(deschtml.querySelector('#product_long_description') != null){
                    mainheaddesc = ""
                    if(deschtml.querySelector('#product_long_description').childNodes[0] != undefined){
                        mainheaddesc = deschtml.querySelector('#product_long_description').childNodes[0].innerText
                    }
                    
                    if(mainheaddesc != undefined && mainheaddesc != ""){
                        var remspan2=deschtml.querySelector('#product_long_description').childNodes[0]
                        remspan2.parentNode.removeChild(remspan2)
                    }else{
                        mainheaddesc = ""
                    }
                    
                }
                if(mainheaddesc != ""){
                    newdescription = "<span style='font-weight:bold;line-height: 24px;'>" + mainheaddesc + "</span><br>" + deschtml.innerText.trim().substring(0,220) +"<span style='margin-left: -1px;'>...</span>" ;
                }else{
                    newdescription =  deschtml.innerText.trim().substring(0,220) +"<span style='margin-left: -1px;'>...</span>" ;
                }
                
            }else{
                newdescription = deschtml.innerText
            }
            elshortdesc.innerHTML = newdescription
            if(elInfoText.querySelector('h3') != null){
                elInfoText.querySelector('h3').style.display="none"
            }
            var red_m = document.createElement('a')
            red_m.classList.add('inc_readMore')
            red_m.innerHTML = "View product details" 
            red_m.setAttribute('style','text-decoration: underline;')
            // red_m.setAttribute('onClick','read_more_inc(this)')
            red_m.addEventListener('click',function(){
                read_more_inc(this)
            })
            
            if(productObj.description.length > 110){
                elshortdesc.parentNode.appendChild(red_m)
            }
            
            // var close_read_more = document.createElement('div');
            // close_read_more.classList.add('close_read_more');
            // elFullDesctext.parentNode.appendChild(close_read_more)

            // close_read_more.addEventListener('click',function(e){
                
            // });
        }
        
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();

        var excactivePrice = parseFloat(productObj.excactivePricemain).toFixed(2).toString();
        var excregularPrice = parseFloat(productObj.excregularPricemain).toFixed(2).toString();

        // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
        var totalsaveprc =  get_discount_price(productObj.regularPriceMain,productObj.activePriceMain)
        var totalsaveper =  get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)

        elPriceRegularText.innerText = "";
        
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        
            if(window.innerWidth < 820){
                elPriceActiveText.innerHTML = "<span>" +"From " +"</span>" + INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            }else{
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            }
            elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
            formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
            elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
        }else{
            elworthPrice.innerHTML =""
            if(window.innerWidth < 820){
                elPriceActiveText.innerHTML = "<span>" +"From " +"</span>" + INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            }else{
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
            }
        }

        //exclusive
        elPriceRegularTextExc.innerText = "";
        if (excactivePrice != excregularPrice && excregularPrice != "" && excregularPrice != null && excregularPrice != 0) {
            elPriceActiveTextExc.parentNode.parentNode.parentNode.classList.add('is_special_price')
        
            if(window.innerWidth < 820){
                elPriceActiveTextExc.innerHTML = "<span>" +"From " +"</span>" + INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            }else{
                elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            }
            elPriceRegularTextExc.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
            formatter.format(excregularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        }else{
            if(window.innerWidth < 820){
                elPriceActiveTextExc.innerHTML = "<span>" +"From " +"</span>" + INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            }else{ 
                elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
            }
        }
    //
        

        if (productObj.promotionalMessage != null && productObj.promotionalMessage != "" && productObj.promotionalMessage != undefined  && productObj.promotionalMessage != 'undefined' && productObj.promotionalMessage != "Click & Collect") {
            var Promos;
            if (productObj.promotionalMessage.indexOf('|') >= 0) {
                Promos = productObj.promotionalMessage.split('|')[0];
            } else {
                Promos = productObj.promotionalMessage
            }

            var promo_div = document.createElement('div')
            promo_div.classList.add('promo_div_block')
            promo_div.innerText = Promos
            if(Promos.length < 20){
                promo_div.style.fontSize = "20px"
                promo_div.style.display = "block"
            }else{
                if(Promos.length > 20){
                    promo_div.style.fontSize = "9px"
                    if(blockType == "sidebar"){
                        promo_div.style.fontSize = "12px"
                    }
                }
                promo_div.style.display = "block"
            }
            if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                elproductOfferHeaderBlock.classList.add('black_promo');
            } else if (Promos == "Clearance") {
                elproductOfferHeaderBlock.parentNode.classList.add('yellow_promo');
            } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                elproductOfferHeaderBlock.parentNode.classList.add('green_promo');
            } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                elproductOfferHeaderBlock.parentNode.classList.add('blue_promo');

            } else {
                elproductOfferHeaderBlock.parentNode.classList.add('red_promo');
            }
            
            
            if(productObj.promotionalMessage.split('|')[1] != undefined){
                elproductOfferHeaderBlock.appendChild(promo_div)
                productBlock.classList.add('pipeline_promo')
                var promo_div1 = document.createElement('div')
                promo_div1.classList.add('promo_div_block')
                promo_div1.innerText = productObj.promotionalMessage.split('|')[1]
        
                if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                    elOfferTextBlock.classList.add('black_promo');
                } else if (Promos == "Clearance") {
                    elOfferTextBlock.parentNode.classList.add('yellow_promo');
                } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                    elOfferTextBlock.parentNode.classList.add('green_promo');
                } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                    elOfferTextBlock.parentNode.classList.add('blue_promo');
                } else {
                    elOfferTextBlock.parentNode.classList.add('red_promo');
                }
                elOfferTextBlock.appendChild(promo_div1)
            }else{
                if(productObj.promotionalMessage.split('|')[0].indexOf('Minimum') >= 0 || productObj.promotionalMessage.split('|')[0].indexOf('minimum') >= 0){
                    elOfferTextBlock.appendChild(promo_div)
                }else{
                    elproductOfferHeaderBlock.appendChild(promo_div)
                }
            }

        } else {
            elofferBlock.classList.add('Nopromo');
        }

        
        var qty_title=document.createElement('label')
        qty_title.innerText = INC.config.qtyText
        elQtyBlock.appendChild(qty_title);
        //elQtyBlock.parentNode.insertBefore(qty_title, elQtyBlock);


        var elQtyInput = this.generateHTMLTags('input');
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('name', "number");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 99);
        elQtyInput.setAttribute('maxlength', 99);
        elQtyInput.setAttribute('inputmode', 'numeric');
        elQtyInput.setAttribute('data-focus-visible-added', '');
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute('pattern', '[1-9]\\d*');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.' || event.key==='-'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");

        elQtyInput.addEventListener("keydown", function (event) {
            var keyCode = event.which || event.keyCode;
            
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            setTimeout(function () {
                qtyupdateInc(productBlock, elQtyInput, elPackOfListBlock, productObj, getSelectorClassName, classNames, elAddText)
            }, 500);
        });
        
        elQtyInput.addEventListener('focusout', function () {
            var elmt = this
            setTimeout(function () {
                qtyupdateInc(productBlock, elmt, elPackOfListBlock, productObj, getSelectorClassName, classNames, elAddText)
            }, 50);
        });
        

        if (productObj.promotionalMessage != null && productObj.promotionalMessage != undefined && productObj.promotionalMessage != 'undefined') {
            if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
                var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];

                elQtyInput.setAttribute('type', 'number');
                elQtyInput.setAttribute('min', min_q);
                elQtyInput.setAttribute('value', min_q);
                elQtyInput.value = min_q;
                elQtyInput.setAttribute('old_qty', min_q);
                // elQtyInput.setAttribute('maxlength', 2);
                elQtyDownBlock.style.pointerEvents = "none";

            }
        }
        var product_desc_qty = productBlock.querySelector('.inc_product_desc_qty_block')
        var optionqtyblock = document.createElement('div')
        optionqtyblock.classList.add('optionqtyblock')
        optionqtyblock.setAttribute('style','display: flex;position: relative;width: auto;height: auto;justify-content: center;align-items: center;margin-right: 20px;')
        var selectoptionel = document.createElement('select')
        selectoptionel.classList.add('qty_select_tag')
        selectoptionel.setAttribute('onchange',''+quantity_dropdown_change(this)+'')
        selectoptionel.setAttribute('id','select_qty_inc')
        optionqtyblock.appendChild(selectoptionel)
        product_desc_qty.style.display = "block";
        selectoptionel.setAttribute('style','width: 50px;height: 15px;')
        elQtyInputText.appendChild(elQtyInput);

        elQtyDownBlock.addEventListener('click', function () {

            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }
            elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            if ((elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") && productBlock.getAttribute('module_inc') != 'tickbox') {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id);
            }
        });

        elQtyUpBlock.addEventListener('click', function () {

            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }
            elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            if ((elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") && productBlock.getAttribute('module_inc') != 'tickbox') {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id);
            }
        });
        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });

        if(INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0){
            elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
        }else{
            if(INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0){
                if(INC.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined){
                    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
                }else{
                    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
                }
            }else if(INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
            }
        }
        
        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

        
        if(productColorsObj.colorArray.length > 0){
            eldescblock.classList.add('promo_attr_avail')
            elAttColorListBlock.innerHTML = "";
            var one_attr_flag=false
            if(productColorsObj["colorArray"].length == 1){
                one_attr_flag = true
            }
            if (productColorsObj["colorArray"].length > 0) {
                productBlock.classList.add('inc_variant_new'+productColorsObj["colorArray"].length)
                if(productColorsObj["colorArray"][0].code != "Color"){
                    var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                    var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                    select_option_inc_block.appendChild(select_option_inc_title)
                    var selectvariant = generate_html_tag('select','inc_variant_tag')
                    select_option_inc_block.appendChild(selectvariant)
                    selectvariant.setAttribute('id','variant_inc_avail')
                    selectvariant.setAttribute('onchange','inc_onchange_color_variant(this)')
                    elAtt3Block.parentNode.insertBefore(select_option_inc_block,elAtt3Block)
                    var variantoption1 = generate_html_tag('option','variantoption')
                    // variantoption1.innerText = "Select your option";
                    variantoption1.innerText = "Please select: " + productColorsObj["colorArray"][0].code;
                    variantoption1.setAttribute('disabled','disabled')
                    variantoption1.setAttribute('selected','selected')
                    variantoption1.setAttribute('data-size', "");
                    variantoption1.setAttribute("datasize", "");
                    variantoption1.setAttribute('data-option', "");
                    selectvariant.appendChild(variantoption1)
                    // elAtt3Block.parentNode.insertBefore(selectvariant,elAtt3Block)
                    productColorsObj["colorArray"].forEach(function (sizeObj) {
                        var variantoption = generate_html_tag('option','variantoption')
                        variantoption.innerText = sizeObj["text"];
                        variantoption.setAttribute('data-size', sizeObj["text"]);
                        variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        variantoption.setAttribute('data-option', "1");
                        variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        selectvariant.appendChild(variantoption)
                        
                    });
                }
                productColorsObj["colorArray"].forEach(function (colorObj) {
                    elAttColorBlock.style.display="none"
                    elAttColorBlock.classList.add("active");
                    elAttColorTitleText.innerText = "Colour:";
                    var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                    var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                    var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
        
                    attColorImgBlock.addEventListener("click", function () {
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if(atteditbutton != null){
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = INC.config.EditText
                        }
                        elAttColorBlock.classList.remove('show_dropdown')
                        
                        if(productBlock.querySelector('.close_read_more') != null){
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var colorText = this.getAttribute("data-color")
                        elAttBlock.setAttribute("data-color", colorText);

                        if(atteditbutton != null){
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                        for(let cl=0;cl<all_color_list_item_img.length;cl++){
                            all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                        }
                        
                        this.parentNode.classList.add("active");

                        elAttColorTitleTextSelected.innerText = colorText;
                        
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
                        if(product0Obj.att0Array.length > 0){
                            eldescblock.classList.add('promo_attr_avail')
                            if(product0Obj["att0Array"][0].code != "Color"){
                                elAttBlock.classList.add('config_avail')
                                elAttBlock.classList.add('elipsis_inc')
                                // elp_var_title.innerHTML = INC.config.ColorSizeText
                                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                                var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                                if(selcop != null){
                                    selcop.parentNode.removeChild(selcop)
                                }
                                elAtt0ListBlock.innerHTML = "";
                                var productSizeText = "";
                                var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                                var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                            // select_option_inc_title.innerText = "Body Size:"
                                select_option_inc_block.appendChild(select_option_inc_title)
                                var selectvariant = generate_html_tag('select','inc_variant_tag')
                                select_option_inc_block.appendChild(selectvariant)
                                selectvariant.setAttribute('id','variant_inc_avail')
                                selectvariant.setAttribute('onchange',''+inc_onchange_variant(this)+'')
                                elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
                                var variantoption1 = generate_html_tag('option','variantoption')
                                variantoption1.innerText = "Select your option";
                                variantoption1.setAttribute('data-size', "");
                                variantoption1.setAttribute("datasize", "");
                                variantoption1.setAttribute('data-option', "");
                                selectvariant.appendChild(variantoption1)
                                product0Obj["att0Array"].forEach(function (sizeObj) {
                                    var variantoption = generate_html_tag('option','variantoption')
                                    variantoption.innerText = sizeObj["text"];
                                    variantoption.setAttribute('data-size', sizeObj["text"]);
                                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    variantoption.setAttribute('data-option', "1");
                                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                                    if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                        if(sizeObj["text"].toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                            variantoption.selected = 'selected'
                                        }
                                    }
                                    selectvariant.appendChild(variantoption)
                                    
                                });
                                if (product0Obj["att0Array"].length > 0) {
                                    elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                                    elAtt0Block.classList.add("active");
                                    product0Obj["att0Array"].forEach(function (sizeObj) {
                                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                                        attSizeImgBlock0.addEventListener("click", function () {
                                            var prod_card_attr_block;
                                            if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                                                prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                            }else{
                                                prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                            }
                                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                            if(atteditbutton != null){
                                                atteditbutton.innerText = INC.config.EditText
                                            }
                                            elAtt0Block.classList.remove('show_dropdown')
                                            
                                            if(productBlock.querySelector('.close_read_more') != null){
                                                productBlock.querySelector('.close_read_more').click()
                                            }
                                            var attr_text = this.getAttribute("data-size");
                    
                                            elAttBlock.setAttribute("data-zero", attr_text);
                    
                                            if(atteditbutton != null){
                                                // atteditbutton.parentNode.classList.add('active')
                                            }
                                            
                                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')
                    
                                            for(let cl=0;cl<all_color_list_item_img.length;cl++){
                                                all_color_list_item_img[cl].classList.remove("active");
                                            }
                                            
                                            this.classList.add("active");
                                            
                                            elAtt0TitleText.innerText = attr_text;
                    
                                            var sel_size = elAttBlock.getAttribute('data-size')
                                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                            findObj.sizeText=sel_size
                                            
                    
                                            INC.methods.updateProductBlock(productBlock, findObj, blockType);
                    
                                            var productModuleBlock = productBlock.parentNode.parentNode;
                    
                                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                    
                                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                            var zero_text = elAttBlock.getAttribute('data-zero');
                                            var size_text = elAttBlock.getAttribute('data-size');
                                            var color_text = elAttBlock.getAttribute('data-color');
                                            var third_text = elAttBlock.getAttribute('data-third');
                                            
                                            var sel_attr_text=""
                                            if(color_text != undefined){
                                                sel_attr_text = color_text
                                            }
                                            if(zero_text != undefined){
                                                if(sel_attr_text == ""){
                                                    sel_attr_text = zero_text
                                                }else{
                                                    sel_attr_text = sel_attr_text + " / " + zero_text
                                                }
                                            }
                                            if(size_text != undefined){
                                                sel_attr_text = sel_attr_text + " / " + size_text
                                            }
                                            if(third_text != undefined){
                                                sel_attr_text = sel_attr_text + " / " + third_text
                                            }
                                            var pr_mod_elm = productBlock.parentNode.parentNode
                                            if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                                            }
                                            
                                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                                            
                                        });
                                        
                                        attSizeImgBlock0.classList.add('avail')
                                        if (productSizeText.length == 0) {
                                            productSizeText = sizeObj["text"];
                                        }
                                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                                        var chckType = sizeObj["text"];
                                        
                                        reg.test(chckType);
                                        
                                        
                                        attSizeImg0.innerText = sizeObj["text"];
                                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                        attSizeImgBlock0.setAttribute('data-option', "1");
                                        if(product0Obj["att0Array"][0].code == "Size"){
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        }else if(product0Obj["att0Array"][0].code == "letter"){
                                            attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                                        } else if(product0Obj["att0Array"][0].code == "choose"){
                                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                                        }else{
                                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                        }
                                            
                                        attSizeImgBlock0.appendChild(attSizeImg0);
                                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                                        if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                            if(attSizeImgBlock0.getAttribute('data-size').toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                                attSizeImgBlock0.classList.add('active')
                                            }
                                        }
                                    });
                                    
                                }
                            }
                        }
                        
                        //end 

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');
                        
                        var selcolor=color_text.toLowerCase()
                        var sel_color = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+selcolor+'"]')
                        if(sel_color != null){
                            var all_color_list_item_imgs = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img')

                            for(let cls=0;cls<all_color_list_item_imgs.length;cls++){
                                all_color_list_item_imgs[cls].parentNode.parentNode.classList.remove("active");
                            }
                            sel_color.classList.add('active')
                        }
                        
                        var sel_attr_text=""
                        if(color_text != undefined){
                            sel_attr_text = color_text
                        }
                        if(zero_text != undefined){
                            if(sel_attr_text == ""){
                                sel_attr_text = zero_text
                            }else{
                                sel_attr_text = sel_attr_text + " / " + zero_text
                            }
                        }
                        if(size_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + size_text
                        }
                        if(third_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                            if(this.querySelector('img') != null){
                                var attr_src = this.querySelector('img').src
                                elAttColorTitleTextSelected.parentNode.querySelector('img').src=attr_src
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').src = attr_src
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').style.display="block"
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                            }
                        }
                        
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                    });
        
                    
        
                    attColorImg.style.backgroundColor = colorObj["colorCode"];
        
                    
                    // if (colorObj["imgSrc"].length > 0) {
                    //     if(colorObj["colorCode"] == ""){
                    //         //{ src: colorObj["imgSrc"] }
                    //         var colorImg = INC.methods.generateHTMLTags('img');
                    //         colorImg.setAttribute('alt', colorObj["text"])
                    //         // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                    //         colorImg.setAttribute('src',colorObj["imgSrc"])
                    //         if(productObj.categoryName != ""){
                    //             colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                    //         }
                    //         //
                    //         attColorImg.appendChild(colorImg);
                    //     }
                    // }
        
                    var colorTitle = INC.methods.generateHTMLTags('a');
                    colorTitle.innerText = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                    attColorImg.appendChild(colorTitle);
                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    attColorImgBlock.setAttribute('data-option', "0");
                
                    
                    attColorImgBlock.appendChild(attColorImg);
                    attColorBlock.appendChild(attColorImgBlock);
                    elAttColorListBlock.appendChild(attColorBlock);
                    var prod_id = productBlock.getAttribute('data-main_id');
                    if(one_attr_flag == true){
                        setTimeout(function(){
                            if(INC.methods.getProductIdFromWebPage() == prod_id){  
                                attColorImgBlock.click()
                            }
                        },0)
                    }
                });
            }
        }
        if(product0Obj.att0Array.length > 0){
            eldescblock.classList.add('promo_attr_avail')
            productBlock.classList.add('inc_variant_new'+product0Obj.att0Array.length)
            if(product0Obj["att0Array"][0].code != "Color"){
                elAttBlock.classList.add('config_avail')
                elAttBlock.classList.add('elipsis_inc')
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                var productSizeText = "";
                let select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                let select_option_inc_title = generate_html_tag('div','select_option_inc_title')
            //  select_option_inc_title.innerText = "Body Size:"
                select_option_inc_block.appendChild(select_option_inc_title)
                let selectvariant = generate_html_tag('select','inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id','variant_inc_avail')
                selectvariant.setAttribute('onchange',''+inc_onchange_variant(this)+'')
                elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
                let variantoption1 = generate_html_tag('option','variantoption')
                variantoption1.innerText = "Select your option";
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option','variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if(product0Obj["att0Array"].length == 1){
                        variantoption.selected = 'selected'
                    }
                    selectvariant.appendChild(variantoption)
                    
                });
                if (product0Obj["att0Array"].length > 0) {
                    elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                    elAtt0Block.classList.add("active");
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                        attSizeImgBlock0.addEventListener("click", function () {
                            var prod_card_attr_block;
                            if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                                prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode;
                            }else{
                                prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block');
                            }
                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                            if(atteditbutton != null){
                                // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                atteditbutton.innerText = INC.config.EditText
                            }
                            elAtt0Block.classList.remove('show_dropdown')
                            
                            if(productBlock.querySelector('.close_read_more') != null){
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size");

                            elAttBlock.setAttribute("data-zero", attr_text);

                            if(atteditbutton != null){
                                // atteditbutton.parentNode.classList.add('active')
                            }
                            
                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                            for(let cl=0;cl<all_color_list_item_img.length;cl++){
                                all_color_list_item_img[cl].classList.remove("active");
                            }
                            
                            this.classList.add("active");
                            
                            elAtt0TitleText.innerText = attr_text;

                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText=sel_size
                            

                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                            var productModuleBlock = productBlock.parentNode.parentNode;

                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');
                            
                            var sel_attr_text=""
                            if(color_text != undefined){
                                sel_attr_text = color_text
                            }
                            if(zero_text != undefined){
                                if(sel_attr_text == ""){
                                    sel_attr_text = zero_text
                                }else{
                                    sel_attr_text = sel_attr_text + " / " + zero_text
                                }
                            }
                            if(size_text != undefined){
                                sel_attr_text = sel_attr_text + " / " + size_text
                            }
                            if(third_text != undefined){
                                sel_attr_text = sel_attr_text + " / " + third_text
                            }
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                            }
                            
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                            
                        });
                        
                        attSizeImgBlock0.classList.add('avail')
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];
                        
                        reg.test(chckType);
                        
                        
                        attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        if(product0Obj["att0Array"][0].code == "Size"){
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }else if(product0Obj["att0Array"][0].code == "letter"){
                            attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                        } else if(product0Obj["att0Array"][0].code == "choose"){
                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        }else{
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }
                            
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        
                    });
                    
                }
            }
        }
        
        if (productColorsObj["colorArray"].length == 0 && product0Obj.att0Array.length == 0) {
            // elAttSizeTitleText.innerText = INC.config.ViewDetailsText;
            elAttBlock.classList.add('attributes_not_avail')
        }else if (productColorsObj["colorArray"].length > 0) {
            elAttColorTitleTextSelected.innerText = 'Choose colour first';
            elcolortitleblock.addEventListener('click',function(){
                this.parentNode.classList.toggle('show_dropdown')
            })
            elAttBlock.classList.add('attributes_avail')
        }else if (product0Obj.att0Array.length > 0) {
            elAtt0TitleText.innerText = 'Choose size first';
            elsizetitleblock.addEventListener('click',function(){
                this.parentNode.classList.toggle('show_dropdown')
            })
            elAttBlock.classList.add('attributes_avail')
        }
        // elGallerylefttArrow.setAttribute('title','Scroll left')
        // elGalleryRightArrow.setAttribute('title','Scroll right')

        elGalleryRightArrow.addEventListener("click", function () {
            var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if(prod_card.classList.contains('inc_product_module_block') == false){
                prod_card = prod_card.parentNode.parentNode
            }
            var pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"right","arrow")
        });
        elGallerylefttArrow.addEventListener("click", function () {
            var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if(prod_card.classList.contains('inc_product_module_block') == false){
                prod_card = prod_card.parentNode.parentNode
            }
            var pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"left","arrow")
        });
        
        if(window.innerWidth > 819){
            if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                elGalleryRightArrow.style.display="none"
                elGallerylefttArrow.style.display="none"
            }
        }else{
            if ((productObj.otherImageList == null) || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                elGalleryRightArrow.style.display="none"
                elGallerylefttArrow.style.display="none"
            }
        }
        switch (blockType) {
            case "pdp":
            case "tickbox":
                elAddText.innerText = "Add";
                elAddBlockclickcollect.style.display = "none"
                break;
            case "sidebar":
            case "am":
                elAddText.innerText = "Add for Delivery";
                elAddTextclickcollect.innerText = "Click & Collect";
                break;
        }

        elAddBlock.addEventListener("click", function () {
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if(document.querySelector('.sidebar_outer.sidebar_outer_active') == null && document.querySelector('.inc_product_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_overlay');
            }
            if(document.querySelector('.inc_product_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null && document.querySelector('.inc_product_modal_block.active') == null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
            if((INC.config.pageType != "cartPage" && INC.config.pageType != "ticket" && INC.config.pageType != "productList") || ((INC.config.pageType != "productList" && document.querySelector('.inc_sidebar_modal_block.active') != null) || (INC.config.pageType == "productList" && document.querySelector('.inc_sidebar_modal_block.active') != null)) ){
                showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
            }

            // var error_element = document.createElement('a')
            if(productModuleBlock.classList.contains('configurable') == true){
                if(flag_check == 1){
                    setTimeout(function(){
                        if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null){
                            var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                            if(docpdpinc != null){
                                if(window.innerWidth < 1025 && window.innerWidth > 819){
                                    docpdpinc.scrollLeft = 0
                                    INC.clientConfig.offset = 0;
                                    INC.clientConfig.slidevalue = 0;
                                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                    }
                                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                    }
                                }
                            }
                            document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')

                        }
                    },100)
                }else{
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText="Please Select option"
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if (document.querySelector('html').classList.contains('inc_overlay') == false){
                        document.querySelector('html').classList.add('inc_overlay')
                    }
                }
            
            }else{
                setTimeout(function(){
                    if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                },100)
            }

            var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
            if(docpdpinc != null){
                if(window.innerWidth < 1025 && window.innerWidth > 819){
                    docpdpinc.scrollLeft = 0
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                    }
                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                    }
                }
            }
            setTimeout(function(){
                if(document.querySelector('.inc_product_modal_block.active') == null){
                    document.querySelector('html').classList.remove('inc_overlay');
                    document.querySelector('html').classList.remove('inc_popup_open');
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                    }
                }
                if(document.querySelector('.sidebar_outer.sidebar_outer_active') != null){
                    document.querySelector('html').classList.add('inc_overlay');
                }
            },100)
        });

        elAddBlockclickcollect.addEventListener("click", function() {
            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }
            var productModuleBlock = productBlock.parentNode.parentNode;
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
            if (INC.config.pageType != "cartPage") {
                showcaseProductBlock.querySelector('.inc_product_desc_add_click_collect_block').click()
            }
            // var error_element = document.createElement('a')
            if (productModuleBlock.querySelector('.img_color_swatch') != null) {
                if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                    setTimeout(function() {
                        if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                            var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                            if(docpdpinc != null){
                                if(window.innerWidth < 1025 && window.innerWidth > 819){
                                    docpdpinc.scrollLeft = 0
                                    INC.clientConfig.offset = 0;
                                    INC.clientConfig.slidevalue = 0;
                                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                    }
                                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                    }
                                }
                            }
                            document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                        }
                    }, 100)
                } else {
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select option"
                }
            } else {
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                }, 100)
            }

        });
    }
    return productBlock;
}
INC.methods.updateProductBlock = function (productBlock, findObj, blockType) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig[blockType].className;
    var productModuleBlock = productBlock.parentNode.parentNode;
    var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    
    var sel_attr_text=""
    if(color_text != undefined){
        findObj.colorText = color_text
        sel_attr_text = color_text
    }else{
        findObj.colorText = ""
    }
    if(zero_text != undefined){
        findObj.zeroText = zero_text
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }else{
            sel_attr_text = sel_attr_text + " / " + zero_text
        }
    }else{
        findObj.zeroText = ""
    }
    if(size_text != undefined){
        findObj.sizeText = size_text
        sel_attr_text = sel_attr_text + " / " + size_text
    }else{
        findObj.sizeText = ""
    }
    
    if(third_text != undefined){
        findObj.thirdText = third_text
        sel_attr_text = sel_attr_text + " / " + third_text
    }else{
        findObj.thirdText = ""
    }
    var productObj = INC.dataStore.methods().getProductByAtt(findObj);
    var previousSKU = "";
    var getSelectorClassName = this.getSelectorClassName;
    
    previousSKU = productBlock.getAttribute('data-sku');
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    productModuleBlock.setAttribute('data-id', productObj.id);
    productModuleBlock.setAttribute('data-sku', productObj.sku);
    productModuleBlock.setAttribute('data-main_id', productObj.mainId);
    productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
    
    if(document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]') != null && sel_attr_text != ""){
        var added_sum_prod=document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]')
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').innerText  = productObj.option[0].code + " " + sel_attr_text
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title',sel_attr_text)
    }
    if(productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
    }
    
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleText = getViewElement("productTitleText");
    var elMTitleText = getViewElement("productMaufactureText")
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elPriceActiveTextExc = getViewElement("productPriceActiveTextExc");
    var elPriceRegularTextExc = getViewElement("productPriceRegularTextExc");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elAddText = getViewElement("productAddText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
    var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
    productBlock.classList.remove('is_click_collect_only')
    productBlock.classList.remove('is_both_avail')
    productBlock.classList.remove('is_delivery_only')
     
    elAddBlockclickcollect.style.display = "none"
    var eladdbtnqtyblock = getViewElement("productQtyAddBtnBlock");
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0){
        if(blockType != "pdp"){
            eladdbtnqtyblock.classList.add('active')
        }
    }else{
        elMTitleText.innerHTML = "<span>Product code:</span>" + productObj.idAdd;
    }
    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
   
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') == -1){
        elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    }
    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    elImgMainImg.querySelector('a').setAttribute('otherImageList',productObj["otherImageList"])
    elImgMainImg.querySelector('a').setAttribute('imageURL',productObj["imageURL"])

    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover',productObj["otherImageList"])
    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL',productObj["imageURL"])
    
    var prod_ids = productModuleBlock.getAttribute('data-main_id')
    if(document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]') != null){
        var tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]');
        if(tab_img.querySelector('img') != null){
            tab_img.querySelector('img').src=productObj["imageURL"]
        }
    }

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg=0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag;
            if(productObj.otherImgURL.indexOf('undefined') == -1){
                elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                if(onloadpdp == true){
                    elOtherImgTag.src = otherImgURL
                }
            }else{
                elOtherImgTag = document.createElement('img')
            }
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);
            elImgGalleryListItemBlock.setAttribute('index',otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if(otimg == 0){
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if(productObj.otherImageList.length > 5){
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }

        });

    }

    if(window.innerWidth > 819){
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }else{
        if (productObj.otherImageList == null || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }

    elTitleText.querySelector('div').innerText = productObj.name
    elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') == -1){
        elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
    }
    if(productBlock.classList.contains('inc_product_modal_block') == false){
        
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            elTitleText.setAttribute('style','cursor: default;text-decoration: none;')
        }else{
            // elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
        }
    }
    elTitleText.querySelector('a').setAttribute('title',productObj.name)

    
    elFullDesctext.setAttribute('aria-hidden','true')
    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
    
    var excactivePrice = parseFloat(productObj.excactivePrice).toFixed(2).toString();
    var excregularPrice = parseFloat(productObj.excregularPrice).toFixed(2).toString();

    var totalsaveprc =  get_discount_price(productObj.regularPrice,productObj.activePrice)
    var totalsaveper =  get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

    
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.incvattext+"</span>"
        elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
        formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
    }else{
        elworthPrice.innerHTML = "";
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
    }
    elPriceRegularTextExc.innerText = "";
    if (excactivePrice != excregularPrice && excregularPrice != "" && excregularPrice != null && excregularPrice != 0) {
        elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
        elPriceRegularTextExc.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
        formatter.format(excregularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    }else{
        elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(excactivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"
    }
    if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "Added" || productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == INC.config.AddedText) {
        if (!Object.prototype.hasOwnProperty.call(dataStore, 'bundleCartProducts')) {
            dataStore['bundleCartProducts'] = {};
            INC.config.bundle_trackingPushed = []
            INC.config.bundle_trackingPushed=[]
            INC.config.bundle_skuPushed=[]
        }

        dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
        if (productObj["sku"] != previousSKU) {
            delete dataStore["bundleCartProducts"][previousSKU];
        }
    }

    var elQtyInput = elQtyInputText.querySelector('input');
    var sku = productBlock.getAttribute('data-sku');
    var bundle_id = productBlock.getAttribute('data-bundle_id');
    var main_id = productBlock.getAttribute('data-main_id');
    var qty = parseInt(elQtyInput.value);
    var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
    var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
    if(elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null && productBlock.getAttribute('module_inc') != 'tickbox'){
        INC.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
    }
    setTimeout(function(){
       
        if(elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360){
            elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
        }
    },200);
    
}

INC.methods.createProductListItemBlock = function (productObj, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var productListItemBlock = this.getElementChilds("pdpBundleProductListItemBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;
    productListItemBlock.style.userSelect = "none";
    productListItemBlock.setAttribute('data-id', productObj.id);
    productListItemBlock.setAttribute('data-sku', productObj.sku);
    productListItemBlock.setAttribute('data-main_id', productObj.mainId);
    productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);
    if(productObj.ProductLevelDiscountMessage != null){
        productListItemBlock.classList.add('promo_available')
    }
    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var elTitleBlockMob = getViewElement("pdpBundleProductListItemTitleBlock");
    var elcheckblock = getViewElement("pdpBundleProductListItemAddedBlock");
    var elImg = getViewElement("pdpBundleProductListItemImg");
    var elTitleText = getViewElement("pdpBundleProductListItemTitleText");
    var elPriceActive = getViewElement("pdpBundleProductListItemPriceActiveText");
    var elImgTag1;
    if(productObj.imageURL.indexOf('undefined') == -1){
        elImgTag1 = INC.methods.generateHTMLTags('img', { src: productObj.imageURL });
        if(onloadpdp == true){
            elImgTag1.src = productObj.imageURL
        }
    }else{
        elImgTag1 = document.createElement('img')
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);
    if(productObj.ProductLevelDiscountMessage != null){
        elImg.classList.add('Inc_offer')
    }
    productListItemBlock.addEventListener("click", function () {
      
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });

        var elListMainBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock"));
        Array.prototype.forEach.call(elListMainBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (productBlock) {
            productBlock.style.display = "none";
        });
        if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]") != null){
            elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";
            // if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").nextElementSibling != null){
            //     elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").nextElementSibling.style.display = "block";
            // }else{
            //     if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").previousElementSibling != null){
            //         elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").previousElementSibling.style.display = "block";
            //     }
            // }
        }else if(document.querySelector(".inc_pdp_block .inc_product_module_block[data-main_id=\"" + productObj.mainId + "\"]") != null){
            document.querySelector(".inc_pdp_block .inc_product_module_block[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";
            // if(document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[0] != null){
            //     document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[0].style.display = "block";
            // }
            // if(document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[1] != null){
            //     document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[1].style.display = "block";
            // }
        }
        
        Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")), function (pListItemBlock) {
            pListItemBlock.classList.remove("active");
        });

        productListItemBlock.classList.add("active");
    });
    elcheckblock.addEventListener("click", function () {
        if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
            var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
            elselprod.querySelector('.inc_product_desc_add_block').click()
            document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
        }
    });
    elTitleBlockMob.addEventListener("click", function () {
        if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
            var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
            elselprod.querySelector('.inc_product_desc_add_block').click()
            document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
        }
    });
    // elImgBlockMob.addEventListener("click", function () {
    //     if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
    //         var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    //     }
    // });
    elTitleText.innerText = productObj.name
    elPriceActive.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice)
    


    return productListItemBlock;
}

INC.methods.updateProductListItem = function (productObj, blockType) {

    if (blockType != "pdp") return;
    var classNames = INC.uiConfig[blockType].className;
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    var querySelectorString = getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-id=\"" + productObj.id + "\"]";
    var productListItemBlock = document.querySelector(querySelectorString);
    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");

    elImg.querySelector('img').setAttribute('src', productObj.imageURL);
    elImg.querySelector('img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
}

INC.methods.updateBundleCart = function (bundleCartObj, type,main_id,bundle_id,pname,pprice) {
    var dataStore = INC.dataStore;
    var listToDelete=[]
    if (!Object.prototype.hasOwnProperty.call(dataStore, 'bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC.config.bundle_trackingPushed=[]
        INC.config.bundle_skuPushed=[]
        INC.config.bundle_tracking=[]
        INC.config.dupBasket=[]
    }

    switch (type) {
        case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
            for(let li=0;li<INC.config.bundle_tracking.length;li++){
                if(INC.config.bundle_tracking[li].id == main_id){
                    INC.config.bundle_tracking[li].id = bundleCartObj["sku"]
                }
            }
            if(INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1){
                INC.config.bundle_skuPushed.push(bundleCartObj["sku"])
            }
            if(INC.config.bundle_trackingPushed.indexOf(main_id) == -1){
                INC.config.bundle_trackingPushed.push(main_id)
                INC.config.bundle_tracking.push({
                    id:main_id,
                    bid:bundle_id,
                    pname:pname,
                    sku:bundleCartObj["sku"],
                    prc:pprice,
                    qty:bundleCartObj["qty"]

                });
            }
            break;
        case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
            INC.config.bundle_trackingPushed.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            INC.config.bundle_skuPushed.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            listToDelete[0] = main_id
            for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                var obj = INC.config.bundle_tracking[i];
                if(obj != undefined){
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC.config.bundle_trackingPushed.remove_prod_list(main_id);
            INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
            break;
    }

    if (INC.config.pageType == "pdp") this.calculateBundleTotal();
}

INC.methods.calculateBundleTotal = function () {
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var productListObj = dataStore.dataStoreObj;
    var duplicate_check_produ=[]
    var totalRegularPrice = 0;
    var totalActivePrice = 0;
    var totalRegularPriceExc = 0;
    var totalActivePriceExc = 0;
    var totalMainProduct = 0;
    var totalAddonProducts = 0;
    var totalAddonProductsCount = 0;
    var totalProductCount = 0;
    var total_qty=0
    var total_collect_point=0
    var mainId = INC.methods.getProductIdFromWebPage();

    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function (sku) {
            for (let mainProductId in productListObj) {
                for (let childProductId in productListObj[mainProductId]) {
                    if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                        if(duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1){
                            duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            var regularPriceExc = productListObj[mainProductId][childProductId]["excregularPrice"];
                            var activePriceExc = productListObj[mainProductId][childProductId]["excactivePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                            totalRegularPriceExc = totalRegularPriceExc + (parseFloat(bundleCartProducts[sku]) * regularPriceExc);
                            totalActivePriceExc = totalActivePriceExc + (parseFloat(bundleCartProducts[sku])) * activePriceExc;

                            total_qty = total_qty + parseInt(bundleCartProducts[sku])

                            if(productListObj[mainProductId][childProductId]["worthPrice"] != "" && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                total_collect_point = total_collect_point + +(productListObj[mainProductId][childProductId]["worthPrice"] * parseInt(bundleCartProducts[sku]))
                            }
                            if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                totalProductCount++;
                                totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }

                            if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                totalProductCount++;
                                totalAddonProductsCount++;
                                totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }
                        }
                    }
                }
            }
        });
    }


    var priceObj = {
        totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
        totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
        totalActivePriceExc: parseFloat(totalActivePriceExc).toFixed(2),
        totalRegularPriceExc: parseFloat(totalRegularPriceExc).toFixed(2),
        totalMainProduct: totalMainProduct,
        totalAddonProducts: totalAddonProducts,
        totalAddonProductsCount: totalAddonProductsCount,
        totalProductCount: totalProductCount,
        total_qty:total_qty,
        total_collect_point:total_collect_point
    }

    this.updateBundleCartBlock(priceObj);
}

INC.methods.updateBundleCartBlock = function (priceObj) {
    var classNames = INC.uiConfig.pdp.className;
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var totalRegularPrice = priceObj.totalRegularPrice;
    var totalActivePrice = priceObj.totalActivePrice;
    var totalRegularPriceExc = priceObj.totalRegularPriceExc;
    var totalActivePriceExc = priceObj.totalActivePriceExc;
    if(parseFloat(priceObj.totalRegularPrice) < parseFloat(priceObj.totalActivePrice)){
        totalRegularPrice = priceObj.totalActivePrice;
        totalActivePrice = priceObj.totalRegularPrice;
    }
    if(parseFloat(priceObj.totalRegularPriceExc) < parseFloat(priceObj.totalActivePriceExc)){
        totalRegularPriceExc = priceObj.totalActivePrice;
        totalActivePriceExc = priceObj.totalRegularPriceExc;
    }
    var totalMainProduct = priceObj.totalMainProduct;
    var totalAddonProducts = priceObj.totalAddonProducts;
    var totalAddonProductsCount = priceObj.totalAddonProductsCount;
    var click_adn_collect_flag = false;
    var click_adn_delivery_flag = false;

    var elPdpBundleCartBlock = document.querySelector(this.getSelectorClassName(classNames, "pdpModalBundleCartBlock"));

    function getViewElement(className) {
        return elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }
    
    
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBtnCount = getViewElement("pdpBundleCartSummaryViewBtnCount");
    var elBundleCartPriceRegularText = getViewElement("pdpBundleCartSummaryPriceRegularText");
    var elBundleCartPriceActiveText = getViewElement("pdpBundleCartSummaryPriceActiveText");
    var elBundleCartPriceRegularTextExc = getViewElement("pdpBundleCartSummaryPriceRegularTextExc");
    var elBundleCartPriceActiveTextExc = getViewElement("pdpBundleCartSummaryPriceActiveTextExc");
    var elBundleCartTitleTextcount = getViewElement("pdpBundleCartTitleText");
    var elbundlesavetext = getViewElement("pdpBundleCartSummaryPriceSaveText");
    var eloffersection = getViewElement("pdpBundleCartSummarySaveAddText");
    var elbundlseumaryblock = getViewElement("pdpBundleCartSummaryPriceBlock");

    elBundleCartPriceRegularTextExc.classList.add('inc_pdp_bundle_cart_summary_price_regular_text')
    elBundleCartPriceActiveTextExc.classList.add('inc_pdp_bundle_cart_summary_price_active_text')
    elBundleCartPriceRegularText.classList.add('incvat_')
    elBundleCartPriceActiveText.classList.add('incvat_')
    eloffersection.innerText = "*any offers/discounts will be applied in basket";
    elbundlesavetext.style.display = "none"
    
    elBundleCartAddedBlock.innerHTML = "";

    var bundleCartProductsArray = Object.keys(bundleCartProducts);
    elBundleCartSummaryViewBtnCount.innerText = bundleCartProductsArray.length;

    if(window.innerWidth < 820){
        elBundleCartTitleTextcount.innerText = "Price summary" //total_qty_item + 
    }
    var total_added_products=[]
    for (var ii = 0; ii < bundleCartProductsArray.length; ii++) {
        for (var ij = 0; ij < INC.config.bundle_tracking.length; ij++) {
            if(total_added_products.indexOf(bundleCartProductsArray[ii]) == -1){
                total_added_products.push(bundleCartProductsArray[ii])
            }
            
            if(INC.config.bundle_tracking[ij].sku == bundleCartProductsArray[ii]){
                INC.config.bundle_tracking[ij].qty = bundleCartProducts[bundleCartProductsArray[ii]]
            }
        }
    }
    var alladdedprod = INC.config.product_seq//INC.config.bundle_skuPushed
    if(alladdedprod != null){
        for (let m = 0; m < alladdedprod.length; m++) {
            var elcont = alladdedprod[m]
            for (let i = 0; i < bundleCartProductsArray.length; i++) {
                var findObj = new INC.classes.FindObj({
                    sku: bundleCartProductsArray[i]
                });
                var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                if(elcont == productObj.mainId){
                    if (Object.keys(bundleCartProducts).indexOf(INC.config.Product_id) >= 0) {
                        if (INC.config.Product_id == productObj.mainId) {
                            if (productObj.Field6 == "CollectOnly") {
                                if(click_adn_delivery_flag == true && click_adn_collect_flag == true && bundleCartProductsArray.length > 1){
                                    click_adn_delivery_flag = true
                                    click_adn_collect_flag = true
                                }else{
                                    click_adn_collect_flag = true
                                    click_adn_delivery_flag = false
                                }
                            } else if (productObj.Field6 == "DeliveryOnly") {
                                if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                    click_adn_delivery_flag = true
                                    click_adn_collect_flag = true
                                }else{
                                    click_adn_collect_flag = false
                                    click_adn_delivery_flag = true
                                }
                            } else if (productObj.Field6 == "Both") {
                                click_adn_collect_flag = true
                                click_adn_delivery_flag = true
                            }
                        }
                    } else {
                        if (productObj.Field6 == "CollectOnly") {
                            if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                click_adn_delivery_flag = true
                                click_adn_collect_flag = true
                            }else{
                                click_adn_collect_flag = true
                                click_adn_delivery_flag = false
                            }
                            
                        } else if (productObj.Field6 == "DeliveryOnly") {
                            if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                click_adn_delivery_flag = true
                                click_adn_collect_flag = true
                            }else{
                                click_adn_collect_flag = false
                                click_adn_delivery_flag = true
                            }
                        } else if (productObj.Field6 == "Both") {
                            click_adn_collect_flag = true
                            click_adn_delivery_flag = true
                        }
                    }
                    
                    var productId = productObj.id;
                    
                    
                    var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
                    var alllength = document.querySelectorAll('.inc_pdp_collection_cart_added_block .inc_pdp_collection_cart_added_product_block').length
                    
                    if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                        // elBundleCartAddedBlock.appendChild(prepen_elm)
                        elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[alllength]);
                        // elBundleCartAddedBlock.appendChild(prepen_elm)
                    }
                }
            }
        }
    }else{
        for (let i = 0; i < bundleCartProductsArray.length; i++) {
            let findObj = new INC.classes.FindObj({
                sku: bundleCartProductsArray[i]
            });
            let productObj = INC.dataStore.methods().getProductBySKU(findObj);
            if (Object.keys(bundleCartProducts).indexOf(INC.config.Product_id) >= 0) {
                if (INC.config.Product_id == productObj.mainId) {
                    if (productObj.Field6 == "CollectOnly") {
                        if(click_adn_delivery_flag == true && click_adn_collect_flag == true && bundleCartProductsArray.length > 1){
                            click_adn_delivery_flag = true
                            click_adn_collect_flag = true
                        }else{
                            click_adn_collect_flag = true
                            click_adn_delivery_flag = false
                        }
                    } else if (productObj.Field6 == "DeliveryOnly") {
                        if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                            click_adn_delivery_flag = true
                            click_adn_collect_flag = true
                        }else{
                            click_adn_collect_flag = false
                            click_adn_delivery_flag = true
                        }
                    } else if (productObj.Field6 == "Both") {
                        click_adn_collect_flag = true
                        click_adn_delivery_flag = true
                    }
                }
            } else {
                if (productObj.Field6 == "CollectOnly") {
                    if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                        click_adn_delivery_flag = true
                        click_adn_collect_flag = true
                    }else{
                        click_adn_collect_flag = true
                        click_adn_delivery_flag = false
                    }
                    
                } else if (productObj.Field6 == "DeliveryOnly") {
                    if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                        click_adn_delivery_flag = true
                        click_adn_collect_flag = true
                    }else{
                        click_adn_collect_flag = false
                        click_adn_delivery_flag = true
                    }
                } else if (productObj.Field6 == "Both") {
                    click_adn_collect_flag = true
                    click_adn_delivery_flag = true
                }
            }
            
            let productId = productObj.id;
            
            
            let prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
            let elBundleCartAddedBlock = document.querySelector('.inc_pdp_collection_cart_added_block');
            let alllength = document.querySelectorAll('.inc_pdp_collection_cart_added_block .inc_pdp_collection_cart_added_product_block').length
            
            if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[alllength]);
            }
        }
    } 
    if (!(bundleCartProductsArray.length > 4)) {
        var elBundleCartAddedProductDiv = document.createElement('div');
        elBundleCartAddedProductDiv.classList.add("bundle_cart_added_product_div");
        elBundleCartAddedProductDiv.innerText = "ADD PRODUCT";
        elBundleCartAddedBlock.appendChild(elBundleCartAddedProductDiv);
    }

    elBundleCartPriceRegularText.style.display = "none";
    elBundleCartPriceRegularTextExc.style.display = "none";
    if (totalActivePrice != totalRegularPrice) {
        elbundlseumaryblock.classList.add("is_special_price");
        elBundleCartPriceActiveText.classList.add("priceRed");
        elBundleCartPriceRegularText.style.display = "flex";
    } else {
        if (elBundleCartPriceActiveText.classList.contains('priceRed')) {
            elBundleCartPriceActiveText.classList.remove("priceRed");
            elbundlseumaryblock.classList.remove("is_special_price");
        }
    }
    if (totalActivePriceExc != totalRegularPriceExc) {
        elBundleCartPriceActiveTextExc.classList.add("priceRed");
        elBundleCartPriceRegularTextExc.style.display = "flex";
    } else {
        if (elBundleCartPriceActiveTextExc.classList.contains('priceRed')) {
            elBundleCartPriceActiveTextExc.classList.remove("priceRed");
        }
    }
    
    elBundleCartPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
    elBundleCartPriceRegularText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalRegularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()

    elBundleCartPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
    elBundleCartPriceRegularTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalRegularPriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()

    var elpricesummaryblock = getViewElement("pdpBundleCartSummaryBlock");
    if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
        var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

        var elBundleCartTitleText = getViewElement("pdpBundleCartSummaryTitleText");
        var elBundleCartAddBtnText = getViewElement("pdpBundleCartSummaryAddBtnText");

        var elBundleCartAddBtnclickcollectText = getViewElement("pdpBundleCartSummaryAddBtnClickCollectText");
        var elBundleCartclickcollectbtnblock = getViewElement("pdpBundleCartSummaryAddBtnClickCollectBlock");
        var elBundleCartbtnblock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
        elpricesummaryblock.classList.remove('is_click_collect_available')
        elpricesummaryblock.classList.remove('is_delivery_only')
        elpricesummaryblock.classList.remove('is_delivery_only')
        elpricesummaryblock.classList.remove('is_delivery_only_both')
        if (window.innerWidth > 819) {
            elBundleCartbtnblock.style.display = "block"
            elBundleCartclickcollectbtnblock.style.display = "block"
        } else {
            elBundleCartbtnblock.style.display = "flex"
            elBundleCartclickcollectbtnblock.style.display = "flex"
        }
        if (click_adn_collect_flag == true && INC.config.storeId != "" && click_adn_delivery_flag == false) {
            elpricesummaryblock.classList.add('is_click_collect_only')
            elBundleCartbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == true && INC.config.storeId == "" && click_adn_delivery_flag == false) {
            elBundleCartbtnblock.style.display = "none"
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == true && click_adn_delivery_flag == true && INC.config.storeId != "") {
            // elpricesummaryblock.classList.add('is_delivery_only')
            elpricesummaryblock.classList.add('is_delivery_only_both')
            elpricesummaryblock.classList.add('is_click_collect_only')
            if (window.innerWidth > 819) {
                elBundleCartbtnblock.style.display = "block"
                elBundleCartclickcollectbtnblock.style.display = "block"
            } else {
                elBundleCartbtnblock.style.display = "flex"
                elBundleCartclickcollectbtnblock.style.display = "flex"
            }
        } else if (click_adn_collect_flag == true && click_adn_delivery_flag == true && INC.config.storeId == "") {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == false && click_adn_delivery_flag == true) {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (INC.config.storeId == "") {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else {
            elpricesummaryblock.classList.add('is_click_collect_only')
        }
        elpricesummaryblock.classList.add('is_delivery_only')
        elBundleCartclickcollectbtnblock.style.display = "none"
        if (window.innerWidth < 819) {
            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total Price  ";
                elBundleCartAddBtnText.innerText = "Add " + bundleCartProductsArray.length + " items for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect " + bundleCartProductsArray.length + " item(s)";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total Price  ";
                elBundleCartAddBtnText.innerText = "Add 1 item for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect 1 item(s)";
            }
        } else {
            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total Price  ";
                elBundleCartAddBtnText.innerText = "Add " + bundleCartProductsArray.length + " item(s) for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect " + bundleCartProductsArray.length + " item(s)";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total Price  ";
                elBundleCartAddBtnText.innerText = "Add 1 item for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect 1 item";
            }
        }
    }

    var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
    var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
    var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
    var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
    var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));
    var elPriceActiveTextExc = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveTextExc"));

    elPriceMainTitleText.innerText = "Main Product Price";
    elPriceAddonTitleText.innerText = ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "") + " Add-on(s) Selected  ";
    
    elPriceMainFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalMainProduct).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    
    elPriceAddonFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalAddonProducts).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.incvattext+"</span>"
    elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePriceExc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()  + "<span>"+INC.config.excvattext+"</span>"

    if (totalActivePrice == 0) {
        setTimeout(function() {
            document.querySelector('.inc_pdp_block .inc_product_desc_add_block').click()
        }, 5);
    }
}

INC.methods.createBundleCartAddedProductBlock = function (productId, qty, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var addedProductBlock = this.getElementChilds("pdpBundleCartAddedProductBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: productId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = INC.methods.getSelectorClassName;
    addedProductBlock.setAttribute('data-id', productObj.id);
    addedProductBlock.setAttribute('data-sku', productObj.sku);
    addedProductBlock.setAttribute('data-main_id', productObj.mainId);
    addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);
    function getViewElement(className) {
        return addedProductBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elTitleText = getViewElement("pdpBundleCartAddedProductTitleText");
    var elImg = getViewElement("pdpBundleCartAddedProductImg");
    var elPriceActiveText = getViewElement("pdpBundleCartAddedProductPriceText");
    var elPriceActiveTextExc = getViewElement("pdpBundleCartAddedProductPriceTextExc");
    var elAttColorText = getViewElement("pdpBundleCartAddedProductAttColorText");
    var elQtyText = getViewElement("pdpBundleCartAddedProductQtyText");
    var elEditTextBlock = getViewElement("pdpBundleCartAddedProductEditTextBlock");
    var elEditText = getViewElement("pdpBundleCartAddedProductEditText");
    var elEditImgBlock = getViewElement("pdpBundleCartAddedProductEditImgBlock");
    var elEditImg = getViewElement("pdpBundleCartAddedProductEditImg");
    elPriceActiveTextExc.classList.add('inc_pdp_bundle_cart_added_product_price_text')
    elPriceActiveText.classList.add('incvat_')
    // elTitleText.innerText = productObj.name;
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('alt', productObj.name)
    setwidtheightimg(null,null,'pricesummary',elImgTag1)
    elImg.appendChild(elImgTag1);
    
    var prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    var zero_text = ""
    var size_text = ""
    var color_text = ""
    if(prod_module_elm != null){
        var modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
        zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    }
    var sel_attr_text=""
    if(color_text != undefined){
        sel_attr_text = color_text
    }
    if(zero_text != undefined){
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }
    }

    if(color_text != "" && color_text != undefined && color_text != null){
        if(productObj.option[0] != undefined){
            elAttColorText.innerText = productObj.option[0].code  + " : " + sel_attr_text;
        }else{
            elAttColorText.innerText =  sel_attr_text;
        }
        elAttColorText.parentNode.parentNode.setAttribute('title',sel_attr_text)
    }else if(size_text != "" && size_text != null || zero_text != "" && zero_text != null){
        if(productObj.option[0] != undefined){
            elAttColorText.innerText = productObj.option[0].code + " " + sel_attr_text;
        }else{
            elAttColorText.innerText =  sel_attr_text;
        }
        elAttColorText.parentNode.parentNode.setAttribute('title',sel_attr_text)
    }

    elAttColorText.style.textTransform = "none"
    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML =  qty + "<small>x </small>" + productObj.name;
    pTitleDiv.setAttribute('style','text-transform: unset;')
    elQtyText.innerHTML = qty 

    var pLink = document.createElement('a');
    pLink.title = productObj.name //+ ((attColorText.length > 0) ? (" | " + attColorText) : "");
    
    // pLink.setAttribute('href', productObj["url"]);
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    // elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice * qty)

    if(parseFloat(productObj.regularPrice) < parseFloat(productObj.activePrice)){
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.regularPrice * qty)
    }else{
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice * qty)
    }
    if(parseFloat(productObj.excregularPrice) < parseFloat(productObj.excactivePrice)){
        elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.excregularPrice * qty)
    }else{
        elPriceActiveTextExc.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.excactivePrice * qty)
    }

    elEditTextBlock.addEventListener("click", function () {
        if (INC.config.deviceType == "mobile") {

            if (document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]') != null)
                document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]').click();
        }

        if (INC.config.deviceType == "desktop") {
            Array.prototype.forEach.call(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock")).querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (el, index) {
                if (el.getAttribute('data-id') == productObj.id) {
                    if (index > 1) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductRightBtnBlock")).click()
                        }
                    }

                    if (!(index > 1)) {
                        for (var h = 0; h < 2; h++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductLeftBtnBlock")).click()
                        }
                    }
                }
            });
        }

        setTimeout(function () {
            // document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAttBlock")).click();
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"] .inc_product_details_prod_block').click()
        }, 50);
    });
    //if(INC.methods.getProductIdFromWebPage() == productObj.bundledProductId){
        elEditText.parentNode.parentNode.classList.add('elipsis_inc')
        elEditText.innerText = INC.config.EditText;
    //}
    elEditImgBlock.addEventListener("click", function () {
        document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
    });
    elEditImg.innerText = "";
    return addedProductBlock;
}

INC.methods.clear = function () {
    if (document.querySelector('.sidebar_outer') != null) {
        Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
            el.parentNode.removeChild(el);
        });
    }
    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }
}

INC.methods.getElementChilds = function (child, pageType) {
    var uiConfig = INC.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    var elementHTML = this.generateHTMLTags('div', { class: uiConfig[pType]["className"][child] })
    if (Object.prototype.hasOwnProperty.call(vDOM, child)) {
        vDOM[child].forEach(function (subChild) {
            elementHTML.appendChild(INC.methods.getElementChilds(subChild, pType));
        });
    }

    return elementHTML;
}

INC.methods.generateHTMLTags = function (tagName, attributeObj, childNode, eventListner, callback) {
    var element = document.createElement(tagName);
    for (let attr in attributeObj) {
        switch (attr) {
            case "class": {
                element.setAttribute('class', attributeObj[attr]);
            }
                break;
            case "style": {
                for (let styleAttr in attributeObj[attr]) {
                    element.style[styleAttr] = attributeObj[attr][styleAttr];
                }
            }
                break;
            default: {
                if(attributeObj[attr] != undefined){
                    element.setAttribute('data-src', attributeObj[attr]);
                    element.setAttribute(attr, attributeObj[attr]);
                }
            }
        }
    }

    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

    return element;
}

INC.methods.addProductToCart = function(findObj, qty, pageType, productBlock, add_btn_click, add_prod_im, btn_addtocartn, type_bundle) {
    INC.clientConfig.added_product_sku = []
    var del_is_oos = false
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    var csrf_token = ""
    var addProductURL;
    if (type_bundle == "delivery") {
        addProductURL = INC.config.addToBasketURL;
    } else {
        addProductURL = INC.config.click_collect_addToBasketURL;
    }
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    findObj = new INC.classes.FindObj(findObj);
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var addProductURL_c_f = INC.config.addToBasketURL;
    var searchParamObjString_c_f = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + qty;
    var searchParamObjString = ""
    if (type_bundle == "delivery") {
        searchParamObjString = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + qty;
    } else {
        searchParamObjString = "storeNamePost=" + INC.config.storeId + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "hiddenPickupQty=" + qty;
    }
    var p_type_cole = productObj.Field6 

    var params = searchParamObjString;

    

    var nwConfigObj = new INC.classes.NWConfig();
    nwConfigObj["url"] = addProductURL;
    nwConfigObj["method"] = 'POST';
    nwConfigObj["params"] = params;
    
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, addProductURL, true);

    xhr.onload = function() {}
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if (INC.config.pageType == "cartPage") {
                productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = "Added";
                // productBlock.remove();
                if (productBlock != null) {
                    productBlock.parentNode.removeChild(productBlock);
                }
                if (type_bundle == "delivery") {
                    window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                    window.location.reload();
                }
            }

            //if (pageType == "sidebar") {if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            add_btn_click.innerText = "Added";
            if(productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text') != null) {
                productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text').innerText = "Added"
            }
            if(productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text') != null) {
                productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text').innerText = "Added"
            }
            if (this.responseText != "") {
                let respons = this.responseText
                var result_data = []
                if (respons.indexOf('doctype html') == -1) {
                    result_data = JSON.parse(this.responseText);
                }
                var qtyss;
                var param_d;
                if (type_bundle != "delivery" && p_type_cole != "CollectOnly") {
                    if (qty != undefined) {
                        if (result_data.addedProducts != undefined) {
                            if (result_data.addedProducts[0].qty != undefined && result_data.addedProducts[0].qty != "") {
                                if (parseInt(qty) > result_data.addedProducts[0].qty) {
                                    if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                        INC.clientConfig.OOS.push(productObj.id)
                                    }
                                    qtyss = parseInt(qty) - result_data.addedProducts[0].qty
                                    param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty=" + qtyss + ""
                                    INC.methods.collectionfaildtoadd(param_d, addProductURL_c_f, result_data.addedProducts[0].qty, del_is_oos)
                                } else {

                                    if (INC.config.pageType == "cartPage") {
                                        window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                        setTimeout(function() {
                                            window.location.reload();
                                        }, 1000)
                                    }
                                }
                            } else if (result_data.addedProducts[0].qty == "") {
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    INC.clientConfig.OOS.push(productObj.id)
                                }
                                qtyss = qty
                                param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty=" + qtyss + ""
                                INC.methods.collectionfaildtoadd(param_d, addProductURL_c_f, result_data.addedProducts[0].qty, del_is_oos)
                            } else {
                                if (INC.config.pageType == "cartPage") {
                                    window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                    setTimeout(function() {
                                        window.location.reload();
                                    }, 1000)
                                }
                            }
                        } else {
                            if (INC.config.pageType == "cartPage") {
                                window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                setTimeout(function() {
                                    window.location.reload();
                                }, 1000)
                            }
                        }
                    }
                } else {
                    if (result_data.addedProducts != undefined && p_type_cole == "CollectOnly") {
                        if (result_data.addedProducts[0].qty == "" || result_data.addedProducts[0].qty == 0) {
                            if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                INC.clientConfig.OOS.push(productObj.id)
                                INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                            }
                        }
                        if (INC.config.pageType == "cartPage") {
                            if(p_type_cole == "CollectOnly"){
                                window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                window.location.reload();
                            }
                        }
                    }else{
                        if (INC.config.pageType == "cartPage") {
                            if(p_type_cole == "CollectOnly"){
                                window.jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                window.location.reload();
                            }
                        }
                    }
                }
                if (result_data.addedProducts != undefined) {
                    if (INC.clientConfig.added_product_sku.indexOf(result_data.addedProducts[0].sku) == -1) {
                        INC.clientConfig.added_product_sku.push({
                            skus: result_data.addedProducts[0].sku,
                            qtys: result_data.addedProducts[0].qty
                        })
                    }
                }
                if (this.responseText.indexOf('error-page') == -1) {
                    if (result_data.cartData != undefined) {
                        var cart_qty = result_data.cartData.totalQty
                        if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                            if (document.querySelector('.header-minicart__counter') != null) {
                                if(cart_qty != undefined){
                                    document.querySelector('.header-minicart__counter').innerText = cart_qty;
                                    if(document.querySelectorAll('.header-minicart .header-minicart__counter')[1] != undefined) {
                                        document.querySelectorAll('.header-minicart .header-minicart__counter')[1].innerText = cart_qty;
                                    }
                                }
                                
                            }
                        } else {
                            if (document.querySelector('.header-wrapper .header-minicart .header-minicart__counter') != null) {
                                if(cart_qty != undefined){
                                    document.querySelector('.header-wrapper .header-minicart .header-minicart__counter').innerText = cart_qty;
                                    if(document.querySelectorAll('.header-minicart .header-minicart__counter')[1] != undefined) {
                                        document.querySelectorAll('.header-minicart .header-minicart__counter')[1].innerText = cart_qty;
                                    }
                                }
                            }
                        }
                        cart_qty = result_data.cartData.totalQty
                        // TODO: update
                        updateBasketCounter(cart_qty);
                        if (result_data.addedProducts[0].qty == "0" || result_data.addedProducts[0].qty == "") {
                            var popcart = document.createElement('div')
                            popcart.innerHTML = result_data.cartPopupHtml
                            if (type_bundle != "delivery") {
                                if (popcart.querySelector('.product-card__bad-quantity') != null) {
                                    if (del_is_oos == true) {
                                        INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                    } else {
                                        INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                    }
                                }
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    INC.clientConfig.OOS.push(productObj.id)
                                }
                            } else {
                                if (popcart.querySelector('.product-card__bad-quantity') != null) {
                                    if (del_is_oos == true) {
                                        INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                    } else {
                                        INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                    }
                                }
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    INC.clientConfig.OOS.push(productObj.id)
                                }
                            }
                        }
                    } 
                } 

                if (result_data.cartData != undefined) {
                    setTimeout(function() {
                        if (result_data.cartData != undefined) {
                            for (let h = 0; h < result_data.cartData.products.length; h++) {
                                var data__id = result_data.cartData.products[h].sku
                                var data__position = ""
                                var added_qty = result_data.cartData.products[h].qty
                                var adde_items = document.querySelector('.inc_cart_added_product_block[id="' + data__id + '"]')

                                if (adde_items != null) {
                                    adde_items.setAttribute('data__id', data__id)
                                    adde_items.setAttribute('data__position', data__position)
                                    adde_items.setAttribute('added_qty', added_qty)
                                }

                                item_inc.push({
                                    data__id: data__id,
                                    data__position: data__position,
                                    added_qty: added_qty
                                })
                            }
                        }
                    }, 10)
                }
                if(type_bundle != "delivery" && result_data.addedProducts != undefined && p_type_cole == "CollectOnly"){
                    var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_data.addedProducts[0].sku + '"]')
                    if (added_el != null) {
                        var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_data.addedProducts[0].sku + '"]')
                        var qtysub = result_data.addedProducts[0].qty
                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                        }
                    }
                }
            } 
            if(INC.config.pageType == 'productList'){
                setTimeout(function() {
                    INC.methods.addProductToSidebarCart(findObj, qty, productBlock, null, type_bundle, pageType );
                },1000)
            }else {
                if (INC.config.pageType != "cartPage") INC.methods.addProductToSidebarCart(findObj, qty, productBlock, null, type_bundle, pageType );
            }
            
            if(INC.config.pageType == 'productList'){
                if (document.querySelector(".inc_product_modal_block.active .inc_product_header_img") != null) {
                    document.querySelector(".inc_product_modal_block.active .inc_product_header_img").click();
                }
                setTimeout(function() {
                    INC.methods.showSidebar();
                },1100)
            }
            setTimeout(function() {
                if (type_bundle == "delivery") {
                    add_btn_click.innerText = "Add for Delivery";
                    if(productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text') != null) {
                        productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text').innerText = "Add for Delivery"
                    }
                    if(productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text') != null) {
                        productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text').innerText = "Add for Delivery"
                    }
                    try {
                        add_btn_click.parentElement.parentElement.parentElement.parentElement.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    }catch {
                        // console.log("")
                    }
                } else {
                    add_btn_click.innerText = "Click & Collect";
                    if(productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text') != null) {
                        productBlock.querySelector('.inc_product_showcase_block .inc_product_desc_add_text').innerText = "Click & Collect"
                    }
                    if(productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text') != null) {
                        productBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text').innerText = "Click & Collect"
                    }
                }
                Array.prototype.forEach.call(add_btn_click, function(el) {
                    if (type_bundle == "delivery") {
                        el.innerText = "Add for Delivery";
                    } else {
                        el.innerText = "Click & Collect";
                    }
                });
                if (btn_addtocartn != undefined) {
                    btn_addtocartn.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
                if (btn_addtocartn != undefined) {
                    btn_addtocartn.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
            }, 2000);
            //}
        }
    }
    xhr.send(nwConfigObj.params);


    pageType = "";
    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
            break;
    }
    var eventDataObj = {};
    if (productObj.bundleId == "undefined" || productObj.bundleId == undefined) {
        eventDataObj = {
            core_product_id: productObj.mainId,
            product_id: productObj.mainId,
        };
        
        INC.methods.trackingEvents("bestseller_add_to_cart", eventDataObj, pageType, productObj.Field6);
    } else if (INC.config.pageType != "cartPage") {
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [productObj.bundledProductId, productObj.idAdd],
            "product_id": productObj.bundledProductId
        }
        INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType, productObj.Field6);
    } else {
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [productObj.bundledProductId, productObj.idAdd],
            "product_id": productObj.bundledProductId
        }
        INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType, productObj.Field6);
    }
}
INC.methods.addBundleToCart = function(btn_cart, type_bundle) {
    INC.config.clientbtn =false
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    INC.clientConfig.added_product_sku = []
    var addProductURL = INC.config.addToBasketURL;
    var add_type = "delivery"
    if (type_bundle == "delivery") {
        addProductURL = INC.config.addToBasketURL;
        add_type = "delivery"
    } else {
        addProductURL = INC.config.click_collect_addToBasketURL;
        add_type = "collection"
    }
    var csrf_token="";
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var addProductURL_c_f = INC.config.addToBasketURL;

    var dataStore = INC.dataStore;
    var mainProductId = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "productBlock")).getAttribute('data-main_id');
    var pr_ids = []
    Object.keys(dataStore.bundleCartProducts).forEach(function() {
        pr_ids.push("1")
    })

    var paddtype0 = "";
    var paddtype1 = "";
    var paddtype2 = "";
    var paddtype3 = "";
    var paddtype4 = "";
    var paddtype5 = "";
    var data0 = {};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};
    var data5 = {};
    var parame0 = "";
    var parame1 = "";
    var parame2 = "";
    var parame3 = "";
    var parame4 = "";
    var parame5 = "";
    var prodId0 = "";
    var prodId1 = "";
    var prodId2 = "";
    var prodId3 = "";
    var prodId4 = "";
    var prodId5 = "";
    var formData = []
    var count_pr_to_add = 0
    var total_length=Object.keys(dataStore.bundleCartProducts);
    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        var searchParamObjString_c_f = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + dataStore.bundleCartProducts[bundleCartProduct];
        // var searchParamObjString="";
        // if (type_bundle == "delivery") {
        //     searchParamObjString = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + dataStore.bundleCartProducts[bundleCartProduct];
        // } else {
        //     searchParamObjString = "storeNamePost=" + INC.config.storeId + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "hiddenPickupQty=" + dataStore.bundleCartProducts[bundleCartProduct];
        // }

        if (count_pr_to_add == 0) {
            if (type_bundle == "delivery") {
                data0["CSRFToken"] = csrf_token;
                data0["productCodePost"] = productObj['idAdd'];
                data0["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame0 = searchParamObjString_c_f
            } else {
                data0["storeNamePost"] = INC.config.storeId;
                data0["productCodePost"] = productObj['idAdd'];
                data0["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame0 = searchParamObjString_c_f
            }
            prodId0 = productObj['id']
            paddtype0 = productObj.Field6
            formData.push(data0)
        } else if (count_pr_to_add == 1) {
            if (type_bundle == "delivery") {
                data1["CSRFToken"] = csrf_token;
                data1["productCodePost"] = productObj['idAdd'];
                data1["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame1 = searchParamObjString_c_f
            } else {
                data1["storeNamePost"] = INC.config.storeId;
                data1["productCodePost"] = productObj['idAdd'];
                data1["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame1 = searchParamObjString_c_f
            }
            prodId1 = productObj['id']
            paddtype1 = productObj.Field6
            formData.push(data1)
        } else if (count_pr_to_add == 2) {
            if (type_bundle == "delivery") {
                data2["CSRFToken"] = csrf_token;
                data2["productCodePost"] = productObj['idAdd'];
                data2["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame2 = searchParamObjString_c_f
            } else {
                data2["storeNamePost"] = INC.config.storeId;
                data2["productCodePost"] = productObj['idAdd'];
                data2["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame2 = searchParamObjString_c_f
            }
            prodId2 = productObj['id']
            paddtype2 = productObj.Field6
            formData.push(data2)
        } else if (count_pr_to_add == 3) {
            if (type_bundle == "delivery") {
                data3["CSRFToken"] = csrf_token;
                data3["productCodePost"] = productObj['idAdd'];
                data3["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame3 = searchParamObjString_c_f
            } else {
                data3["storeNamePost"] = INC.config.storeId;
                data3["productCodePost"] = productObj['idAdd'];
                data3["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame3 = searchParamObjString_c_f
            }
            prodId3 = productObj['id']
            paddtype3 = productObj.Field6
            formData.push(data3)
        } else if (count_pr_to_add == 4) {
            if (type_bundle == "delivery") {
                data4["CSRFToken"] = csrf_token;
                data4["productCodePost"] = productObj['idAdd'];
                data4["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame4 = searchParamObjString_c_f
            } else {
                data4["storeNamePost"] = INC.config.storeId;
                data4["productCodePost"] = productObj['idAdd'];
                data4["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame4 = searchParamObjString_c_f
            }
            prodId4 = productObj['id']
            paddtype4 = productObj.Field6
            formData.push(data4)
        } else if (count_pr_to_add == 5) {
            if (type_bundle == "delivery") {
                data5["CSRFToken"] = csrf_token;
                data5["productCodePost"] = productObj['idAdd'];
                data5["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame5 = searchParamObjString_c_f
            } else {
                data5["storeNamePost"] = INC.config.storeId;
                data5["productCodePost"] = productObj['idAdd'];
                data5["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame5 = searchParamObjString_c_f
            }
            prodId5 = productObj['id']
            paddtype5 = productObj.Field6
            formData.push(data5)
        }
        count_pr_to_add++
        if (total_length.length == count_pr_to_add) {
            ajax_add_to_cart(formData, btn_cart, mainProductId, addProductURL, add_type, paddtype0, paddtype1, paddtype2, paddtype3, paddtype4, paddtype5,parame0,parame1,parame2,parame3,parame4,parame5,addProductURL_c_f,prodId0,prodId1,prodId2,prodId3,prodId4,prodId5)
        }
    });

    add_to_cart_tracking_multiple(mainProductId);
}

function ajax_add_to_cart(formData, btn_cart, mainProductId, url_add, add_type, paddtype0, paddtype1, paddtype2, paddtype3, paddtype4, paddtype5,parame0,parame1,parame2,parame3,parame4,parame5,addProductURL_c_f,prodId0,prodId1,prodId2,prodId3,prodId4,prodId5) {
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_MESG = []

    callprodA()

    function callprodA() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[0],
            error: function(jqXHR, textStatus) {

                if (formData[1] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        
                    }
                    if (window.innerWidth < 820) {
                        btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock();

                    errorLog(prodId0, textStatus)
                }

                if (formData[1] != undefined) {
                    callprodB()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data,add_type,paddtype0,parame0,addProductURL_c_f)
                if (formData[1] == undefined) {
                    var delay_add = 3000
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth < 820) {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        window.window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[1] != undefined) {
                    callprodB()
                }
            }
        });
    }

    function callprodB() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[1],
            error: function(jqXHR, textStatus) {
                if (formData[2] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth < 820) {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);

                    errorLog(prodId1, textStatus)
                }

                if (formData[2] != undefined) {
                    callprodC()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype1,parame1,addProductURL_c_f)
                if (formData[2] == undefined) {
                    var delay_add = 3000
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth < 820) {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);

                }

                if (formData[2] != undefined) {
                    callprodC()
                }
            }
        });
    }

    function callprodC() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[2],
            error: function(jqXHR, textStatus) {
                if (formData[3] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth < 820) {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);

                    errorLog(prodId2, textStatus)
                }

                if (formData[3] != undefined) {
                    callprodD()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype2,parame2,addProductURL_c_f)
                if (formData[3] == undefined) {
                    var delay_add = 3000;
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                                btn_cart.parentNode.classList.remove('inc_loading')
                            }else{
                                btn_cart.classList.remove('inc_loading')
                            }
                            if (window.innerWidth < 820) {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);

                }

                if (formData[3] != undefined) {
                    callprodD()
                }
            }
        });
    }

    function callprodD() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[3],
            error: function(jqXHR, textStatus) {
                if (formData[4] == undefined) {
                    INC.config.disablebtn = true
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth < 820) {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }

                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                    errorLog(prodId3, textStatus)
                }

                if (formData[4] != undefined) {
                    callprodE()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype3,parame3,addProductURL_c_f)
                if (formData[4] == undefined) {
                    var delay_add = 0
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                                btn_cart.parentNode.classList.remove('inc_loading')
                            }else{
                                btn_cart.classList.remove('inc_loading')
                            }
                            if (window.innerWidth < 820) {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[4] != undefined) {
                    callprodE()
                }
            }
        });
    }

    function callprodE() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[4],
            error: function(jqXHR, textStatus) {
                if (formData[5] == undefined) {
                    INC.config.disablebtn = true
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth < 820) {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }

                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                    errorLog(prodId4, textStatus)
                }

                if (formData[5] != undefined) {
                    callprodF()
                }
            },
            success: function(data) {
                var res_data = data

                INC.methods.response_callback(res_data, add_type,paddtype4,parame4,addProductURL_c_f)
                if (formData[5] == undefined) {
                    var delay_add = 0
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                                btn_cart.parentNode.classList.remove('inc_loading')
                            }else{
                                btn_cart.classList.remove('inc_loading')
                            }
                            if (window.innerWidth < 820) {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[5] != undefined) {
                    callprodF()
                }
            }
        });
    }

    function callprodF() {
        window.jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[5],
            error: function(jqXHR, textStatus) {
                INC.config.disablebtn = true
                if (btn_cart != undefined) {
                    if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                        btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                    }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                        btn_cart.parentNode.classList.remove('inc_loading')
                    }else{
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (window.innerWidth < 820) {
                        btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                    }
                }

                document.querySelector('html').classList.add('inc_overlay');
                INC.methods.showSidebar();
                INC.methods.updateSidebarBlock(add_type);
                errorLog(prodId5, textStatus)
            },
            success: function(data) {
                var delay_add = 0
                if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                    delay_add = 3000
                }else{
                    delay_add = 0
                }
                setTimeout(function(){
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
                            btn_cart.parentNode.classList.remove('inc_loading')
                        }else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth < 820) {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
    
                    var res_data = data
                    INC.methods.response_callback(res_data, add_type,paddtype5,parame5,addProductURL_c_f)
                    window.ACC.product.onSuccessAddToCart(res_data)
                    try{
                        updateBasketCounter(res_data.cartData.totalQty);
                    }catch(e){console.log("")}
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                },delay_add);

            }
        });
    }   
}
INC.methods.response_callback = function(json_data, add_type,prod_type,searchParamObjString_c_f,addProductURL_c_f, tickbox) {
    var del_is_oos = false
    var product_id_ad= searchParamObjString_c_f.split('productCodePost')[1].split('&qty')[0].replace('=','')
    let muduleElement = document.querySelector('.inc_pdp_block')
    if(tickbox == "tickbox"){
        muduleElement = document.querySelector('.inc_pdp_tick_box_block')
        if(json_data.errorMsg){
            if(json_data.errorMsg.includes('noItemsAdded') && parseFloat(json_data.addedProducts[0].qty) == 0){
                let popcart = document.createElement('div')
                popcart.innerHTML = json_data.cartPopupHtml
                if(add_type != "delivery"){
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }else{
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }
            }   
        }
    }else{
        if(add_type != "delivery" && prod_type != "CollectOnly"){
            if(json_data.addedProducts != undefined){
                if(muduleElement != null){
                    if(muduleElement.querySelector('.inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input') != undefined){
                        if(json_data.addedProducts[0].qty != undefined && json_data.addedProducts[0].qty != ""){
                            var qty_sel=muduleElement.querySelector('.inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input').value
                            if(parseInt(qty_sel) > json_data.addedProducts[0].qty){
                                if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                                    INC.clientConfig.OOS.push(product_id_ad)
                                }
                                var qtyss = parseInt(qty_sel)  - json_data.addedProducts[0].qty
                                var param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty="+qtyss+""
                                INC.methods.collectionfaildtoadd(param_d,addProductURL_c_f,json_data.addedProducts[0].qty,del_is_oos)
                            }
                        }else if(json_data.addedProducts[0].qty == ""){
                            if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                                INC.clientConfig.OOS.push(product_id_ad)
                            }
                            let qty_sel=muduleElement.querySelector('.inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input').value
                            let qtyss = parseInt(qty_sel)
                            let param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty="+qtyss+""
                            INC.methods.collectionfaildtoadd(param_d,addProductURL_c_f,json_data.addedProducts[0].qty,del_is_oos)
                        }
                    }
                }
            }
        }else{
            if(json_data.addedProducts != undefined && prod_type == "CollectOnly"){
                var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + json_data.addedProducts[0].sku + '"]')
                if (added_el != null) {
                    var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + json_data.addedProducts[0].sku + '"]')
                    var qtysub = json_data.addedProducts[0].qty
                    if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                        added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                    }
                }
                if(json_data.addedProducts[0].qty == "" || json_data.addedProducts[0].qty == 0){
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                        INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                    }
                }
            }
        }

        if(json_data.addedProducts != undefined){
            if(INC.clientConfig.added_product_sku.indexOf(json_data.addedProducts[0].sku) == -1){
                INC.clientConfig.added_product_sku.push({
                    skus : json_data.addedProducts[0].sku,
                    qtys:json_data.addedProducts[0].qty 
                })
            }
        }
        if(json_data.cartData != undefined){
            var cart_qty = json_data.cartData.totalQty
            if (json_data.addedProducts[0].qty == "0" || json_data.addedProducts[0].qty == "") {
                var popcart = document.createElement('div')
                popcart.innerHTML = json_data.cartPopupHtml
                
                if(add_type != "delivery"){
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }else{
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }
            }
        }
        if (document.querySelector('.header-minicart__counter') != null && cart_qty != undefined) {
            document.querySelector('.header-minicart__counter').innerText = cart_qty;
            if(document.querySelectorAll('.header-minicart .header-minicart__counter')[1] != undefined) {
                document.querySelectorAll('.header-minicart .header-minicart__counter')[1].innerText = cart_qty;
            }
        }
        if(document.querySelector(".basket-total-items") != null){
            document.querySelector(".basket-total-items").innerText = cart_qty;
        }
        // TODO: update
        updateBasketCounter(cart_qty);
        if (document.querySelector('.header-wrapper .header-minicart .header-minicart__counter') != null && cart_qty != undefined) {
            document.querySelector('.header-wrapper .header-minicart .header-minicart__counter').innerText = cart_qty;
            if(document.querySelectorAll('.header-minicart .header-minicart__counter')[1] != undefined) {
                document.querySelectorAll('.header-minicart .header-minicart__counter')[1].innerText = cart_qty;
            }
        }
    }
}

INC.methods.collectionfaildtoadd = function(param, addProductURL, qty_ad) {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', addProductURL, true);
    xhr1.onload = function() {}
    xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded');


    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
            if (xhr1.status == 200) {
                if (xhr1.responseText != "") {
                    var respons12 = xhr1.responseText
                    var result_datas;
                    setTimeout(function(){
                        if (typeof(respons12) != "object") {
                            if (respons12.indexOf('doctype html') == -1) {
                                result_datas = JSON.parse(respons12);
                                var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                    if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                        INC.clientConfig.added_product_sku[q].qtys = qtysub
                                        break;
                                    }
                                }
                                if (result_datas.addedProducts != undefined && (qty_ad == 0 || qty_ad == "")) {
                                    if (result_datas.addedProducts[0].qty != undefined) {
                                        if (result_datas.addedProducts[0].qty == 0 || result_datas.addedProducts[0].qty == "") {
                                            if (INC.clientConfig.OOS_COL.indexOf(result_datas.addedProducts[0].sku) == -1) {
                                                INC.clientConfig.OOS_COL.push(result_datas.addedProducts[0].sku)
                                            }
                                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                            var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')

                                            if (added_el != null) {
                                                if (added_el.querySelector('.inc_error_msg') != null) {
                                                    added_el.querySelector('.inc_error_msg').innerText = "Sorry, Product is out of stock."
                                                }
                                                if (added_el.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                    // added_el.querySelector('.inc_product_desc_qty_input_block').style.display = "none"
                                                }
                                            } else {
                                                if (added_el != null) {
                                                    if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Sorry, Product is out of stock."
                                                    }
                                                }
                                            }
                                        } else {
                                            if (result_datas.addedProducts != undefined) {
                                                if (result_datas.addedProducts[0].sku != undefined) {
                                                    let added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                    if (added_el != null) {
                                                        var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                        let qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                        }
                                                        for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                            if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                                INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                                break;
                                                            }
                                                        }
                                                        if (added_el.querySelector('.inc_error_msg') != null) {
                                                            added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                        } else {
                                                            if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                                added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                                added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                            }
                                                        }
                                                    }
                                                }
                                                minicartQtyUpdate(result_datas, qty_ad)
                                            }
                                            minicartQtyUpdate(result_datas, qty_ad)
                                            INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                        }
                                    } else {
                                        if (result_datas.addedProducts != undefined) {
                                            if (result_datas.addedProducts[0].sku != undefined) {
                                                let added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                let added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                let qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                    added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                }
                                                for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                    if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                        INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                        break;
                                                    }
                                                }
                                                if (added_el != null) {
                                                    if (added_el.querySelector('.inc_error_msg') != null) {
                                                        added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                    } else {
                                                        if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                            added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                            added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        minicartQtyUpdate(result_datas, qty_ad)
                                        INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                    }
                                } else {
                                    if (result_datas.addedProducts != undefined) {
                                        if (result_datas.addedProducts[0].sku != undefined) {
                                            let added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                            if (added_el != null) {
                                                if (added_el.querySelector('.inc_error_msg') != null) {
                                                    added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                } else {
                                                    if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    minicartQtyUpdate(result_datas, qty_ad)
                                    INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                }

                                minicartQtyUpdate(result_datas, qty_ad)
                            } else {
                                if (result_datas.addedProducts != undefined) {
                                    if (result_datas.addedProducts[0].sku != undefined) {
                                        let added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                        if (added_el != null) {
                                            if (added_el.querySelector('.inc_error_msg') != null) {
                                                added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                            }
                                        }
                                    }
                                }
                                minicartQtyUpdate(result_datas, qty_ad)
                                INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                            }
                        } else {
                            INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                            result_datas = xhr1.responseText;
                        }
                    },100)
                }
                if (INC.config.pageType == "cartPage") {
                    setTimeout(function() {
                        window.location.reload();
                    }, 1000)
                }
            }
        }
    }
    xhr1.send(param);
}
INC.methods.updateaddedProduct = function(data__position, data__id, added_qty, qty, elloader, yes) {
    var csrf_token = ""
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var formData = []
    var data0 = {};
    data0["entryNumber"] = data__position;
    data0["productCode"] = data__id;

    if (yes == "yes") {
        data0["initialQuantity"] = 0;
        data0["quantity"] = 0;
    } else {
        data0["initialQuantity"] = added_qty;
        data0["quantity"] = qty;
    }
    data0["CSRFToken"] = csrf_token;
    formData.push(data0);
    window.jQuery.ajax({
        type: "POST",
        url: 'https://www.wickes.co.uk/cart/update',
        data: formData[0],
        error: function() {},
        success: function() {
            elloader.classList.remove('show_loader')
            if (yes == "yes") {
                elloader.parentNode.removeChild(elloader)
            }
            var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
            var morecount = 2
            if (window.innerWidth < 820) {
                morecount = 1
            }
            INC.methods.updateminicart(elloader)
            if (alladdedprodlength > morecount) {
                var tcount = alladdedprodlength - morecount + " More Item(s)"
                
                if(document.querySelector('.inc_sidebar_cart_added_block.active') != null){
                    document.querySelector('.inc_cart_added_right_btn_img').innerText =  "Show less"
                }else{
                    document.querySelector('.inc_cart_added_right_btn_img').innerText = "+" + tcount
                }
                document.querySelector('.inc_cart_added_right_btn_img').setAttribute('added_counts', (alladdedprodlength - morecount))
            } else {
                document.querySelector('.inc_cart_added_right_btn_img').innerText = ""
            }
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_00')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')

            if (alladdedprodlength == 0) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_00')
            } else if (alladdedprodlength == 1) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
            } else if (alladdedprodlength == 2) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
            } else if (alladdedprodlength == 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
            } else if (alladdedprodlength > 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
            }
        }
    });
}

INC.methods.updateminicart = function() {
    item_inc = []
    var curtime = ""
    curtime = Date.now()
    var minicarturl = 'https://www.wickes.co.uk/cart/rollover/ResponsiveMiniCart?_=' + curtime + ''
    window.jQuery.ajax({
        url: minicarturl,
        cache: false,
        type: 'GET',
        async: false,
        error: function() {},
        success: function(datarel) {
            var dochtml = document.createElement('div')
            dochtml.innerHTML = datarel
            var htmlminicart = dochtml.querySelector('.popover-mini-basket')
            if (htmlminicart != null) {
                var poplayer = htmlminicart.querySelectorAll('.card')
                var alladdedp = poplayer
                for (let k = 0; k < alladdedp.length; k++) {
                    var data__id = alladdedp[k].querySelector('.card__inner').getAttribute('data-id')
                    var data__position = alladdedp[k].querySelector('.card__inner').getAttribute('data-position')
                    var added_qty = alladdedp[k].querySelector('.product-card__quantity-value').innerText
                    var adde_items = document.querySelector('.inc_cart_added_product_block[id="' + data__id + '"]')

                    if (adde_items != null) {
                        adde_items.setAttribute('data__id', data__id)
                        adde_items.setAttribute('data__position', data__position)
                        adde_items.setAttribute('added_qty', added_qty)
                    }

                    item_inc.push({
                        data__id: data__id,
                        data__position: data__position,
                        added_qty: added_qty
                    })
                }
            }
        }
    });
}
function add_to_cart_tracking_multiple(mainProductId, tickbox, tickjson) {
    var event_type = "bundle_add_to_cart";
    var core_prod_id = "";
    var productIdsforTracking = []
    core_prod_id = mainProductId;

    var pageType = "100";
    var all_data = [];
    let trackingjson=INC.config.bundle_tracking
    if(tickbox == 'tickbox'){
        trackingjson = tickjson
        pageType = "109";
    }
    for (var k = 0; k < trackingjson.length; k++) {
        if (trackingjson.length == 1) {
            productIdsforTracking.push(mainProductId)
            productIdsforTracking.push(trackingjson[k].id)
            all_data.push({
                id: parseInt(trackingjson[k].bid),
                product_ids: productIdsforTracking,
                product_id: core_prod_id
            })
            productIdsforTracking = []
        } else {
            if (mainProductId != trackingjson[k].id) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(trackingjson[k].id)
                all_data.push({
                    id: parseInt(trackingjson[k].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id
                })
                productIdsforTracking = []
            }
        }
    }
    var data = {
        "eventData": btoa((JSON.stringify({
            "event_data": {
                "bundle_data": all_data
            },
            "page_type": pageType.toString(),
            "event_type": event_type,
            "method": "track",
            "platform": "",
            "token": INC.config.clientToken,
            "mb": "1"
        }))),
        "vid": INC.config.ivid,
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };
    makeTrackingApiCall(JSON.stringify(data));
}
function makeTrackingApiCall(eventdata) {
    var p_url = '//optimizedby.increasingly.co/ImportData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } 
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}

INC.methods.checkStatusVAT = function () {
    if (INC.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            statusVAT = cookieSplit[1].trim();
        }
    });
    return statusVAT;
}

INC.methods.checkStatusLoggedIn = function () {
    var cookieArray = document.cookie.split(";");
    var statusLoggedIn = false;
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "customer_name") {
            statusLoggedIn = true;
        }
    });

    return statusLoggedIn;
}

INC.methods.trackingEvents = function(eventType, eventDataObj, pageType, producttype, rec_type) {
    var importEventDataObj = {};
    var importDataObj = {};

    importEventDataObj["event_data"] = eventDataObj;
    var prd_type=""
    if (producttype == "Both") {
        prd_type = "1"
    } else if (producttype == "DeliveryOnly") {
        prd_type = "2"
    } else if (producttype == "CollectOnly") {
        prd_type = "3"
    }  else if (producttype == "oos") {
        prd_type = ""
    } 
    switch (eventType) {

        case "catalogProductView":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
            } else {
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
            }
            break;
        case "bundleProductClickTracking":
            importEventDataObj["event_type"] = "bundle_product_click_tracking";
            // importEventDataObj["page_type"] = pageType;
            if(INC.config.recommendation == true && INC.config.pageType == "pdp") importEventDataObj["rt"] = "8";
            importEventDataObj["is_logged"] = "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["store_code"] = "wickes_app";
            }
            if(rec_type == 'tickbox'){
                importEventDataObj["page_type"] = '109';
            }else{
                importEventDataObj["page_type"] = pageType;
            }
            break;
        case "bestseller_add_to_cart":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "bestseller_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
                INC.methods.sendAffiliateRequest();
            } else {
                importEventDataObj["event_type"] = "bestseller_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                INC.methods.sendAffiliateRequest();
            }
            break;
        case "bundleAddToCart":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
                INC.methods.sendAffiliateRequest();
            } else {
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                INC.methods.sendAffiliateRequest();
            }
            break;
    }
    importEventDataObj["purchase_type"] = prd_type;
    importEventDataObj["platform"] = "";
    importEventDataObj["token"] = INC.config.clientToken;
    importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
    importDataObj["uri"] = window.location.href;
    importDataObj["vid"] = INC.config.ivid;
    INC.methods.sendTrackingEvents(importDataObj);
}
INC.methods.sendTrackingEvents = function (importDataObj) {
    var xhr = new XMLHttpRequest();
    var method = "POST";
    var url = INC.config.trackingURL;
    xhr.onreadystatechange = handleStateChange;

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    function handleStateChange() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // logger(xhr.responseText);
        }
    }

    xhr.send(JSON.stringify(importDataObj));
}

INC.methods.sendAffiliateRequest = function () {
    var url = INC.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}
INC.methods.addVisitorID = function () {

    function generateUniqueINCVisitorId(len, bits) {
        var bits_ = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits_).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }

    var cookieArray = document.cookie.split(";");
    var ivid = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "ivid") {
            ivid = cookieSplit[1].trim();
        }
    });

    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
    }
    

    // var oImg = document.createElement("img");
    // oImg.setAttribute('src', "///optimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none');
    // document.body.appendChild(oImg);

    INC.config.ivid = ivid;

    return ivid;
}


INC.checkDevUserCookie();


window.$( ".mh-atb" ).click(function() {
    document.querySelector('body').classList.add('calc')
});
String.prototype.inc_StartsWith = function(str){
    if(this.indexOf(str)===0){
        return true;
    }else{
        return  false;
    }
};
document.onclick = clickListener;
    
function clickListener(e) {
    try{
        var clickedElement = e.target;
        if(clickedElement != null){
            try{
    
                if(clickedElement.className == "inc_product_modal_block active"){
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                            document.querySelector('body').style.position = "relative"
                            if(inc_scroll_height > 100){
                                window.jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                            }
                        }
                    }
                    var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                    if(docpdpinc != null){
                        if(window.innerWidth < 1025 && window.innerWidth > 819){
                            docpdpinc.scrollLeft = 0
                            INC.clientConfig.offset = 0;
                            INC.clientConfig.slidevalue = 0;
                            if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                            }
                            if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                            }
                        }
                    }
                    if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block"){
                        document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
                    }
                    if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                        document.querySelector('html').classList.remove('inc_overlay');
                    }
    
                    document.querySelector('html').classList.remove('inc_popup_open')
                    if(document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc') != null){
                        document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc .close_read_more').click()
                    }
                    clickedElement.classList.remove('active')
                }
                if(clickedElement.className == "inc_table_image_block") {
                    if(document.querySelector('.inc_product_desc_energy_rating_block.inc_active .inccloseIconparent span') != null) {
                        document.querySelector('.inc_product_desc_energy_rating_block.inc_active .inccloseIconparent span').click()
                    }
                }
                if(clickedElement.className == "sidebar_outer sidebar_outer_active"){
                    if(document.querySelector('.inc_header_continue_img') != null){
                        document.querySelector('.inc_header_continue_img').click()
                    }
                }
                
                if(clickedElement.className == "inc_table_image_block" || clickedElement.className == "inc_table_image_child_block"){
                    if(INC.config.pageType == "pdp"){
                        if(clickedElement.querySelector('.inccloseIconparent span') != null){
                            if(clickedElement.querySelector('.inccloseIconparent') != null){
                                //window.$('.inccloseIconparent').animate({ scrollTop:  0 }, 0);
                                window.$(".inctableRatingImgParent").animate({ scrollTop:  0 }, 0);
                            }
                            
                            clickedElement.querySelector('.inccloseIconparent span').click()
                        }
                    }
                }

                if(clickedElement != null){
                    if(clickedElement.classList != null && clickedElement.classList != undefined){
                        if(clickedElement.classList.contains("configurable","show_overlay") == true){
                            var allact = document.querySelectorAll('.inc_product_desc_att_block.active')
                            for(let q=0;q<allact.length;q++){
                                allact[q].classList.remove('active')
                            }
                            if(document.querySelector('.inc_product_block.show_overlay') != null){
                                document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                            }
                            document.querySelector('html').classList.remove('inc_overlay');
                        }
                    }
                }
    
    
                if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block active"){
                    document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
                }
                if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block"){
                    document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
                }
                if(clickedElement.className == "inc_promo_popup inc_active"){
                    document.querySelector('html').classList.remove('inc_overlay_promo');
                    clickedElement.classList.remove('inc_active')
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                    }
                }
                if(clickedElement.parentNode != null){
                    if(document.querySelector('.switch.switch-vat') != null){
                        if(clickedElement.parentNode != null){
                            if(clickedElement.parentNode.classList != undefined){
                                if(clickedElement.parentNode.classList.contains('switch-vat') == true || clickedElement.id == "vat"){
                                    document.querySelector('html').classList.remove('inc_excvat_show')
                                    document.querySelector('html').classList.remove('inc_incvat_show')
                                    setTimeout(function(){
                                        if(document.querySelector('.switch.switch-vat') != null){
                                            if(document.querySelector('.switch.switch-vat input:checked') != null){
                                                document.querySelector('html').classList.add('inc_excvat_show')
                                            }else if(document.querySelector('.including-vat.d-none') != null){
                                                document.querySelector('html').classList.add('inc_excvat_show')
                                            }else if(document.querySelector('.excluding-vat.d-none') != null){
                                                document.querySelector('html').classList.add('inc_incvat_show')
                                            }else{
                                                document.querySelector('html').classList.add('inc_incvat_show')
                                            }
                                        }
                                    },200)
                                }
                            }
                        }
                    }
                    if(clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" &&  clickedElement.className != "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch"){
                        if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                            document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') == null){
                    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                        if(document.querySelector('.close_read_more') != null){
                            document.querySelector('.close_read_more').click()
                        }
                        if(document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null){
                            if(document.querySelector('.inc_promo_popup.inc_active') == null){
                                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                            }
                        }
                    }
                }
                if(clickedElement.className == "inc_pdp_bundle_product_list_wrapper_items_block active"){
                    document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
                }
    
                if (clickedElement.className == "mt-calc-link"){
                    document.querySelector('body').classList.add('calc')
                }
                if(clickedElement.parentNode != null){
                    if(clickedElement.classList != undefined && clickedElement.classList != null){
                        if (clickedElement.classList.contains("mh-atb") != true){
                            if ((clickedElement.parentNode.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.parentNode.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.className == "btn__text") && document.querySelector('body').classList.contains('calc') != true && clickedElement.classList.contains("mh-atb") != true && INC.config.pageType == "pdp") {
                                //tickbox add
                                var checking_popup = setInterval(function() {
                                    if (document.querySelector('.mini-cart-content') != null) {
                                        var rem_pop = document.querySelector('.mini-cart-content').style.display
                                        if (rem_pop == "block") {
                                            clearInterval(checking_popup)
                                            document.querySelector('.mini-cart-content').setAttribute('style', 'display:none');
                                        }
                                    }
                                }, 0)
                                if(clickedElement.parentNode != null){
                                    if (clickedElement.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.parentNode.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.parentNode.className == "btn btn-action btn_full bw__cc-btn" || clickedElement.classList.contains('nearest-store-purchasable') == true || clickedElement.parentNode.classList.contains('nearest-store-purchasable') == true) {
                                        if (clickedElement.parentNode.parentNode.className == "add_to_cart_form" || clickedElement.parentNode.parentNode.parentNode.className == "add_to_cart_form" || clickedElement.parentNode.parentNode.classList.contains('add_to_cart_storepickup_form') == true){
                                            if(document.querySelector('.inc_pdp_tick_box_product-list_block .inc_product_module_block .inc_product_desc_add_img.checked') != null){
                                                let delType=""
                                                if(clickedElement.parentNode.parentNode.classList.contains('add_to_cart_storepickup_form') == true || clickedElement.parentNode.classList.contains('bw__cc-btn')){
                                                    delType = "collection"
                                                    if (document.querySelector('form input[name="storeNamePost"]') != null && INC.config.storeId == "") {
                                                        INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
                                                        localStorage.setItem('inc_storeId', INC.config.storeId)
                                                    }
                                                }else{
                                                    delType = "delivery"
                                                }
                                                
                                                let dataStore = INC.dataStore;
                                                dataStore["tickboxProducts"] = {}
                                                var bundletrack=[]
                                                var elprdb_l = document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_module_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
                                                for(var t=0;t<elprdb_l.length;t++){
                                                    var elparant=elprdb_l[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                                    if(elparant.querySelector('.inc_product_desc_add_block.added_inc') != null){
                                                        var productBlockNode = elparant
                                                        if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                                                            productBlockNode = elparant.parentNode
                                                        }
                                                        var sku = productBlockNode.getAttribute('data-sku');
                                                        var id = productBlockNode.getAttribute('data-main_id');
                                                        var bundleid = productBlockNode.getAttribute('data-bundle_id');
                                                        var mainid = productBlockNode.getAttribute('data-main_id');
                                                        var qty = productBlockNode.querySelector('.inc_product_desc_qty_input_text input').value;
                                                        dataStore["tickboxProducts"][sku] = qty;
                                                        INC.config.pdpaddedProductList.push(sku)
                                                        INC.config.pdpaddedProductList.push(id)
                                                        bundletrack.push({
                                                            id: mainid,
                                                            bid: bundleid,
                                                            pname: null,
                                                            prc: null,
                                                            qty:qty
                                                        })
                                                        if(elprdb_l.length == t+1){
                                                            setTimeout(function(){
                                                                addtickboxToCart(bundletrack, delType, clickedElement)
                                                                // setTimeout(function(){
                                                                //     mainCTASidebar(clickedElement,"tickbox")
                                                                // },200)
                                                            },1000)
                                                        }
                                                    }
                                                }
                                            }else{
                                                mainCTASidebar(clickedElement, null)
                                            }
                                        }
                                    }
                                }
                                //end of tickboxa dd
                            } else if (document.querySelector('#modal-click-and-collect.show') != null) {
                                if (INC.config.storeId == "") {
                                    var storeids = setInterval(function() {
                                        if (document.querySelector('.card-store-collect__actions input[name="storeNamePost"]') != null) {
                                            clearInterval(storeids)
                                            if (document.querySelector('form input[name="storeNamePost"]') != null) {
                                                INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
                                                localStorage.setItem('inc_storeId', INC.config.storeId)
                                            }
                        
                                            var overl = document.querySelector('.inc_sidebar_overlay_block')
                                            var out_el = document.querySelector('.sidebar_outer')
                                            if (overl != null) {
                                                overl.parentNode.removeChild(overl)
                                            }
                                            if (out_el != null) {
                                                out_el.parentNode.removeChild(out_el)
                                            }
                                            init_flag = true
                                            init_fun_flag = true
                                            init_irb_flag = true
                                            onloadpdp = false
                                            INC.init('init_call');
                                        }
                                    }, 10);
                                } else {
                                    if (document.querySelector('form input[name="storeNamePost"]') != null) {
                                        INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
                                        localStorage.setItem('inc_storeId', INC.config.storeId)
                                    }
                        
                                }
                        
                                if (clickedElement.classList.contains('card-store-collect__btn') == true) {
                                    setTimeout(function() {
                                        var elClientAddToCartBtn = document.querySelector('.btn-add-to-basket');
                                        if (elClientAddToCartBtn == null) {
                                            elClientAddToCartBtn = document.querySelector('.click_pickupInStore_Button')
                                        }
                                        INC.config.clientbtn =true
                                        if (clickedElement.parentNode.querySelector('form input[name="storeNamePost"]') != null) {
                                            INC.config.storeId = clickedElement.parentNode.querySelector('form input[name="storeNamePost"]').value
                                            localStorage.setItem('inc_storeId', INC.config.storeId)
                                        }
                                        var findObj = new INC.classes.FindObj();
                                        findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                                            mainId: INC.dataStore.pdpProductId
                                        }).id;
                                        var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                                        if (sbBlock != null) {
                                            sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                                            sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                                            var qty = "1";
                                            if (INC.config.deviceType == "desktop" && elClientAddToCartBtn != null) {
                                                if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field') != null) {
                                                    qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field').value;
                                                }
                                            }
                                            if (INC.config.deviceType == "mobile" && elClientAddToCartBtn != null) {
                                                if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field') != null) {
                                                    qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field').value;
                                                }
                                            }
                        
                                            if (elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.click-and-collect__product input') != null) {
                                                qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.click-and-collect__product input').value
                                            }
                        
                                            if (elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
                                                if (document.querySelector('.pdp-price__size .pdp-price__notification.error') != null) {
                                                    if (document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display:none" || document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display: none;") {
                                                        pdp_client_added_pr(qty,findObj)
                                                    }
                                                } else {
                                                    pdp_client_added_pr(qty,findObj)
                                                }
                                                checkoosmainproduct()
                                        }
                                        }
                                    }, 1000)
                                }
                            } else if (clickedElement.id == "add-to-cart" && INC.config.pageType == "productList") {
                                // window.scrollBy(0, -100)
                                var productId = clickedElement.parentNode.parentNode.parentNode.querySelector('[id="pid"]').value;
                                let qty = 1;
                                if (INC.config.deviceType == "desktop") {
                                    qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
                                }
                                if (INC.config.deviceType == "mobile") {
                                    qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
                                }
                                INC.config.clientbtn =true
                                INC.dataStore.plpProductQty = qty;
                                var plp_wrap = clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                INC.config.empty_prod_details = []
                                var p_id = productId
                                var p_name = plp_wrap.querySelector('.product-name').innerText
                                var p_img = plp_wrap.querySelector('img').src
                                var elActivePrice = plp_wrap.querySelector('.price-text');
                                var elRegularPrice = plp_wrap.querySelector('.price-text');
                                var regularPrice = "";
                                if (elRegularPrice.innerText.split('£')[2] != undefined) {
                                    regularPrice = parseFloat(elRegularPrice.innerText.split('£')[2].replace(',', ''));
                                } else {
                                    regularPrice = parseFloat(elActivePrice.innerText.split('£')[1].replace(',', ''));
                                }
                                var p_activePrice = parseFloat(elActivePrice.innerText.split('£')[1].replace(',', ''));
                                INC.config.empty_prod_details.push({
                                    p_id: p_id,
                                    p_name: p_name,
                                    p_img: p_img,
                                    p_activePrice: p_activePrice,
                                    regularPrice: regularPrice
                                })
                                INC.clientConfig.OOS = []
                                INC.clientConfig.OOS_COL = []
                                INC.clientConfig.OOS_MESG = []
                                INC.methods.clear();
                                setTimeout(function() {
                                    if (document.querySelector('#QuickViewDialog') != null) {
                                        if (document.querySelector('button[id="add-to-cart"]') == null) {
                        
                                            document.querySelector('#QuickViewDialog').style.visibility = "hidden";
                        
                                        }
                                    }
                                }, 50);
                        
                                setTimeout(function() {
                                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                                    checkoosmainproduct()
                                }, 100);
                            }
                        }
                    }
                    setTimeout(function() {
                    if (clickedElement.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.parentNode.className == "btn btn-action btn_full btn-add-to-basket"){
                            if (document.querySelector('body').classList.contains('calc')){
                                document.querySelector('body').classList.remove('calc')
                            }
                        }
                    }, 500);
                }
                
                if (clickedElement.parentNode != null) {
                    if (clickedElement.parentNode.parentNode != null) {
                        if (clickedElement.parentNode.parentNode.parentNode != null) {
                            if ((INC.config.pageType == "pdp" && clickedElement.parentNode.parentNode.parentNode != undefined) && (clickedElement.className != "inc_product_desc_att_size_list_item_img_block active" || clickedElement.className != "inc_product_desc_att_size_list_item_img_block")) {
                                if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                                    if (clickedElement.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.id == "swatchList") {
                                        setTimeout(function() {
                                            if (document.querySelector('.inc_pdp_block') != null) {
                                                if (document.querySelector('#add-to-cart') != null) {
                                                    if (document.querySelector('#add-to-cart').getAttribute('disabled') != "disabled") {
                                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                                        var selected_shades = "";
                                                        if (clickedElement.querySelector('img') != null) {
                                                            selected_shades = clickedElement.querySelector('img').alt;
                                                        } else if (clickedElement.parentNode.parentNode.querySelector('img') != null) {
                                                            selected_shades = clickedElement.parentNode.parentNode.querySelector('img').alt;
                                                        }
                                                        var main_prod_attr = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block a');
                                                        if (selected_shades != "") {
                                                            for (let a = 0; a < main_prod_attr.length; a++) {
                                                                if (main_prod_attr[a].getAttribute('title').indexOf(selected_shades) >= 0) {
                                                                    if (main_prod_attr[a].parentNode.classList.contains('active') == false) {
                                                                        main_prod_attr[a].click();
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        // INC.methods.autoSelectMainProductColorVarient()
                                                    } else {
                                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                                    }
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                }
                                            } else {
                                                // INC.init();
                                            }
                                        }, 2500)
                                    }
                                }
                                if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                                    if (clickedElement.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.id == "swatchList") {
                                        setTimeout(function() {
                                            if (document.querySelector('.inc_pdp_block') != null) {
                                                if (document.querySelector('#add-to-cart') != null) {
                                                    if (document.querySelector('#add-to-cart').getAttribute('disabled') != "disabled") {
                                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                                        var selected_shades = "";
                                                        if (clickedElement.querySelector('img') != null) {
                                                            selected_shades = clickedElement.querySelector('img').alt;
                                                        } else if (clickedElement.parentNode.parentNode.querySelector('img') != null) {
                                                            selected_shades = clickedElement.parentNode.parentNode.querySelector('img').alt;
                                                        }
                                                        var main_prod_attr = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block a');
                                                        if (selected_shades != "") {
                                                            for (let a = 0; a < main_prod_attr.length; a++) {
                                                                if (main_prod_attr[a].getAttribute('title').indexOf(selected_shades) >= 0) {
                                                                    if (main_prod_attr[a].parentNode.classList.contains('active') == false) {
                                                                        main_prod_attr[a].click();
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        // INC.methods.autoSelectMainProductColorVarient()
                                                    } else {
                                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                                    }
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                }
                                            } else {
                                                // INC.init();
                                            }
                                        }, 2500)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", 'JS Error on Wickes production');
                formData.append("Message", err + 'Error Stack' + err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                xhr.send(formData);
            } 
        }
    }catch(error){
        errorLog(INC.dataStore.pdpProductId, "Error in clickListener"+error.stack.toString())
    }
}
function mainCTASidebar(clickedElement, tickbox, add_type, client_add_btn){
    var elClientAddToCartBtn = document.querySelector('.btn-add-to-basket');
    var findObj = new INC.classes.FindObj();
    findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
        mainId: INC.dataStore.pdpProductId
    }).id;
    var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
    if (sbBlock != null) {
        sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
        sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
        var qty = 1;
        if (INC.config.deviceType == "desktop") {
            qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field').value;
        }
        if (INC.config.deviceType == "mobile") {
            qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('#quantity-field').value;

        }

        if (elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
            if (document.querySelector('.pdp-price__size .pdp-price__notification.error') != null) {
                if (document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display:none" || document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display: none;") {
                    if(clickedElement.parentNode.parentNode.classList.contains('add_to_cart_storepickup_form') == true){
                        setTimeout(function(){
                            pdp_client_added_pr(qty,findObj,"c_c", add_type, tickbox, client_add_btn)
                        },1000)
                    }else{
                        pdp_client_added_pr(qty,findObj,null, add_type, tickbox, client_add_btn)
                    }
                }
            } else {
                if(clickedElement.parentNode.parentNode.classList.contains('add_to_cart_storepickup_form') == true){
                    setTimeout(function(){
                        pdp_client_added_pr(qty,findObj,"c_c", add_type, tickbox, client_add_btn)
                    },1000)
                }else{
                    pdp_client_added_pr(qty,findObj, null, add_type, tickbox, client_add_btn)
                }
            }
        }
    }
}
function pdp_client_added_pr(qty,findObj,c_c, add_type, tickbox, client_add_btn){
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    INC.config.clientbtn =true
    if (qty != undefined && qty != "0" && qty != "") {
        if (qty > 0 && qty != "-0") {
            if (qty.inc_StartsWith("0") == false) {
                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
                if(document.querySelector('#bwErrorMsg') != null){
                    if(document.querySelector('#bwErrorMsg').style.display == "block"){
                        return;
                    }
                }
                if(c_c == "c_c"){
                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "collection");
                }else{
                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "delivery");
                }
                
                document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                INC.methods.showSidebar();
                var p_img;
                if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                    p_img = document.querySelector('.s7staticimage img').src
                    if (document.querySelector('.inc_cart_added_product_img img') != null) {
                        document.querySelector('.inc_cart_added_product_img img').src = p_img
                    }
                }
                if(document.querySelector('.pdp__gallery img[itemprop="image"]') != null){
                    p_img = document.querySelector('.pdp__gallery img[itemprop="image"]').src
                    if (document.querySelector('.inc_cart_added_product_img img') != null) {
                        document.querySelector('.inc_cart_added_product_img img').src = p_img
                    }
                }
                // if (document.querySelector('#variant') != null) {
                    var sel_elm_cl = document.querySelector('#variant')
                    var client_var = ""
                    var optionSelected;
                    if(sel_elm_cl != null){
                        optionSelected = sel_elm_cl.options[sel_elm_cl.selectedIndex].innerText.trim();
                        client_var = optionSelected
                    }
                    if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null) {
                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerText = client_var
                    }
                    var pname = document.querySelector('.pdp__heading').innerText
                    if (document.querySelector('.inc_cart_added_product_desc_title_text') != null) {
                        document.querySelector('.inc_cart_added_product_desc_title_text').innerHTML = pname
                    }
                    
                    var product_price = 0
                    var prodPricing = 0;
                    var old_price = null;
                    if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
                        if(window.$('.pdp-price-container .pdp-price__new-price').text().split('£')[1] != undefined){
                            product_price = window.$('.pdp-price-container .pdp-price__new-price').text().split('£')[1].replace(',', '').trim();
                        }

                        if (product_price.indexOf('From') >= 0) {
                            product_price.replace('From', '').trim()
                        }
                        prodPricing = product_price;
                        product_price = product_price * qty
                        old_price = null;
                    } else {
                        product_price = window.jQuery('.pdp-price-container .pdp-price__old-price').text().toString().split('£')[1].replace(',', '').trim();

                        if (product_price.indexOf('From') >= 0) {
                            product_price.replace('From', '').trim()
                        }
                        prodPricing = product_price;
                        product_price = product_price * qty
                        old_price = window.$('.pdp-price-container .pdp-price__new-price').text().replace(',', '').split('£')[1].trim();
                    }
                    var old_price_exc=null
                    if(document.querySelector('.pdp-price-container .excluding-vat .pdp-price__new-price') != null){
                        var priceexc = document.querySelector('.pdp-price-container .excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
                        if(document.querySelector('.pdp-price-container .excluding-vat .pdp-price__old-price') != null){
                            old_price_exc = document.querySelector('.pdp-price-container .excluding-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
                            priceexc = document.querySelector('.pdp-price-container .excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
                        }
                        var excprodPricing = priceexc;
                        priceexc = priceexc * qty
                    }
                    if(document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price') != null){
                        product_price=document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
                        if(document.querySelector('.pdp-price-container .including-vat .pdp-price__old-price') != null){
                            old_price = document.querySelector('.pdp-price-container .including-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
                            product_price=document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
                        }
                        prodPricing = product_price;
                        product_price = product_price * qty

                    }
                    //inc vat
                    if (old_price != null) {
                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerHTML = formatter.format(old_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
                        }
                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerHTML = formatter.format(old_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', old_price * parseInt(qty))
                        }
                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').innerHTML = formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').setAttribute('subtotalregularprice', product_price)
                        }
                    } else if (product_price != 0) {
                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_att_block').classList.add('active');
                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerHTML = formatter.format(prodPricing).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
                        }
                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerHTML = "" + formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.incvattext+"</span>"
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', product_price)
                            if(document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text') != null){
                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').setAttribute('subtotalregularprice', product_price)
                            }

                        }
                    }
                    //exc vat
                    if (old_price_exc != null) {
                        let prodPrc = priceexc * parseInt(qty)
                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text_exc') != null) {
                            document.querySelector('.inc_cart_added_product_desc_price_active_text_exc').innerHTML = formatter.format(excprodPricing).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
                        }
                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text_exc') != null) {
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text_exc').innerHTML = formatter.format(priceexc * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text_exc').setAttribute('subtotalactiveprice', prodPrc)
                        }
                    } else if (excprodPricing != 0) {
                        //inc_cart_added_product_desc_price_active_text_exc
                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text_exc') != null) {
                            document.querySelector('.inc_cart_added_product_desc_price_active_text_exc').innerHTML = formatter.format(excprodPricing).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
                        }
                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text_exc').innerHTML = "" + formatter.format(priceexc).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() + "<span>"+INC.config.excvattext+"</span>"
                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text_exc').setAttribute('subtotalactiveprice', priceexc)

                        }
                    }
                    checkoosmainproduct()
                // }
            }
        }
    }

    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
    }
    if(tickbox == "tickbox"){
        setTimeout(function(){
            INC.methods.updateSidebarBlock(add_type, tickbox, client_add_btn);
        },200)
    }
}
function checkoosmainproduct() {
    var timer_counts = 0
    var checkoos = setInterval(function() {
        timer_counts++
        if (document.querySelector('.popover-mini-basket__not-added p') != null) {
            clearInterval(checkoos)
            let checkMainprod = false
            if(document.querySelector('.notification.notification_success[style="display: block"]') != null){
                checkMainprod = true
            }
            var error_mes = document.querySelector('.popover-mini-basket__not-added p').innerText
            if(checkMainprod == false){
                if (error_mes.indexOf('Not added to basket') >= 0 || error_mes.innerText.toLocaleLowerCase() == "not added to basket") {
                    
                    if (document.querySelector('.inc_header_item_count_title_text') != null) {
                        document.querySelector('.inc_header_item_count_title_text').innerText = "0 item,"
                    }
                    if (document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg') != null) {
                        document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').innerText = 'Sorry, there is insufficient stock for your basket.'
                        document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').style.color = "#c3332e"
                        document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                    }
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                        document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = "£0.00"
                        document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', 0)
                        document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').setAttribute('subtotalregularprice', 0)

                    }
                    if(document.querySelector('.inc_cart_added_product_block') != null){
                        document.querySelector('.inc_cart_added_product_block').classList.add('cross')
                    }
                }
            }
        }
        if (timer_counts * 100 > 40000) {
            clearInterval(checkoos)
        }
    }, 100)
}


function read_more_inc(element){
    if(element.parentNode){
        var prod_desc_block = element.parentNode.parentNode.parentNode.parentNode.parentNode;
        if(prod_desc_block.querySelector('.inc_product_description_main_block').classList.contains('active') == false){
            prod_desc_block.querySelector('.inc_product_header_block').classList.remove('active');
            prod_desc_block.querySelector('.inc_product_description_main_block').classList.add('active');
            prod_desc_block.querySelector('.inc_product_Description_header_block').classList.add('active');
            element.classList.add('active')
            if(element.parentNode.querySelector('.inc_prod_details') != null){
                element.parentNode.querySelector('.inc_prod_details').classList.remove('active')
            }
            if(window.innerWidth < 820){
                window.$('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: window.$('.inc_product_desc_qty_add_btn_block').height() + 500}, 'fast');
            }
        }else{
            prod_desc_block.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
            element.classList.remove('active')
        }
    }
}


//window.location.pathname.indexOf('/ca/')

function slideTo(id, n, elm, type_of,arrow) {
    var nn = -1
    if (elm.className == "left_arrow" || elm.className == "left_arrow active" || type_of == "left") {
        nn = -1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of,arrow);
    } else {
        nn = 1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of,arrow);
    }
}

function inc_showSlides(n, ind, elm,type_of,arrow) {
    var i;
    var showcase_other_img_list = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a')
    var showcase_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
    var modal_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

    var showcase_other_img = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a img')

    var modal_other_img = elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a img')

    var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
    var additional_img=[]
    additional_img = otherImg_list.split(',');
    var get_org_img = showcase_other_img_list.getAttribute('imageURL')
    if (n > additional_img.length) {
        INC.config.inc_slideIndex = 1
    }
    if (n < 1) {
        INC.config.inc_slideIndex = additional_img.length
    }
    
    for (i = 0; i < showcase_dots.length; i++) {
        showcase_dots[i].classList.remove('active')
        if(modal_dots[i] != undefined){
            modal_dots[i].classList.remove('active')
        }
    }
    var img_src = additional_img[INC.config.inc_slideIndex - 1];
    if(img_src != "null"){
        showcase_other_img.setAttribute('src',img_src);
        modal_other_img.setAttribute('src',img_src)
        showcase_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
        modal_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
        
        for (var r = 0; r < showcase_dots.length; r++) {
            showcase_dots[r].classList.remove('active');
            modal_dots[r].classList.remove('active');
        }
        if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
            showcase_dots[INC.config.inc_slideIndex - 1].classList.add('active');
        }
        if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
            modal_dots[INC.config.inc_slideIndex - 1].classList.add('active');
        }
        if(arrow == "arrow"){
            if(modal_dots.length > 4){
                var activedots=elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.active')
                if(activedots != null){
                    var actind = activedots.getAttribute('index')
                    // if(type_of == "right"){
                        if(actind == 4){
                            if(modal_dots.length >= 5){
                                modal_dots[0].style.display = "none"
                            }
                        }else if(actind == 5){
                            if(modal_dots.length >= 6){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                            }
                        }else if(actind == 6){
                            if(modal_dots.length >= 7){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                            }
                        }else if(actind == 7){
                            if(modal_dots.length >= 8){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                            }
                        }else if(actind == 8){
                            if(modal_dots.length >= 9){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                            }
                        }else if(actind == 9){
                            if(modal_dots.length >= 10){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                                modal_dots[5].style.display = "none"
                            }
                        }else if(actind == 10){
                            if(modal_dots.length >= 11){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                                modal_dots[5].style.display = "none"
                                modal_dots[6].style.display = "none"
                            }
                        }else {
                            modal_dots[0].style.display = "block"
                            modal_dots[1].style.display = "block"
                            modal_dots[2].style.display = "block"
                            modal_dots[3].style.display = "block"
                            if(modal_dots[4] != undefined){
                                modal_dots[4].style.display = "block"
                            }
                            if(modal_dots[5] != undefined){
                                modal_dots[5].style.display = "block"
                            }
                            if(modal_dots[6] != undefined){
                                modal_dots[6].style.display = "block"
                            }
                        }
                    // }
                }
            }
        }
    }
}
// SWIPE FEATURE
var xDown = null;
var yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, {
        passive: true
    });
    element.addEventListener('touchmove', handleTouchMove, {
        passive: true
    });
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    var prod_card;
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) {
                prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) { /* left swipe */
                prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}

var formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
});

function irbReq_tickbox() {
    var pdpProductId = INC.methods.getProductIdFromWebPage()
    let elementName = 'catalog_product_view'
    let bundleReqCount = 1;
    let apiKey = INC.config.clientToken;
    let irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";

    let irbReqParams =
        "product_ids=" + pdpProductId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" +
        "&client_visitor_id=" + INC.config.ivid +
        "&is_tbx=" + "1" +
        "&no_of_bundles=" + bundleReqCount;

    let irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    let xhr = new XMLHttpRequest();
    xhr.open("GET", irbReqURL1, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                cb_tc(JSON.parse(xhr.response),"tickbox")
            }
        }
    }
    xhr.send(JSON.stringify(btoa(irbReqParams)));
}

function cb_tc(bundle_response,recommendation){
    if(INC.dataStore.dataStoreObj == undefined){
        INC.dataStore.dataStoreObj = {}
    }
    var bundles_tc = bundle_response.Bundles;
    var pdpProductId = INC.config.Product_id
    var bundleproductarrayTC={}
    if(bundle_response.ProductsDetail != null){
        for (let ibT = 0; ibT < bundle_response.ProductsDetail.length; ibT++) {
            bundleproductarrayTC[bundle_response.ProductsDetail[ibT].ProductId] = bundle_response.ProductsDetail[ibT]
        }
    }else if(bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null"){
        for (let ibT = 0; ibT < bundle_response.CategoryRecommendations.length; ibT++) {
            bundleproductarrayTC[bundle_response.CategoryRecommendations[ibT].ProductId] = bundle_response.CategoryRecommendations[ibT]
        }
    }
    var bundle_count;
    if(recommendation == "recommendation"){
        INC.config.recommendation = true
        bundle_count=1
        bundles_tc = []
    }else{
        bundle_count=bundles_tc.length
    }
    for (var i = 0; i < bundle_count; i++) {
        if(recommendation == "recommendation"){
            bundles_tc.push({
                BundleId : 11111,
            })
        }
        var irbBundleObj;
        if(INC.dataStore.dataStoreObj != undefined){
            if(INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1 || recommendation == "tickbox"){
                INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                if(recommendation == "recommendation"){
                    irbBundleObj = bundle_response
                }else{
                    irbBundleObj = bundles_tc[i];
                }
                var bundleObj = {};
                if(INC.config.recommendation == false){
                    bundleObj.id = irbBundleObj["BundleId"];
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                
                var irbProductsArray;
                if(recommendation == "recommendation"){
                    irbProductsArray =  bundle_response.CategoryRecommendations
                }else{
                    irbProductsArray = irbBundleObj["ProductIds"]
                }
                if (irbProductsArray.length) {
                    pdpProductId = irbProductsArray[0];
                    if (INC.dataStore.bundleProductsArray != undefined) {
                        INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                    }
                }
                if (irbProductsArray.length) {
                    if(pdptickboxpid.indexOf(irbProductsArray[1]) == -1 && recommendation == "tickbox"){
                        pdptickboxpid.push(irbProductsArray[1]);
                        if(i == 0){
                            tickboxexcludeprod.push(irbProductsArray[1])
                        }
                    }
                }
                var product;
                for (var j = 0; j < irbProductsArray.length; j++) {
                    if(recommendation == "recommendation"){
                        product = irbProductsArray[j]
                    }else{
                        product = bundleproductarrayTC[irbProductsArray[j]]
                    }
                    var exclnull=false;
                    if(product["ExclusiveVATPrice"] == null){
                        exclnull = true
                        product["ExclusiveVATPrice"] = product["Price"]
                        if(product["ExclusiveVATSpecialPrice"] == null){
                            product["ExclusiveVATSpecialPrice"] = product["SpecialPrice"]
                        }
                    }
                    if(INC.config.loadconfigurator == true && INC.config.configuratorabtestprod.indexOf(product.ProductId) == -1){
                        INC.config.configuratorabtestprod.push(product.ProductId)
                    }
                    if(recommendation == "recommendation"){
                        INC.config.recommendationProduct.push(product.ProductId)
                    }
                    var battery_flag=false;
                    battery_flag = true
                    if(battery_flag){
                        if (INC.config.uniqeProduct.indexOf(product["ProductId"]) == -1  && INC.config.childlevelprod.indexOf(product["ProductId"]) == -1) {
                            if(irbProductsArray[0]["ProductId"] != product["ProductId"]){
                                if(INC.config.category_sequance.indexOf(product["CategoryName"]) == -1){
                                    INC.config.category_sequance.push(product["CategoryName"])
                                    INC.config.category_seqId.push({
                                        id:product["CategorySequenceId"],
                                        category:product["CategoryName"]
                                    })
                                }
                            }
                            var p_ids__ = INC.methods.getProductIdFromWebPage()
                            if(sidebar_configurator_id.indexOf(p_ids__) >= 0 && INC.config.pageType == "pdp"){
                                INC.config.config_prd_list.push(product["ProductId"])
                            }
                            product["ProductSku"] = product["ProductId"];
    
                            if (isBase64(product["Description"]) == true) {
                                product["Description"] = Base64.decode(product["Description"])
                            }
                            
                            var pAttributes = product["Attributes"] || "";
                            if (pAttributes != "" && pAttributes != null) {
                                if (pAttributes.length) {
                                    for (var pattv_ in pAttributes) {
                                        if (Object.prototype.hasOwnProperty.call(pAttributes, pattv_)) {
                                            var pAttributesObj_1 = pAttributes[pattv_];
                                            if(pAttributesObj_1.attributeCode == "Pack Quantity"){
                                                var pAttributesValues_1 = pAttributesObj_1["attributeValues"];
                                                var miniprc=[]
                                                for (var ptr_ in pAttributesValues_1) {
                                                    if (Object.prototype.hasOwnProperty.call(pAttributesValues_1, ptr_)) {
                                                        var childProduct = pAttributesValues_1[ptr_];
                                                        if(pAttributesObj_1["attributeValues"][0].optionText == "1"){
                                                            if(miniprc.length == 0){
                                                                miniprc.push(childProduct["childProductId"])
                                                            }
                                                            if(miniprc.indexOf(childProduct["childProductId"]) == -1){
                                                                if(childProduct.optionText === "1"){
                                                                    childProduct.optionText = "1  "
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if(pAttributes != "" && pAttributes != null){
                                for (var h = 0; h < pAttributes.length; h++) {
                                    pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                                }
                            }
                            
                            var pAttObj = {};
                            for(let t=0;t<pAttributes.length;t++){
                                pAttributes[t].attributeId = t
                                var attr_values = pAttributes[t].attributeValues;
                                for(let v=0;v<attr_values.length;v++){
                                    attr_values[v].optionId = t;
                                }
                            }
                            
                            if (pAttributes.length) {
                                // INC.config.configcount = 0
                                for (var k = 0; k < pAttributes.length; k++) {
                                    var pAttributesObj = pAttributes[k];
                                    
                                    var pAttributesValues = pAttributesObj["attributeValues"];
                                    pAttributesObj["attributeCode"] = pAttributesObj["frontEndLabel"];
                                    for (var l = 0; l < pAttributesValues.length; l++) {
                                        let childProduct = pAttributesValues[l];
                                        if (childProduct["childProductId"] == null) {
                                            childProduct["childProductId"] = product["ProductId"];
                                            childProduct["childProductSku"] = product["ProductSku"];
                                            childProduct["childProductName"] = product["ProductName"];
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                            childProduct["childProductPrice"] = product["Price"];
                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["childInternalProductId"] = product["ProductId"]
                                        }
                                        if(childProduct["childProductImageUrl"] == "" || childProduct["childProductImageUrl"] == null){
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                        }
                                        if(childProduct["exclusiveVATPrice"] == null){
                                            if(exclnull == true && childProduct["childProductPrice"] != null){
                                                childProduct["exclusiveVATPrice"] = childProduct["childProductPrice"]
                                                childProduct["exclusiveVATSpecialPrice"] = childProduct["childProductSpecialPrice"]
                                            }else{
                                                childProduct["exclusiveVATPrice"] = product["ExclusiveVATPrice"]
                                                childProduct["exclusiveVATSpecialPrice"] = product["ExclusiveVATSpecialPrice"]
                                            }
                                            
                                        }
                                        if (INC.config.uniqeProduct.indexOf(childProduct["childProductId"]) == -1) {
                                            childProduct["MainprodVariant"] = product.Attributes[0].attributeValues[0].optionText
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["ShortDescription"] = product["ShortDescription"];
                                            childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                            childProduct["childProductPriceMain"] = product["Price"];
                                            childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                            childProduct["childProductNameMain"] = product["ProductName"];
                                            childProduct["childProductUrlMain"] = product["ProductUrl"];
                                            childProduct["mainSKU"] = product["ProductSku"];
                                            childProduct["ProductType"] = product["ProductType"];
                                            childProduct["childCategoryId"] = product["CategoryId"];
                                            childProduct["childCategoryName"] = product["CategoryName"];
    
                                            childProduct["childProductSku"] = product["ProductId"];
                                            childProduct["childCategoryId"] = product["CategoryId"];
                                            childProduct["Field3"] = product["Field3"];
                                            childProduct["Field5"] = product["Field5"];
                                            if (childProduct["childProductField6"] == null) {
                                                childProduct["Field6"] = product["Field6"];
                                            } else {
                                                childProduct["Field6"] = childProduct["childProductField6"]
                                            }
                                            childProduct["childRating"] = product["Rating"];
                                            var productObj = new INC.classes.ProductAttObj(childProduct);
                                            
                                            productObj["bundledProductId"] = pdpProductId;
                                            productObj.mainId = product["ProductId"];
                                            productObj.bundleId = bundleObj.id;
                                            productObj.sku = productObj.id;
                                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                            
                                            productObj.Field1 = product["Field1"]
                                            productObj.GenericField = product["Field3"]
                                            if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product['ProductId'])) {
                                                INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                            }
                                            if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product['ProductId']], productObj['id'])) {
                                                INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                            }
                                            pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
    
                                            for (let pAtt in productObj) {
                                                if (pAtt == "option") {
                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                                        pAttObj["option"] = {}
                                                    }
                                                    
                                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                                    });
                                                    // }
                                                } else {
                                                    pAttObj[pAtt] = productObj[pAtt];
                                                }
                                            }
                                        }
                                    }
                                    
                                }
                            }
                            
                            if (pAttributes.length == 0) {
                                let productObj = new INC.classes.ProductObj(product);
                                productObj["bundleId"] = irbBundleObj["BundleId"];
                                productObj["bundledProductId"] = pdpProductId;
                                productObj.sku = productObj.id;
                                productObj.Field1 = product["Field1"]
                                productObj.GenericField = product["Field3"]
                                if ((INC.dataStore.dataStoreObj != undefined) && (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, productObj['mainId']))) {
                                    INC.dataStore.dataStoreObj[productObj['mainId']] = {};
                                }
                
                                
                                if (INC.dataStore.dataStoreObj != undefined){
                                INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                if (!!window.MSInputMethodContext && !!document.documentMode) {
                                    INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                }else {
                                    INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                }
                            }
                            }
                        }
                    }
                }
            }
        }
    }
    
    if(INC.dataStore.dataStoreObj != undefined){
        if(recommendation == "tickbox"){
            pdptickboxblock()
        }else if(recommendation != "recommendation"){
            setTimeout(function() {
                INC.methods.createPDPBlock("sidebar")
            }, 200)
        }else if(recommendation == "recommendation"){
            setTimeout(function() {
                let recsType = "PDP";
                if(INC.config.pageType == 'productList') {
                    recsType = "PLP";
                }
                INC.methods.createAMBlock(null,recsType,"recommendation")
            },200)
        } 
    }
}
function pdptickboxblock(){
    var el_tick_boxblock = document.querySelector('.inc_pdp_tick_box_block')
    if(el_tick_boxblock != null){
        el_tick_boxblock.parentNode.removeChild(el_tick_boxblock)
    }
    var eltickplacement=document.querySelector('.pdp-price__control-holder')

    var el_tick_box = '<div class="inc_pdp_tick_box_title_block"><div class="inc_pdp_tick_box_title_text_block" style="text-transform: unset;">You also need </div></div><div class="inc_pdp_tick_box_product-list_block"></div>'
    var eltickboxblock = document.createElement('div')
    eltickboxblock.classList.add('inc_pdp_tick_box_block')
    eltickboxblock.innerHTML = el_tick_box
    
    var loadbundles = false
    eltickboxblock.querySelector('.inc_pdp_tick_box_product-list_block').innerHTML = ""
    
    for(var t=0;t<pdptickboxpid.length;t++){
        if(t == 0){
            var tickboxid = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: pdptickboxpid[t] });
            var productBlock =INC.methods.createProductModuleBlock(tickboxid.id, "tickbox", false, eltickboxblock,'tickbox')
            tickboxexcludeprod.push(pdptickboxpid[t])
            loadbundles = true
            if(productBlock.getAttribute('data-id') != "undefined"){
                eltickboxblock.querySelector('.inc_pdp_tick_box_product-list_block').appendChild(productBlock)
            }
        }
    }
    
    if(loadbundles == true){
        if(eltickplacement != null && eltickboxblock.querySelector('.inc_pdp_tick_box_product-list_block .inc_product_showcase_block') != null){
            eltickplacement.insertAdjacentElement('afterend', eltickboxblock);
            // eltickplacement.parentNode.insertBefore(eltickboxblock,eltickplacement)
        }
    }
}
function addtickboxToCart(bundletracjson, type_bundle, clickElement) {
    INC.config.clientbtn =false
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    INC.clientConfig.added_product_sku = []
    var addProductURL = INC.config.addToBasketURL;
    var add_type = "delivery"
    if (type_bundle == "delivery") {
        addProductURL = INC.config.addToBasketURL;
        add_type = "delivery"
    } else {
        addProductURL = INC.config.click_collect_addToBasketURL;
        add_type = "collection"
    }
    var csrf_token="";
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var addProductURL_c_f = INC.config.addToBasketURL;

    var dataStore = INC.dataStore;
    var mainProductId = INC.methods.getProductIdFromWebPage();

    var paddtype0 = "";
    var data0 = {};
    var parame0 = "";
    var prodId0 = "";
    var formData = []
    var count_pr_to_add = 0
    var total_length=Object.keys(dataStore.tickboxProducts);
    Object.keys(dataStore.tickboxProducts).forEach(function(bundleCartProduct) {
        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        var searchParamObjString_c_f = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + dataStore.tickboxProducts[bundleCartProduct];
        // debugger
        if (count_pr_to_add == 0) {
            if (type_bundle == "delivery") {
                data0["CSRFToken"] = csrf_token;
                data0["productCodePost"] = productObj['idAdd'];
                data0["qty"] = dataStore.tickboxProducts[bundleCartProduct];
                data0["postcode"] = '';
                data0["addedForDelivery"] = true;
                parame0 = searchParamObjString_c_f
            } else {
                data0["storeNamePost"] = INC.config.storeId;
                data0["productCodePost"] = productObj['idAdd'];
                data0["hiddenPickupQty"] = dataStore.tickboxProducts[bundleCartProduct];
                parame0 = searchParamObjString_c_f
            }
            prodId0 = productObj['id']
            paddtype0 = productObj.Field6
            formData.push(data0)
        }
        count_pr_to_add++
        if (total_length.length == count_pr_to_add) {
            window.jQuery.ajax({
                type: "POST",
                url: addProductURL,
                data: formData[0],
                error: function(jqXHR, textStatus) {
                    errorLog(prodId0, textStatus)
                },
                success: function(data) {
                    var res_data = data
                    INC.methods.response_callback(res_data,add_type,paddtype0,parame0,addProductURL_c_f, "tickbox")
                    var delay_add = 3000
                    if(add_type != "delivery" && paddtype0 != "CollectOnly"){
                        delay_add = 3000
                    }else{
                        delay_add = 0
                    }
                    setTimeout(function(){
                        window.window.ACC.product.onSuccessAddToCart(res_data)
                        try{
                            updateBasketCounter(res_data.cartData.totalQty);
                        }catch(e){console.log("")}
                            if(res_data.errorMsg){
                                if(res_data.errorMsg.includes('noItemsAdded') && parseFloat(res_data.addedProducts[0].qty) == 0){
                                    let popcart = document.createElement('div')
                                    popcart.innerHTML = res_data.cartPopupHtml
                                    if(add_type != "delivery"){
                                        if(popcart.querySelector('.product-card__bad-quantity') != null){
                                            if (type_bundle == "delivery") {
                                                INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                            }else{
                                                INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                                            }
                                        }
                                        if (INC.clientConfig.OOS.indexOf(productObj['idAdd']) == -1) {
                                            INC.clientConfig.OOS.push(productObj['idAdd'])
                                        }
                                    }else{
                                        if(popcart.querySelector('.product-card__bad-quantity') != null){
                                            if (type_bundle == "delivery") {
                                                INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                            }else{
                                                INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                                            }
                                        }
                                        if (INC.clientConfig.OOS.indexOf(productObj['idAdd']) == -1) {
                                            INC.clientConfig.OOS.push(productObj['idAdd'])
                                        }
                                    }
                                }   
                            }
                        // INC.methods.updateSidebarBlock(add_type, 'tickbox',"client_add_btn");
                    },delay_add);
                }
            });
        }
    });

    setTimeout(function(){
        mainCTASidebar(clickElement, "tickbox", add_type, 'client_add_btn')
        // setTimeout(function(){
        //     INC.methods.updateSidebarBlock(add_type, 'tickbox',"client_add_btn");
        // },1200)
    },1800)
    add_to_cart_tracking_multiple(mainProductId, 'tickbox',bundletracjson)
}
function quantity_dropdown_change(elm) {
    if(elm.options){
        var qtyop = elm.options[elm.selectedIndex].getAttribute("value");
        var qty =  parseInt(qtyop)
        elm.parentNode.parentNode.querySelector('.inc_product_desc_qty_input_text input').value = qty
        var prod_block = elm.parentNode.parentNode.parentNode.parentNode.parentNode
        var sku = prod_block.getAttribute('data-sku');
        prod_block.querySelector('.inc_product_desc_qty_block').classList.remove('active')
        prod_block.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value = qty;
        var elAddTexts = prod_block.querySelector('.inc_product_desc_add_text')
        if ((elAddTexts.innerText == "Added" || elAddTexts.innerText == "Update" || elAddTexts.innerText == INC.config.AddedText || elAddTexts.innerText == INC.config.UpdateText) && prod_block.getAttribute('module_inc') != 'tickbox') {
            INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add");
        }
    }
}



function get_discount_price(p_original_price, p_sale_price) {
    //Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    return parseFloat(+p_original_price - +p_sale_price)
}
function get_discount_price_percentage(p_original_price, p_sale_price) {
    return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
}



function inc_onchange_variant(elattrblock){
    var elmainblock;
    if(elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
        elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }else{
        elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    var sel_varel;
    if(elmainblock.querySelector('.inc_product_modal_block.active') == null){
        sel_varel = elmainblock.querySelector('.inc_product_modal_block')
    }else{
        sel_varel = elmainblock.querySelector('.inc_product_showcase_block')
    }
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode
    
    if(productBlock.querySelector('.close_read_more') != null){
        productBlock.querySelector('.close_read_more').click()
    }
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    
    if(elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]') != null){
        elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]').click()
    }
    if(sel_varel != null){
        var sel_variant = sel_varel.querySelector('.inc_variant_tag')
        if(sel_variant != null){
            var alloptionss = sel_variant.querySelectorAll('option')
            for(let j=0;j<alloptionss.length;j++){
                if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                    alloptionss[j].selected = 'selected'
                    break;
                }
            }
        }
    }
}
function inc_onchange_color_variant(elattrblock){
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    var prod_card_attr_block = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    
    var textsel = ""
    
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_org = elattrblock.options[elattrblock.selectedIndex].getAttribute("data-size");

    if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
        productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.remove('error_inc_message')
    }
    if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
        productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .select_option_inc_block').classList.remove('error_inc_message')
    }
    var sel_variant;
    if(prod_modal_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]') != null){
        prod_modal_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]').click()
        if(prod_modal_attr_block != null){
            sel_variant = prod_modal_attr_block.querySelector('.inc_variant_tag')
            if(sel_variant != null){
                var textselOp = sel_variant.querySelector('option').textContent
                if(attr_text_org.toLocaleLowerCase() == "yes" || attr_text_org.toLocaleLowerCase() == "no"){
                    if(attr_text_org.toLocaleLowerCase() == "yes"){
                        attr_text_org = "Yes"
                    }else if(attr_text_org.toLocaleLowerCase() == "no"){
                        attr_text_org = "No"
                    }
                    textsel = textselOp + " : " + attr_text_org
                }
                let alloptionss = sel_variant.querySelectorAll('option')
                for(let j=0;j<alloptionss.length;j++){
                    if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
    if(textsel == ""){
        textsel = attr_text_org
    }
    if(prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]') != null){
        prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]').click()
        if(prod_card_attr_block != null){
            sel_variant = prod_card_attr_block.querySelector('.inc_variant_tag')
            if(sel_variant != null){
                let alloptionss = sel_variant.querySelectorAll('option')
                for(let j=0;j<alloptionss.length;j++){
                    if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
    if(productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_bundle_product_list_main_block') == true || productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == true || productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_tick_box_product-list_block') == true){
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text.config') != null){
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_variant_new1') == null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text.config').innerHTML = textsel.replace("Please select:",'')
                productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_block').classList.add('selected_inc')
            }
        }
    }
}

function checkUionorientation(){
    var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
    if(inc_pdp_block_rem != null){
        inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
    }
    INC.config.product_seq = []
    setTimeout(function(){
        var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
        if(inc_pdp_block_rem != null){
            inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
        }
        var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
        if(sidebar_rem != null){
            sidebar_rem.parentNode.removeChild(sidebar_rem);
        }
        var over_rem = document.querySelector(".inc_sidebar_overlay_block");
        if(over_rem != null){
            over_rem.parentNode.removeChild(over_rem);
        }
        var allmobcss = document.querySelectorAll('#inc_mob_css')
        for(let s=0;s<allmobcss.length;s++){
            var remm = allmobcss[s]
            if(remm != undefined){
                remm.parentNode.removeChild(remm);
            }
        }
        var alldeskcss = document.querySelectorAll('#inc_desktop_css')
        for(let d=0;d<alldeskcss.length;d++){
            var remd = alldeskcss[d]
            if(remd != undefined){
                remd.parentNode.removeChild(remd);
            }
        }
        if(document.querySelector('#inc_mob_css') != null){
            var remcss = document.querySelector('#inc_mob_css')
            if(remcss != null){
                remcss.parentNode.removeChild(remcss);
            }
        }
        if(document.querySelector('#inc_desktop_css') != null){
            var remcjs = document.querySelector('#inc_desktop_css')
            if(remcjs != null){
                remcjs.parentNode.removeChild(remcjs);
            }
        }
        if(window.innerWidth < 820){
            init_fun_flag=true;
            init_irb_flag=true;
            INC.config.dupDataObjectProducts = [];
            setTimeout(function(){
                INC.init();
            },3000)
        } else{
            init_fun_flag=true;
            init_irb_flag=true;
            INC.config.dupDataObjectProducts = [];
            setTimeout(function(){
                INC.init();
            },3000)
        }
    },300)
}
setTimeout(function() {
    window.addEventListener("orientationchange", function() {
        checkUionorientation()
    }, {
        passive: true
    });
    if(typeof($) != "undefined"){
        window.$(window).resize(function() {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
            
            setTimeout(function(){
                if(INC.config.deviceType == 'mobile' && window.innerWidth > 820){
                    checkUionorientation()
                }
            },1000)
        });
        window.$(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var inc_div = document.querySelector(".inc_pdp_block");
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                if (document.querySelector('body.tp-app') != null) {
                    document.querySelector('body').classList.add('tp-app')
                }
            }
            if (document.querySelector('.inc_pdp_block') != null) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    var width_min = 550
                    var widthplus = 30;
                    if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                        width_min = 550
                        widthplus = 30;
                    } else {
                        width_min = 400
                        widthplus = 300;
                    }

                    if (window.innerWidth > 500) {
                        width_min = 200
                        widthplus = 450
                    }

                    if (window.innerWidth < 600 && onloadpdp == true) {
                        if (y_scroll_pos >= inc_div.offsetTop - width_min && y_scroll_pos <= inc_div.offsetTop + widthplus) {
                            if (document.querySelector('.inc_pdp_block').classList.contains('.inc_sticky_add_to_cart') == false) {
                                document.querySelector('.inc_pdp_block').classList.add('inc_sticky_add_to_cart');
                                document.querySelector('body').classList.add('inc_sticky_btn');
                            }

                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').classList.remove('inc_sticky_add_to_cart');
                                document.querySelector('body').classList.remove('inc_sticky_btn');
                            }
                        }
                    }
                    // position = scroll;
                }
            }
        });

        var lastY
        window.$(document).bind('touchstart', function(e) {
            lastY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            
        });
        window.$(document).bind('touchmove mousemove', function(e) {
            var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            if (Math.abs(currentY - lastY) < 15) {
                return;
            }


            setTimeout(function() {
                if(window.innerWidth < 820){
                    if (document.querySelector('body.tp-app') != null) {
                        if (document.querySelector('.header-logo.header__top-line.header-top-line-hide') == null) {
                            document.querySelector('body').classList.remove('inc_down_scrolls')
                            document.querySelector('body').classList.remove('inc_up_scrolls')
                            document.querySelector('body').classList.add('inc_up_scrolls')
                        } else {
                            if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_product_modal_block.active') == null) {
                                document.querySelector('body').classList.remove('inc_up_scrolls')
                                document.querySelector('body').classList.add('inc_down_scrolls')
                            }
                        }
                    }
                }
            }, 300)
        });
    }
}, 2000);

function errorLog(prdid,errorMessage, fromSidebar){
    var errorObj = {};
    var product_id = prdid;
    var feed_id = 117
    
    var source = "";
    if (document.querySelector('body.pageType-ProductPage') != null) source = "100";
    if (document.querySelector('body.page-responsiveCartPage') != null) source = "103";
    if (document.querySelector('body.page_basket') != null) source = "103";
    if (document.querySelector('.inc_sidebar_modal_block.active') != null) source = "107"

    if (fromSidebar !== undefined) {
        source = "107"
    }
    errorObj.feedId = feed_id
    errorObj.productId = product_id
    errorObj.source = source
    errorObj.message = errorMessage.toString()
    errorObj.stackTrace = navigator.userAgent 

    var data = {
        "eventData": Base64.encode(JSON.stringify(errorObj))
    }
    window.jQuery.ajax({
        type: "POST",
        url: "https://optimizedby.increasingly.co/AddError",
        headers: {"content-type": "application/json; charset=utf-8"},
        data: JSON.stringify(data),
        error: function () {

        },
        success: function () {

        }
    });
}
function incPriceMismatch(active_price, special_price,active_price_ex, special_price_ex, product_id) {
    let data = {}
    let priceMismatchObj = {}
    priceMismatchObj.token = INC.config.clientToken;
    priceMismatchObj.product_id = product_id ? product_id : INC.methods.getProductIdFromWebPage()
    var clientPrice = null;
    var clientSpPrice = null;
    if (document.querySelector('.pdp-price .pdp-price__new-price') != null) {
        if (document.querySelector('.pdp-price .pdp-price__new-price').innerText.replace(',', '').split('£')[1] != null) {
            clientSpPrice = document.querySelector('.pdp-price .pdp-price__new-price').innerText.split('£')[1].trim()
            clientSpPrice = clientSpPrice.replace(',', '')
        }
    }
    if (document.querySelector('.pdp-price .pdp-price__old-price') != null) {
        if (document.querySelector('.pdp-price .pdp-price__old-price').innerText.replace(',', '').split('£')[1] != null) {
            clientPrice = document.querySelector('.pdp-price .pdp-price__old-price').innerText.replace(',', '').split('£')[1].trim()
            clientPrice = clientPrice.replace(',', '')
        }

    }
    if(clientPrice == null && clientSpPrice != null){
        clientPrice = clientSpPrice
        clientSpPrice = null
    }
    var clientPriceExc = null;
    var clientSpPriceExc = null;
    if(document.querySelector('.pdp-price .excluding-vat .pdp-price__new-price') != null){
        clientPriceExc = document.querySelector('.pdp-price .excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        if(document.querySelector('.pdp-price-container .excluding-vat .pdp-price__old-price') != null){
            clientPriceExc = document.querySelector('.pdp-price-container .excluding-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
            clientSpPriceExc = document.querySelector('.pdp-price .excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        }
    }

    if(document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price') != null){
        clientPrice=document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        if(document.querySelector('.pdp-price-container .including-vat .pdp-price__old-price') != null){
            clientPrice = document.querySelector('.pdp-price-container .including-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
            clientSpPrice=document.querySelector('.pdp-price-container .including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        }else{
            clientSpPrice = null
        }
    }
   
    //product_price - old_product_price
    //special_price - old_special_price
    //exc_vat_price - old_exc_vat_price
    //exc_vat_special_price - old_exc_vat_special_price
    let final_product_price = clientPrice
    let final_special_price = clientSpPrice
    let final_product_price_ex = clientPriceExc
    let final_special_price_ex = clientSpPriceExc

    let final_old_product_price = null;
    let final_old_client_special_price = null;
    let final_old_product_price_ex = null;
    let final_old_client_special_price_ex = null;
    
    if(special_price != null){
        if(Number(active_price) > Number(special_price)){
            final_old_product_price = parseFloat(active_price).toFixed(2)
            final_old_client_special_price = parseFloat(special_price) == 0 ? null : parseFloat(special_price)
        }else{
            if(special_price != null){
                final_old_product_price =  parseFloat(special_price) == 0 ? null : parseFloat(special_price)
            }
            final_old_client_special_price =parseFloat(active_price)
        }
    }else{
        final_old_product_price = parseFloat(active_price)
        if(special_price != null){
            final_old_client_special_price = parseFloat(special_price) == 0 ? null : parseFloat(special_price)
        }
    }
    if(special_price_ex != null){
        if(Number(active_price) > Number(special_price_ex)){
            final_old_product_price_ex = parseFloat(active_price_ex)
            if(special_price_ex != null){
                final_old_client_special_price_ex = parseFloat(special_price_ex) == 0 ? null : parseFloat(special_price_ex)
            }
        }else{
            final_old_product_price_ex =  parseFloat(special_price_ex) == 0 ? null : parseFloat(special_price_ex)
            final_old_client_special_price_ex =parseFloat(active_price_ex)
        }
    }else{
        final_old_product_price_ex = parseFloat(active_price_ex)
        if(special_price_ex != null){
            final_old_client_special_price_ex = parseFloat(special_price_ex) == 0 ? null : parseFloat(special_price_ex)
        }
    }
    //  
    if(final_product_price != null){
        priceMismatchObj.product_price = final_product_price.toString()
    }else{
        priceMismatchObj.product_price = final_product_price
    }
    
    priceMismatchObj.special_price = final_special_price ? final_special_price.toString() : final_special_price

    priceMismatchObj.old_product_price = (final_old_product_price).toString()
    priceMismatchObj.old_special_price = final_old_client_special_price ? (final_old_client_special_price).toString() : null

    if(document.querySelector('.switch.switch-vat') != null){
        priceMismatchObj.price_type = null
        if(final_product_price_ex != null){
            priceMismatchObj.exc_vat_price = final_product_price_ex.toString()
        }else{
            priceMismatchObj.exc_vat_price = final_product_price_ex
        }
        
        priceMismatchObj.exc_vat_special_price = final_special_price_ex ? final_special_price_ex.toString() : final_special_price_ex
        priceMismatchObj.old_exc_vat_price = (final_old_product_price_ex).toString()
        priceMismatchObj.old_exc_vat_special_price = final_old_client_special_price_ex ? (final_old_client_special_price_ex).toString() : null
    }else{
        priceMismatchObj.price_type = "IncVAT"
    }
    data = {
        "eventData": btoa(JSON.stringify(priceMismatchObj))
    }

    
    let mismatch = false
    if(final_special_price != null){
        if(parseInt(final_old_client_special_price) != null){
            if(parseFloat(final_special_price).toFixed(2) != parseFloat(final_old_client_special_price).toFixed(2)){
                mismatch = true
            }
        }else if(parseFloat(final_special_price).toFixed(2) != parseFloat(final_product_price).toFixed(2)){
            mismatch = true
        }
    }else if(final_old_client_special_price != null){
        if(parseFloat(final_product_price).toFixed(2) != parseFloat(final_old_client_special_price).toFixed(2)){
            mismatch = true
        }
    }else{
        if(parseFloat(final_product_price).toFixed(2) != parseFloat(final_old_product_price).toFixed(2)){
            mismatch = true
        }
    }
    if(document.querySelector('.switch.switch-vat') != null){
        mismatch = false
        if(document.querySelector('.switch.switch-vat input:checked') != null || document.querySelector('.including-vat.d-none') != null){
            //exc price
            if(final_special_price_ex != null){
                if(parseFloat(final_old_client_special_price_ex).toFixed(2) != null){
                    if(parseFloat(final_special_price_ex).toFixed(2) != parseFloat(final_old_client_special_price_ex).toFixed(2)){
                        mismatch = true
                    }
                }else if(parseFloat(final_special_price_ex).toFixed(2) != parseFloat(final_product_price_ex).toFixed(2)){
                    mismatch = true
                }
            }else if(final_old_client_special_price_ex != null){
                if(parseFloat(final_product_price_ex).toFixed(2) != parseFloat(final_old_client_special_price_ex).toFixed(2)){
                    mismatch = true
                }
            }else{
                if(parseFloat(final_product_price_ex).toFixed(2) != parseFloat(final_old_product_price_ex).toFixed(2)){
                    mismatch = true
                }
            }
        }else{
            //inc vat price
            if(final_special_price != null){
                if(parseFloat(final_old_client_special_price).toFixed(2) != null){
                    if(parseFloat(final_special_price).toFixed(2) != parseFloat(final_old_client_special_price).toFixed(2)){
                        mismatch = true
                    }
                }else if(parseFloat(final_special_price).toFixed(2) != parseFloat(final_product_price).toFixed(2)){
                    mismatch = true
                }
            }else if(final_old_client_special_price != null){
                if(parseFloat(final_product_price).toFixed(2) != parseFloat(final_old_client_special_price).toFixed(2)){
                    mismatch = true
                }
            }else{
                if(parseFloat(final_product_price).toFixed(2) != parseFloat(final_old_product_price).toFixed(2)){
                    mismatch = true
                }
            }
        }
    }
    if (mismatch && final_product_price != null && priceMismatchObj.product_price != ':"') {
        if(clientPrice.indexOf(':') == -1){
            // var formData1 = new FormData();
            // formData1.append("EmailId", "tech-leads@increasingly.com");
            // formData1.append("Subject", 'price data Wickes production');
            // formData1.append("Message", JSON.stringify(priceMismatchObj) + "url - " + window.location.href + "device" + window.navigator.userAgent);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
            // xhr.send(formData1);
            window.window.jQuery.ajax({
                type: "POST",
                url: "https://gather.increasingly.com/ProductPriceDetails",
                data: JSON.stringify(data),
                dataType: 'json',
                headers: {
                    "content-type": "application/json; charset=utf-8"
                },
                error: function () {
                    // console.log('priceMismatched error - ' + jqXHR)
                },
                success: function () {
                    // console.log('priceMismatched - ' + JSON.stringify(result))
                }
            });
            return true
        }
    } else {
        return false
    }
}

function oosproduct(prdid){
    var format_json_data;
    var product_id = prdid;
    var qty = 0
    format_json_data = JSON.stringify({ 
        "token": INC.config.clientToken,
        "product_id": product_id,
        "quantity":qty,
    });

    if(product_id != null){
        let data = {
            "eventData": Base64.encode(format_json_data)
        };

        var p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", p_url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    if (xhr.responseText != "" && xhr.responseText != null) { 
                        // console.log("")
                    } 
                }
            }
        };
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
}
function crosscategoryprodcount(){
    var crosprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
    if(document.querySelector('.inc_sidebar_modal_block') != null){
        document.querySelector('.inc_sidebar_modal_block').setAttribute('prodcount',crosprd)
    }
}
// TODO: update
// Could you please treat all inserted code as pseudocode, because it was hard to test it remotely?
function updateBasketCounter(cartQty) {
    if(document.querySelector(".basket-total-items") != null && cartQty != undefined){
        document.querySelector(".basket-total-items").innerText = cartQty;
    }
    if(document.querySelectorAll('.header-minicart .header-minicart__counter')[1] != undefined) {
        document.querySelectorAll('.header-minicart .header-minicart__counter')[1].innerText = cartQty;
    }
}

function minicartQtyUpdate(result_datas, qty_ad) {
    if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
        let added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
        let qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
        if(added_elment != null){
            if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
            }
        }
        for (let q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
            if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                INC.clientConfig.added_product_sku[q].qtys = qtysub
                break;
            }
        }
    }
}

if (window.innerWidth < 980){
    // eslint-disable-next-line no-inner-declarations
    function checkScrollDirection() {
        if( inc_isOnScreen_page(window.jQuery( '.inc_pdp_block'))  && is_visible_elem_counter < 1){
            var data = {
                "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                "vid": INC.config.ivid,
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data));
            is_visible_elem_counter++;
        }
    }
    var scrollableElement = document.body;
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    document.addEventListener("touchmove", checkScrollDirection, false);
} else {
    window.onscroll = function () { execute_import_tracking(); };
}

function inc_isOnScreen_page(elem) {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        let el = document.querySelector(".inc_pdp_block")
        if(el != null){
            let top = el.offsetTop;
            let left = el.offsetLeft;
            let width = el.offsetWidth;
            let height = el.offsetHeight;
            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }
            return (top < (window.pageYOffset + window.innerHeight + 2000) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
        }
    } else {
        if( elem.length == 0 ) {
            return;
        }
        let $window = window.jQuery(window)
        let viewport_top = $window.scrollTop()
        let viewport_height = $window.height()
        let viewport_bottom = viewport_top + viewport_height
        let $elem = window.jQuery(elem)
        let top = $elem.offset().top
        let height = $elem.height()
        let bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
    
}
function execute_import_tracking() {
    if (document.querySelector(".inc_pdp_block") != null || document.querySelector(".inc_pdp_block") != undefined) {
        var el = document.querySelector(".inc_pdp_block");
        var a = element_in_viewport(el);
    }
    if (a == true && is_visible_elem_counter < 1) {
        var data = {
            "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
            "vid": INC.config.ivid,
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));
        is_visible_elem_counter++;
    }
}
function element_in_viewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
}

var cssht='.inc_excvat_show .inc_product_desc_price_active_text.incvat_{display:none !important;}.inc_incvat_show .inc_product_desc_price_active_text_exc{display:none !important;}.inc_incvat_show .inc_product_desc_price_regular_text_exc{display:none !important;}.inc_excvat_show .inc_product_desc_price_regular_text.incvat_{display:none !important;}.inc_excvat_show .inc_pdp_bundle_cart_added_product_price_text.incvat_{display:none !important;}.inc_incvat_show .inc_pdp_bundle_cart_added_product_price_text_exc{display:none !important;}.inc_excvat_show .inc_pdp_bundle_cart_summary_price_active_text.incvat_{display:none !important;}.inc_incvat_show .inc_pdp_bundle_cart_summary_price_active_text_exc{display:none !important;}.inc_excvat_show .inc_pdp_bundle_cart_summary_price_regular_text.incvat_{display:none !important;}.inc_incvat_show .inc_pdp_bundle_cart_summary_price_regular_text_exc{display:none !important;}.inc_excvat_show .inc_cart_added_product_desc_subtotal_price_active_text.incvat_{display:none !important;}.inc_incvat_show .inc_cart_added_product_desc_subtotal_price_active_text_exc{display:none !important;}.inc_excvat_show .inc_cart_added_product_desc_subtotal_price_regular_text.incvat_{display:none !important;}.inc_incvat_show .inc_cart_added_product_desc_subtotal_price_regular_text_exc{display:none !important;}.inc_excvat_show .inc_cart_added_product_desc_price_active_text.incvat_{display:none !important;}.inc_incvat_show .inc_cart_added_product_desc_price_active_text_exc{display:none !important;}.inc_excvat_show .inc_cart_added_product_desc_price_regular_text.incvat_{display:none !important;}.inc_incvat_show .inc_cart_added_product_desc_price_regular_text_exc{display:none !important;}'
var css_inc = document.createElement('style'); 
css_inc.type = 'text/css'; 
css_inc.innerHTML=cssht
document.getElementsByTagName("head")[0].appendChild(css_inc); 


