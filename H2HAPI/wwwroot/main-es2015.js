(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/dispalycard/dispalycard.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/dispalycard/dispalycard.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"card mb-4\">\n    <div class=\"card-img-wrapper\">\n   \n    <img class= \"card-img-top\" src=\"{{user.photoUrl || '../../../../../../assets/photo/user.png'}}\" alt=\"{{user.knownAs}}\">\n<ul class=\"list-inline member-icons animate text-center\">\n    <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/friends',user.id]\" ><i class=\"fa fa-user\"></i></button> </li>\n    <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\" ><i class=\"fa fa-heart\"></i></button> </li>\n    <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/friends',user.id]\" [queryParams]=\"{tab: 3}\" ><i class=\"fa fa-envelope\"></i></button> </li>\n</ul>     \n</div>\n     <div class=\"card-body p-1\">\n         <h6 class=\"card-title text-center mb-1\" ><i class=\"fa fa-user\"></i>\n            {{user.knownAs}}, {{user.age}}\n         </h6>\n        <p class=\"card-text-muted text-center\">{{user.city}}</p>\n     </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/editprofile/editprofile.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/editprofile/editprofile.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <h1>Your Profie</h1>\n        </div>\n        <div class=\"col-sm-8\">\n            <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\n                <p><strong> You have made changes. Any unsaved changes will be lost!!!</strong> </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n            <div class=\"card\">\n            \n                <img class=\"card-img-top img-thumbnail\" src=\"{{photoUrl}}\" alt=\"{{user?.knownAs}}\">\n                <div class=\"card-body\">\n                    <div>\n                        <strong>Location:</strong>\n                        <p>{{user?.city}}, {{user?.country}}</p>\n                    </div>\n                    <div>\n                        <strong> Age: </strong>\n                        <h6>{{user.age}}</h6>\n                    </div>\n                    <div>\n                        <strong> Memeber Since: </strong>\n                        <p>{{user.created | date}}</p>\n                    </div>\n                    <div>\n                        <strong> Last Active: </strong>\n                        <p>{{user.lastActive | timeAgo}}</p>\n                    </div>\n               \n                </div>\n                <div class=\"card-footer\">\n                    <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save\n                        Changes</button>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <div class=\"tab-panel\">\n\n                <tabset class=\"member-tabset\">\n                    <tab heading=\"Edit Profile\">\n                        <form #editForm=\"ngForm\" (ngSubmit)=\"updateUser()\" id=\"editForm\">\n                            <h4>Description:</h4>\n                            <textarea name=\"introduction\" rows=\"4\" class=\"form-control\"\n                                [(ngModel)]=\"user.introduction\"></textarea>\n\n                            <h4>Looking For</h4>\n                            <textarea name=\"lookingFor\" rows=\"4\" class=\"form-control\"\n                                [(ngModel)]=\"user.lookingFor\"></textarea>\n                            <h4>Interests</h4>\n                            <textarea name=\"interest\" rows=\"4\" class=\"form-control\"\n                                [(ngModel)]=\"user.interest\"></textarea>\n                            <h4>Location Details:</h4>\n                            <div class=\"form-inline\">\n                                <label for=\"city\">City</label>\n                                <input type=\"text\" class=\"from-control\" name=\"city\" [(ngModel)]=\"user.city\">\n                                <label for=\"country\">Country</label>\n                                <input type=\"text\" class=\"from-control\" name=\"country\" [(ngModel)]=\"user.country\">\n\n                            </div>\n                        </form>\n\n                    </tab>\n\n                    <tab heading=\"Edit Photo\">\n                        \n                        <app-photoeditor [photos]=\"user.photos\" (getMemberPhotoChange)= \"updateMainPhoto($event)\"></app-photoeditor>\n                    </tab>\n                    <tab heading=\"Delete Account\">\n                        <button (click)=\"deleteUser()\">Confirm Delete</button>\n                        \n                    </tab>\n\n\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/friends/friends.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/friends/friends.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"text-center mt-3\">\n        <h2>Your matches - {{pagination.totalItems}} found</h2>\n</div>\n\n<div class=\"container mt-3\">\n<form class=\"form-inline\" #form= \"ngForm\" (ngSubmit)=\"loaduser()\" novalidate>\n        <div class=\"form-group\">\n                <label for=\"minAge\">Age From</label>\n                <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"minAge\" [(ngModel)]=\"userParams.minAge\" name=\"minAge\">\n        </div>\n\n        <div class=\"form-group px-2\">\n                <label for=\"maxAge\">Age To</label>\n                <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"maxAge\" [(ngModel)]=\"userParams.maxAge\" name=\"maxAge\">\n        </div>\n\n        <div class=\"form-group px-2\">\n                <label for=\"gender\">Show: </label>\n                <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"gender\" [(ngModel)]=\"userParams.gender\" name=\"gender\">\n                       <option value=\"male\" >\n                            Male \n                       </option>\n                <option value=\"female\" >\n                        Female\n                </option>\n                </select>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n        <button type=\"button\" class=\"btn btn-info\" (click) =\"resetFilter()\" style=\"margin-left:10px\">Reset Filter</button>\n<div class=\"col\">\n        <div class=\"btn-group float-right\">\n                <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary mr-2\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loaduser()\" btnRadio=\"lastActive\">Last Active</button>\n                <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loaduser()\" btnRadio=\"created\">Newest Members</button>\n        </div>\n</div>\n</form>\n<br>\n\n <div class=\"row\">\n   \n         <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n<app-dispalycard [user]=\"user\"></app-dispalycard>\n\n</div>\n</div>\n</div>\n  <div class=\"d-flex justify-content-center\">\n        <pagination [boundaryLinks]=\"true\"\n        [totalItems] = \"pagination.totalItems\" \n        [itemsPerPage]=\"pagination.itemsPerPage\"\n        [(ngModel)]=\"pagination.currentPage\" \n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n\n</div>  \n<!-- <div>\n        <pagination [boundaryLinks]=\"true\" \n        [totalItems]=\"77\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n                lastText=\"&raquo;\">\n        \n        </pagination>\n</div>  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/makeafriend/makeafriend.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/makeafriend/makeafriend.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mt-3\">\n    <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve Liked'}} : {{pagination.totalItems}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n\n    <div class=\"row\">\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary mr-5\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loaduser()\">Members who\n                like me</button>\n            <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loaduser()\">Members who\n                I like</button>\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n        <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\n            <app-dispalycard [user]=\"user\"></app-dispalycard>\n        </div>\n    </div>\n\n\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\n        [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n\n    </pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/membersdetails/membersdetails.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/membersdetails/membersdetails.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\n<div class=\"row\">\n    <div class=\"col-sm-4\">\n        <div class=\"card\">\n    \n           <img class = \"card-img-top img-thumbnail\" src=\"{{user.photoUrl || '../../../../../../assets/photo/user.png\" alt=\"{{user?.knownAs}}\">\n    <div class=\"card-body\">\n        <div>\n            <strong>Location:</strong>\n        <p>{{user?.city}}, {{user?.country}}</p>\n        </div>\n        <div>\n            <strong> Age: </strong>\n                <h6>{{user.age}}</h6>\n        </div>\n            <div>\n                <strong> Memeber Since: </strong>\n                <p>{{user.created | date: 'mediumDate'}}</p>\n            </div>\n                <div>\n                    <strong> Last Active: </strong>\n                    <p>{{user.lastActive | timeAgo}}</p>\n                </div>\n           \n    </div> \n    <div class=\"card-footer\">\n        <div class=\"btn-group d-flex\">\n            <button class=\"btn btn-primary w-100\"> Like </button>\n            <button class=\"btn btn-success w-100\" (click) =\"selectTab(3)\"> Message </button>\n        </div>\n    </div>   \n    </div>\n    </div>\n    <div class=\"col-sm-8\">\n<div class=\"tab-panel\">\n\n    <tabset class=\"member-tabset\" #membersTabs>\n    <tab heading =\"About {{user?.knownAs}}\">\n        <h4>Description:</h4>\n    <p>{{user?.introduction}}</p>\n    <h4>Looking For</h4>\n    <p>{{user?.lookingFor}}</p>\n    </tab>\n    <tab heading =\"Interest\">\n        <h4>Interests</h4>\n    <p>{{user?.interest}}</p>\n\n    </tab>\n    <tab heading=\"Photos\">\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    </tab>\n    <tab heading=\"Message\">\n    \n    <app-messagethreadad [recipientId]=\"user.id\"></app-messagethreadad>\n    </tab>\n    </tabset>\n</div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/messagethreadad/messagethreadad.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/messagethreadad/messagethreadad.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div *ngIf=\"messages?.length ===0\">\n<p>No Message yet.......... Please use the message box bellow ..</p> \n        </div>\n<ul class=\"chat\">\n    <li *ngFor=\"let message of messages\">\n<div *ngIf=\"message.senderId == recipientId\">\n<span class = \"chat-img float-left\">\n<img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class =\"img-circle rounded-circle mr-1\">\n</span>\n<div class=\"chat-body\">\n    <div class=\"header\">\n            <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                <span *ngIf=\"!message.isRead\" class = \"text-danger\">(unread)</span>\n                <span *ngIf=\"message.isRead\" class =\"text-success\">(Read {{message.dateRead | timeAgo}})</span>\n            </small>\n    <strong class= \"primary-front float-left\">{{message.senderKnownAs}}</strong>\n\n    </div>\n<p> {{message.content}}</p> \n</div>\n</div>\n<!-- to me-->\n<div *ngIf=\"message.senderId != recipientId\">\n    <span class=\"chat-img float-right\">\n        <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"img-circle rounded-circle mr-1\">\n    </span>\n    <div class=\"chat-body\">\n        <div class=\"header\">\n            <strong class=\"primary-front float-right\">{{message.senderKnownAs}}</strong>\n            <small class=\"text-muted \">\n                <span class=\"fa fa-clock-o\">\n                    {{message.messageSent | timeAgo}}\n                </span>\n            </small>\n        </div>\n        <p> {{message.content}}</p>\n    </div>\n</div>\n    </li>\n\n</ul>\n</div>\n<div class=\"card-footer\">\n<form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n<div class=\"input-group\">\n<input type=\"text\" \n[(ngModel)]=\"newMessage.content\" name=\"content\" required\nclass=\"form-control input-sm\" placeholder=\"Send a private message.\">  \n<div class=\"input-group-append\">\n    <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\">Send</button>\n</div> \n</div>\n</form>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/photoeditor/photoeditor.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/photoeditor/photoeditor.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n    <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n        <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1\" alt=\"\">\n        <div class=\"text-center\">\n            <button type=\"button\" class=\"btn btn-sm mr-1\" (click)=\"setMainPhoto(photo)\" \n            [ngClass]=\"photo.isMain ? 'btn-success active' :'btn-secondary'\"           \n             [disabled]=\"photo.isMain\"> Main</button>\n            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deletePhoto(photo.id)\" [disabled] = \"photo.isMain\"><i class=\"fa fa-trash-o\"></i> </button>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3\">\n\n    <div class=\"col-md-3\">\n\n        <h3>Add Phots</h3>\n\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" \n        (fileOver)=\"fileOverBase($event)\"\n            [uploader]=\"uploader\" \n            class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n            <i class=\"fa fa-upload fa-3x\"></i>\n            Drop Photo Here\n        </div>\n\n\n\n        Multiple\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple /><br />\n\n        Single\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n        <h3>Upload queue</h3>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\n                </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress mb-4\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\"\n                [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"fa fa-upload\"></span> Upload \n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\"\n                [disabled]=\"!uploader.isUploading\">\n                <span class=\"fa fa-ban\"></span> Cancel \n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\"\n                [disabled]=\"!uploader.queue.length\">\n                <span class=\"fa fa-trash\"></span> Remove \n            </button>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/register/register.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/register/register.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup] =\"registerForm\" (ngSubmit)=\"register()\" class=\"col-md-6 offset-md-3\"> \n<h2 class=\"text-center text-primary\"> Sign Up</h2>\n<hr>\n<div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\n    <label class=\"radio-inline\">\n        <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline ml-3\">\n        <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"gender\">Female\n    </label>\n</div>\n<div class=\"form-group\">\n    <input type=\"text\" [ngClass]=\"{'is-invalid':registerForm.get('username').errors \n&& registerForm.get('username').touched}\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\n    <div class=\"invalid-feedback\">Please Provide the User Name: </div>\n</div>\n\n<div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('knownAs').errors \n    && registerForm.get('knownAs').touched}\" class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\n    <div class=\"invalid-feedback\"\n        *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">Known as is\n        required</div>\n</div>\n<div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\"\n        class=\"form-control\" placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" type=\"text\" bsDatepicker\n        [bsConfig]=\"bsConfig\">\n    <div class=\"invalid-feedback\"\n        *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of\n        Birth is required</div>\n</div>\n<div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\"\n        class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n    <div class=\"invalid-feedback\"\n        *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</div>\n</div>\n\n<div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\"\n        class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n    <div class=\"invalid-feedback\"\n        *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is\n        required</div>\n</div>\n\n<div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid':registerForm.get('password').errors \n    && registerForm.get('password').touched}\" formControlName=\"password\" placeholder=\"Password\">\n\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required')\n    && registerForm.get('password').touched\">Please Provide the Password: </div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') \n    && registerForm.get('password').touched\">Password must have 4 character. </div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') \n        && registerForm.get('password').touched\">Password must be 4 to 10 characters. </div>\n</div>\n\n<div class=\"form-group\">\n\n    <input class=\"form-control\" [ngClass]=\"{'is-invalid':registerForm.get('confirmPassword').errors \n    && registerForm.get('confirmPassword').touched \n    || registerForm.get('confirmPassword').touched \n    && registerForm.hasError('mismatch')}\" formControlName=\"confirmPassword\" type=\"password\"\n        placeholder=\"Confirm Password\">\n    <div class=\"invalid-feedback\">Please provide the Confirm Password </div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') \n        && registerForm.get('confirmPassword').touched\">Please Provide the Confirm\n        Password: </div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.hasError('mismatch') \n            && registerForm.get('confirmPassword').touched\">\n        Confirm password must be same\n    </div>\n</div>\n<div class=\"form-group text-center\">\n    <button class=\"btn btn-success mr-2\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n</div>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/buyandsale/buyandsale.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/buyandsale/buyandsale.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br>\n<br>\n<p>buyandsale works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"main-footer\" style=\"background-color:sienna\">\n    <div class=\"footer-content\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\" col-xl-2 col-xl-2 col-md-2 col-6  \">\n                    <div class=\"footer-col\">\n                        <h4 class=\"footer-title\">About us</h4>\n                        <ul class=\"list-unstyled footer-nav\">\n                            <li><a href=\"#\">About Company</a></li>\n                            <li><a href=\"#\">For Business</a></li>\n                            <li><a href=\"#\">Our Partners</a></li>\n                            <li><a href=\"#\">Press Contact</a></li>\n                            <li><a href=\"#\">Careers</a></li>\n                            <li><a href=\"#\">Events</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\" col-xl-2 col-xl-2 col-md-2 col-6  \">\n                    <div class=\"footer-col\">\n                        <h4 class=\"footer-title\">Help & Contact</h4>\n                        <ul class=\"list-unstyled footer-nav\">\n\n\n\n                            <li><a href=\"#\">Posting Rules\n                                </a></li>\n\n                            <li><a href=\"#\">\n                                    Promote Your Ad\n                                </a></li>\n\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\" col-xl-2 col-xl-2 col-md-2 col-6  \">\n                    <div class=\"footer-col\">\n                        <h4 class=\"footer-title\">More From Us</h4>\n                        <ul class=\"list-unstyled footer-nav\">\n                            <li><a href=\"faq.html\">FAQ\n                                </a></li>\n                            <li><a href=\"blogs.html\">Blog\n                                </a></li>\n                            <li><a href=\"#\">\n                                    Popular Searches\n                                </a></li>\n                            <li><a href=\"#\"> Site Map\n                                </a></li>\n                            <li><a href=\"#\"> Customer Reviews\n                                </a></li>\n\n\n                        </ul>\n                    </div>\n                </div>\n                <div class=\" col-xl-2 col-xl-2 col-md-2 col-6  \">\n                    <div class=\"footer-col\">\n                        <h4 class=\"footer-title\">Account</h4>\n                        <ul class=\"list-unstyled footer-nav\">\n                            <li><a href=\"login.html\">Login\n                                </a></li>\n                            <li><a href=\"signup.html\">Register\n                                </a></li>\n                            <li><a href=\"seller-profile.html\"> Profile\n                                </a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\" col-xl-4 col-xl-4 col-md-4 col-12\">\n                    <div class=\"footer-col row\">\n\n                        <div class=\"col-sm-12 col-xs-6 col-xxs-12 no-padding-lg\">\n                            <div class=\"mobile-app-content\">\n                                <h4 class=\"footer-title\">Mobile Apps Coming Soon</h4>\n                                <div class=\"row \">\n                                    <div class=\"col-6  \">\n                                        <a class=\"app-icon\" target=\"_blank\" href=\"https://itunes.apple.com/\">\n                                            <span class=\"hide-visually\">iOS app</span>\n                                            <img src=\"../../../assets/photo/ios.jpeg\"\n                                                alt=\"Available on the App Store\" style=\"width: 50px; height: 30px;\">\n                                        </a>\n                                    </div>\n                                    <div class=\"col-6  \">\n                                        <a class=\"app-icon\" target=\"_blank\" href=\"https://play.google.com/store/\">\n                                            <span class=\"hide-visually\">Android App</span>\n                                            <img src=\"../../../assets/photo/an.gif\"\n                                                alt=\"Available on the App Store\" style=\"width: 50px; height: 30px;\">\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12 col-xs-6 col-xxs-12 no-padding-lg\">\n                            <div class=\"hero-subscribe\">\n                                <h4 class=\"footer-title no-margin\">Follow us on</h4>\n                                <ul\n                                    class=\"list-unstyled list-inline footer-nav social-list-footer social-list-color footer-nav-inline\">\n                                    <li><a class=\"icon-color fb\" title=\"Facebook\" data-placement=\"top\"\n                                            data-toggle=\"tooltip\" href=\"#\"><i class=\"fa fa-facebook\"></i> </a></li>\n                                    <li><a class=\"icon-color tw\" title=\"Twitter\" data-placement=\"top\"\n                                            data-toggle=\"tooltip\" href=\"#\"><i class=\"fa fa-twitter\"></i> </a></li>\n\n                                    <li><a class=\"icon-color lin\" title=\"Linkedin\" data-placement=\"top\"\n                                            data-toggle=\"tooltip\" href=\"#\"><i class=\"fa fa-linkedin\"></i> </a></li>\n                                    <li><a class=\"icon-color pin\" title=\"Linkedin\" data-placement=\"top\"\n                                            data-toggle=\"tooltip\" href=\"#\"><i class=\"fa fa-pinterest-p\"></i> </a></li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <div style=\"clear: both\"></div>\n\n                <div class=\"col-xl-12\">\n\n                    <div class=\"copy-info text-center\">\n                        &copy; 2020 H2H. All Rights Reserved.\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <body>\n<img src=\"/assets/photo/Nepal-Mountain.jpg\" class=\"img-thumbnail\" alt=\"Nepal-Mountain\" width=\"100%\">\n</body> -->\n<div class=\"container mt-5\">\n    <div style=\"text-align: center\">\n        <h1>Find your match</h1>\n        <p class=\"lead\">Come on in to view your matches... All you need to do is sign up!</p>\n        <div class=\"text-center\">\n            <button class=\"btn btn-primary btn-lg mr-2\" routerLink=\"/register\">Register</button>\n            <button class=\"btn btn-info btn-lg\" routerLink=\"/mynews\">Learn more</button>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-4\">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<body>\n\n\n    <div class=\"bs-example\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" routerLink=\"/register\">\n            <!-- Carousel indicators -->\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\n            </ol>\n            <!-- Wrapper for carousel items -->\n            <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                    <img src=\"../../../assets/photo/mk.jpg\" style=\"height: 200px;\" alt=\"First Slide\">\n                    <br />\n                    <h3 style=\"text-emphasis-color:white\" routerLink=\"/register\">Make a fun with friends.</h3>\n                    <p>Make a every moment special with new friensds..</p>\n                </div>\n                <div class=\"carousel-item\">\n                    <img src=\"../../../assets/photo/33 (2).jpg\" style=\"height: 200px;\" alt=\"Second Slide\">\n                    <h3 style=\"text-emphasis-color:white\" routerLink=\"/register\">Make a fun with friends.</h3>\n                    <p> See who can be your friends......</p>\n                </div>\n                <div class=\"carousel-item\">\n                    <img src=\"../../../assets/photo/37.jpg\" style=\"height: 200px;\" alt=\"Third Slide\">\n                    <h3 style=\"text-emphasis-color:white\" routerLink=\"/register\">Lets Connected ....</h3>\n                    <p>You are alone ......</p>\n                </div>\n\n                <div class=\"carousel-item\">\n                    <img src=\"../../../assets/photo/7.jpg\" style=\"height: 200px;\" alt=\"Third Slide\">\n                    <h3 style=\"text-emphasis-color:white\" routerLink=\"/register\">Lets Start..</h3>\n                    <p>Make a more friends....</p>\n                </div>\n\n                <div class=\"carousel-item\">\n                    <img src=\"../../../assets/photo/9.png\" style=\"height: 200px;\" alt=\"Third Slide\">\n                    <h3 style=\"text-emphasis-color:white\">Make a every moment special with new friensds..</h3>\n                    <p> See who can be your friends......</p>\n                </div>\n            </div>\n            <!-- Carousel controls -->\n            <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\"></span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\"></span>\n            </a>\n        </div>\n    </div>\n    <div>\n\n\n    </div>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/message/message.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/message/message.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n                <i class=\"fa fa-envelope\"></i> Unread\n            </button>\n            <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n                <i class=\"fa fa-envelope-open\"></i> Inbox\n            </button>\n            <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n                <i class=\"fa fa-paper-plane\"></i> Outbox\n            </button>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"messages.length == 0\">\n        <h3>No messages</h3>\n    </div>\n\n    <div class=\"row\" *ngIf=\"messages.length > 0\">\n        <table class=\"table table-hover\" style=\"cursor: pointer\">\n            <tr>\n                <th style=\"width: 40%\">Message</th>\n                <th style=\"width: 20%\">From / To</th>\n                <th style=\"width: 20%\">Sent / Received</th>\n                <th style=\"width: 20%\"></th>\n            </tr>\n            <tr *ngFor=\"let message of messages\" [routerLink]=\"['/friends', \n          messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab:3}\">\n                <td>{{message.content}}</td>\n                <td>\n                    <div *ngIf=\"messageContainer != 'Outbox'\">\n                        <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\n                        <strong>{{message.senderKnownAs}}</strong>\n                    </div>\n                    <div *ngIf=\"messageContainer == 'Outbox'\">\n                        <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\n                        <strong>{{message.recipientKnownAs}}</strong>\n                    </div>\n                </td>\n                <td>{{message.messageSent | timeAgo}}</td>\n                <td>\n                    <button class=\"btn btn-danger\"(click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\n                </td>\n            </tr>\n        </table>\n\n    </div>\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\n        [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n    </pagination>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mycommunity/mycommunity.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mycommunity/mycommunity.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>mycommunity works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myevents/myevents.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myevents/myevents.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"../../../assets/photo/mk.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">Cras justo odio</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n    <div class=\"card-body\">\n        <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n</div>\n<div class=\"block-title sidebar-header\">\n    <h5><a href=\"#\">Nepali Time</a></h5>\n</div>\n<div class=\"block-content categories-list  list-filter \">\n\n    <ul class=\" list-unstyled\">\n        <li><iframe src=\"http://www.nepcal.com/clock_e2.php\" frameborder=\"0\" scrolling=\"no\" marginwidth=\"0\"\n                marginheight=\"0\" style=\"border:none; overflow:hidden; width:120px; height:267px;\"\n                allowtransparency=\"true\" class=\"m-1\"></iframe></li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myjob/myjob.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myjob/myjob.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-5\">\r\n\r\n    \r\n<form #postmyjobForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" class=\"mt-auto\"  (ngSubmit)=\"postmyjob()\">\r\n    <input class=\"form-control mr-sm-2\" name=\"jobtitle\" required type=\"text\" [(ngModel)]=\"model.jobtitle\"\r\n        placeholder=\"@jobTitle\" aria-label=\"Job Title \">\r\n    <input class=\"form-control mr-sm-2\" name=\"typeofjob\" required type=\"text\" [(ngModel)]=\"model.typeofjob\"\r\n        placeholder=\"@Type of Job\" aria-label=\"Type of Job \">\r\n    <input class=\"form-control mr-sm-2\" name=\"jobdescription\" required type=\"text\" [(ngModel)]=\"model.jobdescription\"\r\n        placeholder=\"@Job Description\" aria-label=\"Job Description \">\r\n    <input class=\"form-control mr-sm-2\" name=\"contactdetail\" required type=\"text\" [(ngModel)]=\"model.contactdetail\"\r\n        placeholder=\"@Contact Details\" aria-label=\"Contact Details\">\r\n    <button [disabled]=\"!postmyjobForm.valid\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Post\r\n        Job</button>\r\n</form>\r\n<h3> Here is my job posted</h3>\r\n\r\n<p *ngFor=\"let value of values\">\r\n    {{value.id}},\r\n    {{value.jobTitle}},\r\n    {{value.jobDescription}},\r\n    {{value.typeOfJob}},\r\n    {{value.contacDetails}}\r\n</p>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mynews/mynews.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mynews/mynews.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n    <title>Geocoding An Address</title>\r\n</head>\r\n\r\n<body>\r\n\r\n</body>\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\"></script>\r\n\r\n<script type=\"text/javascript\">\r\n\r\n    $.ajax({\r\n        url: \"https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAgTh9VUNLMrNef0PySILvqQTKK0Z__gKg\",\r\n        type: \"GET\",\r\n        success: function (data) {\r\n\r\n            $.each(data[\"results\"][0][\"address_components\"], function (key, value) {\r\n\r\n                if (value[\"types\"][0] == \"country\") {\r\n\r\n                    alert(value[\"short_name\"]);\r\n\r\n                }\r\n\r\n            })\r\n        }\r\n    })\r\n\r\n</script>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light bg-info\">\n    <!-- <a class=\"navbar-brand\" href=\"#\">H2H</a> -->\n    <img src=\"/assets/photo/logo.gif\" class=\"navbar-brand\" width=\"100\">\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n        aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-home\" style=\"font-size:36px;color:burlywood\"></i>Home <span\n                        class=\"sr-only\">(current)</span></a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/makeafriend\"><i class=\"fa fa-heart\"\n                        style=\"font-size:30px;color:red \"></i>My Like List</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/message\"><i class=\"fa fa-comments\"\n                        style=\"font-size:30px;color:black \"></i>Message</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/friends\"><i class=\"fa fa-search\"\n                        style=\"font-size:30px;color:black \"></i>Friends Finder</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle \" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-angle-double-right\"\n                        style=\"font-size:30px;color:black \"></i>More..</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" routerLink=\"/register\">Register</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/mynews\">News</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/buyandsale\">Buy&Sale</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/myjob\">Jobs</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/myevents\">Events</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/property\">Property</a>\n\n                </div>\n            </li>\n\n\n\n        </ul>\n\n        <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n            <input class=\"form-control mr-sm-2\" name=\"username\" required type=\"text\" [(ngModel)]=\"model.username\"\n                placeholder=\"@Username\" aria-label=\"User Name \">\n            <input class=\"form-control mr-sm-2\" name=\"password\" required type=\"password\" [(ngModel)]=\"model.password\"\n                placeholder=\"Password\" aria-label=\"Password\">\n            <button [disabled]=\"!loginForm.valid\" class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Login</button>\n        </form>\n\n        <li *ngIf=\"loggedIn()\" class=\"nav-item dropdown\">\n            <span class=\"mr-sm-2\">\n                <!-- <img src=\"{{authnticationService.currentUser.photoUrl}}\" alt=\"\"> -->\n                <img src=\"{{photoUrl || '../../../../../assets/photo/user.png'}}\" alt=\"\">\n            </span>\n            <a class=\"dropdown-toggle text-light\" href=\"#\" id=\"dropdown02\" data-toggle=\"dropdown\" aria-expanded=\"false\"\n                text-light> <i class=\"fa fa-user\" style=\"font-size:x-large;\"></i> Welocome\n                {{authnticationService.decodedToken?.unique_name |titlecase}}</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/friends/editprofile\"><i class=\"fa fa-user\"></i> Edit Profile</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"logOut()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n\n            </div>\n        </li>\n\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/properties/properties.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/properties/properties.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n<p>This is the display</p>\n<div *ngFor=\"let value of values\">\n    {{value.title}},\n    \n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(value.id)\">Delete</button>\n</div>\n\n\n\n\n<form #propertyPostForm=\"ngForm\" (ngSubmit)=\"postproperty(); propertyPostForm.reset()\"\n    class=\"col-propertyPostForm.reset()md-6 offset-md-3\">\n\n    <h2 class=\"text-center text-primary\">List your property</h2>\n\n    <hr>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" placeholder=\"Title\">\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"typeOfProperty\" [(ngModel)]=\"model.typeOfProperty\"\n            placeholder=\"Type of Listing\">\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"propertyDescription\" [(ngModel)]=\"model.propertyDescription\"\n            placeholder=\"propertyDescription\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"model.city\" placeholder=\"City\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"county\" [(ngModel)]=\"model.county\" placeholder=\"County\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"zipecode\" [(ngModel)]=\"model.zipecode\" placeholder=\"Zipe Code\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"state\" [(ngModel)]=\"model.state\" placeholder=\"State\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"model.country\" placeholder=\"Country\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"otherinformation\" [(ngModel)]=\"model.otherInformation\"\n            placeholder=\"Other Information\">\n    </div>\n\n\n    <div class=\"form-group text-center\">\n        <button class=\"btn btn-success mr-2\" (click)=\"$event.stopPropagation()\" type=\"submit\">Continue</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"cancel(); propertyPostForm.reset()\">Cancel</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n\r\n\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Components/Memebers/dispalycard/dispalycard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Components/Memebers/dispalycard/dispalycard.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img {\n  -webkit-transform: scale(1.2, 1.2);\n          transform: scale(1.2, 1.2);\n  -webkit-transition-duration: 500ms;\n          transition-duration: 500ms;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  opacity: 0.7;\n}\n\n.card img {\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n  -webkit-transition-duration: 500ms;\n          transition-duration: 500ms;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n}\n\n.card-img-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.member-icons {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  opacity: 0;\n}\n\n.card-img-wrapper:hover .member-icons {\n  bottom: 0;\n  opacity: 1;\n}\n\n.animate {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9kaXNwYWx5Y2FyZC9DOlxcVXNlcnNcXGRpbmVzXFxEZXNrdG9wXFxCYXNpY1F1ZXN0aW9uXFxBbmd1bGFyVUlcXEgySEFuZ3VsYXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXE1lbWViZXJzXFxkaXNwYWx5Y2FyZFxcZGlzcGFseWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvZGlzcGFseWNhcmQvZGlzcGFseWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDS0o7O0FESEE7RUFDSSx3Q0FBQTtFQUFBLGdDQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL01lbWViZXJzL2Rpc3BhbHljYXJkL2Rpc3BhbHljYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5jYXJkIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wLDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG4uY2FyZC1pbWctd3JhcHBlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lbWJlci1pY29uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTotMzAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5jYXJkLWltZy13cmFwcGVyOmhvdmVyIC5tZW1iZXItaWNvbnN7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5hbmltYXRle1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn0iLCIuY2FyZDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY2FyZCBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4uY2FyZC1pbWctd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbWJlci1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbWJlci1pY29ucyB7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFuaW1hdGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/Memebers/dispalycard/dispalycard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Memebers/dispalycard/dispalycard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DispalycardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispalycardComponent", function() { return DispalycardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");





let DispalycardComponent = class DispalycardComponent {
    constructor(authService, userService, alertyfy) {
        this.authService = authService;
        this.userService = userService;
        this.alertyfy = alertyfy;
    }
    ngOnInit() {
    }
    sendLike(id) {
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
            this.alertyfy.error('You have liked: ' + this.user.knownAs);
        }, error => {
            this.alertyfy.error('Problem to like' + this.user.knownAs);
        });
    }
};
DispalycardComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DispalycardComponent.prototype, "user", void 0);
DispalycardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispalycard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispalycard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/dispalycard/dispalycard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispalycard.component.scss */ "./src/app/Components/Memebers/dispalycard/dispalycard.component.scss")).default]
    })
], DispalycardComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/editprofile/editprofile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Components/Memebers/editprofile/editprofile.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-thumbnail {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body {\n  padding: 0 25px;\n}\n\n.card-footer {\n  padding: 10 px 15 px;\n  background-color: #fff;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9lZGl0cHJvZmlsZS9DOlxcVXNlcnNcXGRpbmVzXFxEZXNrdG9wXFxCYXNpY1F1ZXN0aW9uXFxBbmd1bGFyVUlcXEgySEFuZ3VsYXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXE1lbWViZXJzXFxlZGl0cHJvZmlsZVxcZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbn1cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwIHB4IDE1IHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn0iLCJpbWcuaW1nLXRodW1ibmFpbCB7XG4gIG1hcmdpbjogMjVweDtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwIHB4IDE1IHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/Memebers/editprofile/editprofile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Memebers/editprofile/editprofile.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");






let EditprofileComponent = class EditprofileComponent {
    constructor(authService, route, routers, userService, alertify) {
        this.authService = authService;
        this.route = route;
        this.routers = routers;
        this.userService = userService;
        this.alertify = alertify;
    }
    unloadNotification($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
        // this.loadUser();
    }
    //  loadUser(){
    //  this.userservice.getuser(+this.route.snapshot.params['id']).subscribe((user:User) => {
    //     this.user =user;
    //   },error => {
    //   this.alertify.error('Problem to load the details of the users');
    //    });
    //}
    updateUser() {
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
            this.alertify.error('Profile update Sucessful');
            this.editForm.reset(this.user);
        }, error => {
            this.alertify.error('Problem to update information.');
        });
    }
    updateMainPhoto(photoUrl) {
        this.user.photoUrl = photoUrl;
    }
    deleteUser() {
        this.userService.deleteUser(this.authService.decodedToken.nameid).subscribe(() => {
            this.logOut();
        }, error => {
            this.alertify.error('Problem to delete. ');
        });
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertify.warning('logged out');
        this.routers.navigate(['/home']);
    }
};
EditprofileComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm', { static: true })
], EditprofileComponent.prototype, "editForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])
], EditprofileComponent.prototype, "unloadNotification", null);
EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/editprofile/editprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.component.scss */ "./src/app/Components/Memebers/editprofile/editprofile.component.scss")).default]
    })
], EditprofileComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/friends/friends.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Components/Memebers/friends/friends.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Components/Memebers/friends/friends.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/Memebers/friends/friends.component.ts ***!
  \******************************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FriendsComponent = class FriendsComponent {
    constructor(userservice, alertify, route) {
        this.userservice = userservice;
        this.alertify = alertify;
        this.route = route;
        //This is for filter
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userParams = {};
    }
    ngOnInit() {
        //this.loaduser();
        this.route.data.subscribe(data => {
            this.users = data['users'].result;
            this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    }
    resetFilter() {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loaduser();
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        console.log(this.pagination);
        this.loaduser();
    }
    loaduser() {
        this.userservice.getusers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe((res) => {
            this.users = res.result;
            this.pagination = res.pagination;
        }, error => {
            //console.log(error);
            this.alertify.error(error);
        });
    }
};
FriendsComponent.ctorParameters = () => [
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friends',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friends.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/friends/friends.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friends.component.scss */ "./src/app/Components/Memebers/friends/friends.component.scss")).default]
    })
], FriendsComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/makeafriend/makeafriend.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Components/Memebers/makeafriend/makeafriend.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvbWFrZWFmcmllbmQvbWFrZWFmcmllbmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/Memebers/makeafriend/makeafriend.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Memebers/makeafriend/makeafriend.component.ts ***!
  \**************************************************************************/
/*! exports provided: MakeafriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeafriendComponent", function() { return MakeafriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MakeafriendComponent = class MakeafriendComponent {
    constructor(authService, userService, route, alertyfy) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertyfy = alertyfy;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.users = data['users'].result;
            this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        console.log(this.pagination);
        this.loaduser();
    }
    loaduser() {
        this.userService.getusers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe((res) => {
            this.users = res.result;
            this.pagination = res.pagination;
        }, error => {
            //console.log(error);
            this.alertyfy.error(error);
        });
    }
};
MakeafriendComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
MakeafriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-makeafriend',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./makeafriend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/makeafriend/makeafriend.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./makeafriend.component.scss */ "./src/app/Components/Memebers/makeafriend/makeafriend.component.scss")).default]
    })
], MakeafriendComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/membersdetails/membersdetails.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/Memebers/membersdetails/membersdetails.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body {\n  padding: 0 25px;\n}\n\n.card-footer {\n  padding: 10 px 15 px;\n  background-color: #fff;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9tZW1iZXJzZGV0YWlscy9DOlxcVXNlcnNcXGRpbmVzXFxEZXNrdG9wXFxCYXNpY1F1ZXN0aW9uXFxBbmd1bGFyVUlcXEgySEFuZ3VsYXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXE1lbWViZXJzXFxtZW1iZXJzZGV0YWlsc1xcbWVtYmVyc2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvbWVtYmVyc2RldGFpbHMvbWVtYmVyc2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9tZW1iZXJzZGV0YWlscy9tZW1iZXJzZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbn1cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwIHB4IDE1IHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuIiwiLmltZy10aHVtYm5haWwge1xuICBtYXJnaW46IDI1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogODUlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAxMCBweCAxNSBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/Memebers/membersdetails/membersdetails.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/Memebers/membersdetails/membersdetails.component.ts ***!
  \********************************************************************************/
/*! exports provided: MembersdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersdetailsComponent", function() { return MembersdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");






let MembersdetailsComponent = class MembersdetailsComponent {
    constructor(userService, route, alertyfy) {
        this.userService = userService;
        this.route = route;
        this.alertyfy = alertyfy;
    }
    ngOnInit() {
        //this.loadUser();
        this.route.data.subscribe(data => {
            this.user = data['user'];
        });
        //this is for quaryparams
        this.route.queryParams.subscribe(params => {
            const selectTab = params['tab'];
            this.membersTabs.tabs[selectTab > 0 ? selectTab : 0].active = true;
        });
        //End of wueryparams
        this.galleryOptions = [{
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
            }
        ];
        this.galleryImages = this.getImage();
    }
    getImage() {
        const imageUrl = [];
        for (const photo of this.user.photos) {
            imageUrl.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        }
        return imageUrl;
    }
    // loadUser(){
    //   this.userService.getuser(+this.route.snapshot.params['id']).subscribe((user:User) => {
    //     this.user =user;
    //   },error => {
    //   console.log(error);
    //   });
    selectTab(tabId) {
        this.membersTabs.tabs[tabId].active = true;
    }
};
MembersdetailsComponent.ctorParameters = () => [
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('membersTabs', { static: true })
], MembersdetailsComponent.prototype, "membersTabs", void 0);
MembersdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-membersdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./membersdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/membersdetails/membersdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./membersdetails.component.scss */ "./src/app/Components/Memebers/membersdetails/membersdetails.component.scss")).default]
    })
], MembersdetailsComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/messagethreadad/messagethreadad.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/Components/Memebers/messagethreadad/messagethreadad.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border: none;\n}\n\n.chat {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat-li {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px dodgerblue;\n}\n\n.rounded-circle {\n  height: 50px;\n  widows: 50px;\n}\n\n.card-body {\n  overflow-y: scroll;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9tZXNzYWdldGhyZWFkYWQvQzpcXFVzZXJzXFxkaW5lc1xcRGVza3RvcFxcQmFzaWNRdWVzdGlvblxcQW5ndWxhclVJXFxIMkhBbmd1bGFyL3NyY1xcYXBwXFxDb21wb25lbnRzXFxNZW1lYmVyc1xcbWVzc2FnZXRocmVhZGFkXFxtZXNzYWdldGhyZWFkYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvbWVzc2FnZXRocmVhZGFkL21lc3NhZ2V0aHJlYWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9tZXNzYWdldGhyZWFkYWQvbWVzc2FnZXRocmVhZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jaGF0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXQtbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG9kZ2VyYmx1ZTtcclxufVxyXG4ucm91bmRlZC1jaXJjbGV7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWRvd3M6IDUwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iLCIuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNoYXQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jaGF0LWxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb2RnZXJibHVlO1xufVxuXG4ucm91bmRlZC1jaXJjbGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZG93czogNTBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA0MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/Memebers/messagethreadad/messagethreadad.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/Memebers/messagethreadad/messagethreadad.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MessagethreadadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagethreadadComponent", function() { return MessagethreadadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");





let MessagethreadadComponent = class MessagethreadadComponent {
    constructor(authService, userService, alertyfy) {
        this.authService = authService;
        this.userService = userService;
        this.alertyfy = alertyfy;
        this.newMessage = {};
    }
    ngOnInit() {
        this.loadMessages();
    }
    loadMessages() {
        this.userService.getMesssageThread(this.authService.decodedToken.nameid, this.recipientId)
            .subscribe(messages => {
            this.messages = messages;
        }, error => {
            this.alertyfy.error(error);
        });
    }
    sendMessage() {
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe((message) => {
            this.messages.unshift(message);
            this.newMessage.content = '';
        }, error => {
            this.alertyfy.error(error);
        });
    }
};
MessagethreadadComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessagethreadadComponent.prototype, "recipientId", void 0);
MessagethreadadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messagethreadad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messagethreadad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/messagethreadad/messagethreadad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messagethreadad.component.scss */ "./src/app/Components/Memebers/messagethreadad/messagethreadad.component.scss")).default]
    })
], MessagethreadadComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/photoeditor/photoeditor.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Components/Memebers/photoeditor/photoeditor.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-thumbnail {\n  height: 100px;\n  min-width: 100px !important;\n  margin-bottom: 2px;\n}\n\n.nv-file-over {\n  border: dotted 3 px red;\n}\n\ninput[type=file] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9NZW1lYmVycy9waG90b2VkaXRvci9DOlxcVXNlcnNcXGRpbmVzXFxEZXNrdG9wXFxCYXNpY1F1ZXN0aW9uXFxBbmd1bGFyVUlcXEgySEFuZ3VsYXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXE1lbWViZXJzXFxwaG90b2VkaXRvclxccGhvdG9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvcGhvdG9lZGl0b3IvcGhvdG9lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL01lbWViZXJzL3Bob3RvZWRpdG9yL3Bob3RvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy10aHVtYm5haWwge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4IDtcclxufVxyXG4ubnYtZmlsZS1vdmVye1xyXG4gICAgYm9yZGVyOmRvdHRlZCAzIHB4IHJlZDtcclxufVxyXG5pbnB1dFt0eXBlPWZpbGVde1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn0iLCJpbWcuaW1nLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubnYtZmlsZS1vdmVyIHtcbiAgYm9yZGVyOiBkb3R0ZWQgMyBweCByZWQ7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/Memebers/photoeditor/photoeditor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Memebers/photoeditor/photoeditor.component.ts ***!
  \**************************************************************************/
/*! exports provided: PhotoeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoeditorComponent", function() { return PhotoeditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");







let PhotoeditorComponent = class PhotoeditorComponent {
    constructor(authService, alertyfy, userService) {
        this.authService = authService;
        this.alertyfy = alertyfy;
        this.userService = userService;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    ngOnInit() {
        this.initalizeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    initalizeUploader() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const res = JSON.parse(response);
                const photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                this.photos.push(photo);
                if (photo.isMain) {
                    this.authService.changeMemeberPhoto(photo.url);
                    this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
                }
            }
        };
    }
    setMainPhoto(photo) {
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
            this.currentMain = this.photos.filter(p => p.isMain === true)[0];
            this.currentMain.isMain = false;
            photo.isMain = true;
            //this.getMemberPhotoChange.emit(photo.url);
            this.authService.changeMemeberPhoto(photo.url);
            this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
            this.alertyfy.error('Sucessfully set to the main');
        }, error => {
            this.alertyfy.error('problem to make a main photo');
        });
    }
    deletePhoto(id) {
        this.alertyfy.confirm('Are you sure you want to delete this photo ?', () => {
            this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
                this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
                this.alertyfy.success('Photo has been deleted');
            }, error => {
                this.alertyfy.error('Failed to delete the Photo');
            });
        });
    }
};
PhotoeditorComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhotoeditorComponent.prototype, "photos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhotoeditorComponent.prototype, "getMemberPhotoChange", void 0);
PhotoeditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photoeditor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photoeditor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/photoeditor/photoeditor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photoeditor.component.scss */ "./src/app/Components/Memebers/photoeditor/photoeditor.component.scss")).default]
    })
], PhotoeditorComponent);



/***/ }),

/***/ "./src/app/Components/Memebers/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Components/Memebers/register/register.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVtZWJlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/Memebers/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Components/Memebers/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






//import { EventEmitter } from 'protractor';
let RegisterComponent = class RegisterComponent {
    constructor(authService, alertyfy, formBuilder, router) {
        this.authService = authService;
        this.alertyfy = alertyfy;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        //this is for date
        this.bsConfig = {
            containerClass: 'theme-red'
        },
            this.createRegisterForm();
        //This provide same functionality as above function (from builder)
        // this.registerForm= new FormGroup({
        //   username:new FormControl('',Validators.required),
        //   password: new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(10)]),
        //   confirmPassword: new FormControl('', Validators.required)
        // }, this.passwordMatchValidator);
    }
    passwordMatchValidator(g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    }
    register() {
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(() => {
                this.alertyfy.error('Registration sucess. ');
            }, error => {
                this.alertyfy.error('Problem to register...');
            }, () => {
                this.authService.login(this.user).subscribe(() => {
                    this.router.navigate(['/friends']);
                });
            });
        }
        //This is the old register method
        // this.authService.register(this.model).subscribe(() => {
        //   this.alertyfy.sucess('Register Sucessful');
        // }, error => {
        //   this.alertyfy.error('Registration Failed.');
        // });
    }
    cancel() {
        this.cancelRegister.emit(false);
    }
    //This is used of from Builder is the 
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            gender: ['male'],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RegisterComponent.prototype, "cancelRegister", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Memebers/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/Components/Memebers/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/Components/buyandsale/buyandsale.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/buyandsale/buyandsale.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYnV5YW5kc2FsZS9idXlhbmRzYWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Components/buyandsale/buyandsale.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/buyandsale/buyandsale.component.ts ***!
  \***************************************************************/
/*! exports provided: BuyandsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyandsaleComponent", function() { return BuyandsaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BuyandsaleComponent = class BuyandsaleComponent {
    constructor() { }
    ngOnInit() {
    }
};
BuyandsaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyandsale',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyandsale.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/buyandsale/buyandsale.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyandsale.component.scss */ "./src/app/Components/buyandsale/buyandsale.component.scss")).default]
    })
], BuyandsaleComponent);



/***/ }),

/***/ "./src/app/Components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section .section-title {\n  text-align: center;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n}\n\n#footer {\n  background: #fff !important;\n}\n\n#footer h5 {\n  padding-left: 10px;\n  border-left: 3px solid #eeeeee;\n  padding-bottom: 6px;\n  margin-bottom: 20px;\n  color: #000;\n}\n\n#footer a {\n  color: #009fff;\n  text-decoration: none !important;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n#footer ul.social li {\n  padding: 3px 0;\n}\n\n#footer ul.social li a i {\n  margin-right: 5px;\n  font-size: 25px;\n  -webkit-transition: 0.5s all ease;\n  transition: 0.5s all ease;\n}\n\n#footer ul.social li:hover a i {\n  font-size: 30px;\n  margin-top: -10px;\n}\n\n#footer ul.social li a,\n#footer ul.quick-links li a {\n  color: #009fff;\n}\n\n#footer ul.social li a:hover {\n  color: #009fff;\n}\n\n#footer ul.quick-links li {\n  padding: 3px 0;\n  -webkit-transition: 0.5s all ease;\n  transition: 0.5s all ease;\n}\n\n#footer ul.quick-links li:hover {\n  padding: 3px 0;\n  margin-left: 5px;\n  font-weight: 700;\n}\n\n#footer ul.quick-links li a i {\n  margin-right: 5px;\n}\n\n#footer ul.quick-links li:hover a i {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxkaW5lc1xcRGVza3RvcFxcQmFzaWNRdWVzdGlvblxcQW5ndWxhclVJXFxIMkhBbmd1bGFyL3NyY1xcYXBwXFxDb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREVBO0VBQ0Msa0JBQUE7RUFDRyw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDTSxjQUFBO0VBQ0YsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FDRUo7O0FEQUE7RUFDQyxjQUFBO0FDR0Q7O0FEREE7RUFDSSxpQkFBQTtFQUNILGVBQUE7RUFDQSxpQ0FBQTtFQUVBLHlCQUFBO0FDSUQ7O0FERkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNLRDs7QURIQTs7RUFFSSxjQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDQyxjQUFBO0VBQ0EsaUNBQUE7RUFFQSx5QkFBQTtBQ1FEOztBRE5BO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTRDs7QURQQTtFQUNDLGlCQUFBO0FDVUQ7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiNmb290ZXIgaDV7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjojMDAwO1xyXG59XHJcbiNmb290ZXIgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDA5ZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaTpob3ZlciBhIGkge1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG5cdG1hcmdpbi10b3A6LTEwcHg7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSxcclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhe1xyXG4gICAgY29sb3I6ICMwMDlmZmY7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjMDA5ZmZmO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXJ7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0bWFyZ2luLWxlZnQ6NXB4O1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIGEgaSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59Iiwic2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuI2Zvb3RlciBoNSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuI2Zvb3RlciBhIHtcbiAgY29sb3I6ICMwMDlmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbn1cblxuI2Zvb3RlciB1bC5zb2NpYWwgbGkge1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XG59XG5cbiNmb290ZXIgdWwuc29jaWFsIGxpOmhvdmVyIGEgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEge1xuICBjb2xvcjogIzAwOWZmZjtcbn1cblxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDA5ZmZmO1xufVxuXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xufVxuXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXIgYSBpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/Components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/Components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel {\n  background: #58a2ec;\n  margin-top: 20px;\n}\n\n.carousel-item {\n  margin-top: 20px;\n  text-align: center;\n  min-height: 200px;\n  /* Prevent carousel from being distorted if for some reason image doesn't load */\n  max-height: 350px;\n}\n\n.bs-example {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcZGluZXNcXERlc2t0b3BcXEJhc2ljUXVlc3Rpb25cXEFuZ3VsYXJVSVxcSDJIQW5ndWxhci9zcmNcXGFwcFxcQ29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsZ0ZBQUE7RUFDbkIsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsIHtcclxuICAgIGJhY2tncm91bmQ6ICM1OGEyZWM7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7IC8qIFByZXZlbnQgY2Fyb3VzZWwgZnJvbSBiZWluZyBkaXN0b3J0ZWQgaWYgZm9yIHNvbWUgcmVhc29uIGltYWdlIGRvZXNuJ3QgbG9hZCAqL1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5icy1leGFtcGxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufSIsIi5jYXJvdXNlbCB7XG4gIGJhY2tncm91bmQ6ICM1OGEyZWM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgLyogUHJldmVudCBjYXJvdXNlbCBmcm9tIGJlaW5nIGRpc3RvcnRlZCBpZiBmb3Igc29tZSByZWFzb24gaW1hZ2UgZG9lc24ndCBsb2FkICovXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xufVxuXG4uYnMtZXhhbXBsZSB7XG4gIG1hcmdpbjogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/Components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/Components/message/message.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Components/message/message.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  margin-top: 15px;\n}\n\n.img-circle {\n  max-height: 50px;\n}\n\ntd {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcZGluZXNcXERlc2t0b3BcXEJhc2ljUXVlc3Rpb25cXEFuZ3VsYXJVSVxcSDJIQW5ndWxhci9zcmNcXGFwcFxcQ29tcG9uZW50c1xcbWVzc2FnZVxcbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHggO1xyXG59XHJcbi5pbWctY2lyY2xle1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG50ZHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iLCJ0YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pbWctY2lyY2xlIHtcbiAgbWF4LWhlaWdodDogNTBweDtcbn1cblxudGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");






let MessageComponent = class MessageComponent {
    constructor(userService, authService, route, alertyfy) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.alertyfy = alertyfy;
        this.messageContainer = 'Unread';
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.messages = data['messages'].result;
            this.pagination = data['messages'].pagination;
        });
    }
    loadMessages() {
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe((res) => {
            this.messages = res.result;
            this.pagination = res.pagination;
        }, error => {
            this.alertyfy.error('Problem to send message. ');
        });
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    }
    deleteMessage(id) {
        this.alertyfy.confirm('Are you sure you want to delete this messages. ', () => {
            this.userService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
                this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
                this.alertyfy.error('Message has been deleted. ');
            }, error => {
                this.alertyfy.error('Failed to delete the message.');
            });
        });
    }
};
MessageComponent.ctorParameters = () => [
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/app/Components/message/message.component.scss")).default]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/Components/mycommunity/mycommunity.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/mycommunity/mycommunity.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbXljb21tdW5pdHkvbXljb21tdW5pdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/mycommunity/mycommunity.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/mycommunity/mycommunity.component.ts ***!
  \*****************************************************************/
/*! exports provided: MycommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycommunityComponent", function() { return MycommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MycommunityComponent = class MycommunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
MycommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mycommunity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mycommunity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mycommunity/mycommunity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mycommunity.component.scss */ "./src/app/Components/mycommunity/mycommunity.component.scss")).default]
    })
], MycommunityComponent);



/***/ }),

/***/ "./src/app/Components/myevents/myevents.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/myevents/myevents.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbXlldmVudHMvbXlldmVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/myevents/myevents.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/myevents/myevents.component.ts ***!
  \***********************************************************/
/*! exports provided: MyeventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyeventsComponent", function() { return MyeventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyeventsComponent = class MyeventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyeventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myevents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myevents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myevents/myevents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myevents.component.scss */ "./src/app/Components/myevents/myevents.component.scss")).default]
    })
], MyeventsComponent);



/***/ }),

/***/ "./src/app/Components/myjob/myjob.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/myjob/myjob.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbXlqb2IvbXlqb2IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/myjob/myjob.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/myjob/myjob.component.ts ***!
  \*****************************************************/
/*! exports provided: MyjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobComponent", function() { return MyjobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_myjobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/myjobs.service */ "./src/app/_Services/myjobs.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");




let MyjobComponent = class MyjobComponent {
    constructor(myjobservice, alertyfyService) {
        this.myjobservice = myjobservice;
        this.alertyfyService = alertyfyService;
        this.model = {};
    }
    //constructor(private http: HttpClient) { }
    ngOnInit() {
        this.getmyjob();
    }
    postmyjob() {
        this.myjobservice.postmyjob(this.model).subscribe(() => {
            this.alertyfyService.error('Job Post Sucessfully');
            this.postmyjobForm.reset();
            //console.log('Job Post Sucessfully');
        }, error => {
            //console.log(error);
            this.alertyfyService.error('Error to Post the job');
        });
    }
    getmyjob() {
        this.myjobservice.getMyjob().subscribe(response => {
            this.values = response;
        }, error => {
            console.log(error);
        });
    }
};
MyjobComponent.ctorParameters = () => [
    { type: src_app_Services_myjobs_service__WEBPACK_IMPORTED_MODULE_2__["MyjobsService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postmyjobForm', { static: true })
], MyjobComponent.prototype, "postmyjobForm", void 0);
MyjobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myjob',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myjob.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/myjob/myjob.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myjob.component.scss */ "./src/app/Components/myjob/myjob.component.scss")).default]
    })
], MyjobComponent);



/***/ }),

/***/ "./src/app/Components/mynews/mynews.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/mynews/mynews.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbXluZXdzL215bmV3cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/mynews/mynews.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/mynews/mynews.component.ts ***!
  \*******************************************************/
/*! exports provided: MynewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MynewsComponent", function() { return MynewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MynewsComponent = class MynewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MynewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mynews',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mynews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mynews/mynews.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mynews.component.scss */ "./src/app/Components/mynews/mynews.component.scss")).default]
    })
], MynewsComponent);



/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\n  background-color: #3b3e47;\n}\n\n.bg-light {\n  height: 70px;\n  background-color: #ffffff;\n  top: 0;\n  -webkit-transition-duration: 500ms;\n  transition-duration: 500ms;\n  padding: 0 15px 0 30px;\n  border-bottom: 1px solid rgba(10, 10, 100, 0.125);\n  box-shadow: 0 0 22px 0 rgba(36, 102, 253, 0.125);\n}\n\n.p0 {\n  padding: 0 !important;\n}\n\nul, ol, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na, a:hover, a:focus {\n  display: inline-block;\n  outline: none;\n  text-decoration: none;\n}\n\n.rotate-bar {\n  background: #404041;\n  height: 30px;\n  overflow-x: hidden;\n}\n\n.title {\n  background: #e51937 none repeat scroll 0 0;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 30px;\n  padding-right: 35px;\n  position: relative;\n  text-align: right;\n  text-transform: uppercase;\n}\n\n.title::after {\n  background: #e51937;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 30px;\n  position: absolute;\n  right: -29px;\n  top: 0;\n  width: 50px;\n  -webkit-transform: skew(-30deg);\n          transform: skew(-30deg);\n}\n\n.tab-menu {\n  position: relative;\n}\n\n.tab-menu ul li {\n  float: left;\n  border-right: 1px solid #e51937;\n  -webkit-transform: skew(-30deg);\n          transform: skew(-30deg);\n}\n\n.tab-menu ul li a {\n  color: #ffffff;\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 30px;\n  padding: 0 35px;\n  text-transform: uppercase;\n  -webkit-transition: all 700ms ease;\n  transition: all 700ms ease;\n}\n\n.tab-menu ul li a:hover,\n.tab-menu ul li.active a {\n  background: #10144d;\n}\n\n.tab-menu ul li a span {\n  -webkit-transform: skew(30deg);\n          transform: skew(30deg);\n  display: block;\n}\n\nimg {\n  max-height: 50px;\n  border: 2px solid white;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxkaW5lc1xcRGVza3RvcFxcQmFzaWNRdWVzdGlvblxcQW5ndWxhclVJXFxIMkhBbmd1bGFyL3NyY1xcYXBwXFxDb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxrQ0FBQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLGdEQUFBO0FDQUo7O0FES0E7RUFDSSxxQkFBQTtBQ0ZKOztBRElBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFJQSwwQkFBQTtBQ01KOztBREpBOztFQUVJLG1CQUFBO0FDT0o7O0FETEE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZTQ3O1xyXG59XHJcblxyXG4uYmctbGlnaHQge1xyXG4gICBcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwgMTAsIDEwMCwgMC4xMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIycHggMCByZ2JhKDM2LCAxMDIsIDI1MywgMC4xMjUpO1xyXG4gICBcclxufVxyXG5cclxuXHJcbi5wMHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG51bCwgb2wsIGxpe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYSwgYTpob3ZlcixhOmZvY3Vze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucm90YXRlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0MDQxO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTUxOTM3IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnRpdGxlOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTUxOTM3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0yOXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKTtcclxufVxyXG4udGFiLW1lbnV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRhYi1tZW51IHVsIGxpe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTUxOTM3O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZyk7XHJcbn1cclxuLnRhYi1tZW51IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA3MDBtcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCA3MDBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDcwMG1zIGVhc2U7XHJcbn1cclxuLnRhYi1tZW51IHVsIGxpIGE6aG92ZXIsXHJcbi50YWItbWVudSB1bCBsaS5hY3RpdmUgYXtcclxuICAgIGJhY2tncm91bmQ6ICMxMDE0NGQ7IFxyXG59XHJcbi50YWItbWVudSB1bCBsaSBhIHNwYW57XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn0iLCIubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2U0Nztcbn1cblxuLmJnLWxpZ2h0IHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgcGFkZGluZzogMCAxNXB4IDAgMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAsIDEwLCAxMDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDIycHggMCByZ2JhKDM2LCAxMDIsIDI1MywgMC4xMjUpO1xufVxuXG4ucDAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbnVsLCBvbCwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEsIGE6aG92ZXIsIGE6Zm9jdXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJvdGF0ZS1iYXIge1xuICBiYWNrZ3JvdW5kOiAjNDA0MDQxO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogI2U1MTkzNyBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpdGxlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNlNTE5Mzc7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTI5cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpO1xufVxuXG4udGFiLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWItbWVudSB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTUxOTM3O1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKTtcbn1cblxuLnRhYi1tZW51IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMzVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA3MDBtcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDcwMG1zIGVhc2U7XG59XG5cbi50YWItbWVudSB1bCBsaSBhOmhvdmVyLFxuLnRhYi1tZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZDogIzEwMTQ0ZDtcbn1cblxuLnRhYi1tZW51IHVsIGxpIGEgc3BhbiB7XG4gIHRyYW5zZm9ybTogc2tldygzMGRlZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NavbarComponent = class NavbarComponent {
    constructor(authnticationService, router, userservice, alertify) {
        this.authnticationService = authnticationService;
        this.router = router;
        this.userservice = userservice;
        this.alertify = alertify;
        this.model = {};
    }
    ngOnInit() {
        this.authnticationService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    }
    login() {
        this.authnticationService.login(this.model).subscribe(next => {
            // console.log('Log in sucessful');
            this.alertify.message('Log in sucessful');
        }, error => {
            console.log('Login Failed.');
            this.alertify.error('Login Failed.');
        });
    }
    loggedIn() {
        //const token = localStorage.getItem('token');
        //return !!token;
        return this.authnticationService.loggedIn();
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authnticationService.decodedToken = null;
        this.authnticationService.currentUser = null;
        this.alertify.warning('logged out');
        this.router.navigate(['/home']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/Components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/Components/properties/properties.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/properties/properties.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Components/properties/properties.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/properties/properties.component.ts ***!
  \***************************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/property.service */ "./src/app/_Services/property.service.ts");
/* harmony import */ var src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PropertiesComponent = class PropertiesComponent {
    // @ViewChild('propertyPostForm', { static: true }) propertyPostForm: NgForm;
    constructor(propertyService, route, alertify) {
        this.propertyService = propertyService;
        this.route = route;
        this.alertify = alertify;
        this.model = {};
        this.cancelpost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.getallproperty();
        this.route.data.subscribe(data => {
            this.values = data['values'].result;
            this.pagination = data['property'].pagination;
        });
    }
    getallproperty() {
        this.propertyService.getMthod().subscribe(response => {
            this.values = response;
        }, error => {
            this.alertify.error('Error to load the data');
        });
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.getallproperty();
    }
    //
    deleteMessage(id) {
        this.alertify.confirm('Are you sure you want to delete this property. ', () => {
            this.propertyService.deleteProperty(id).subscribe(() => {
                this.property.splice(this.property.findIndex(m => m.id === id), 1);
                this.alertify.success('Property has been deleted. ');
            }, error => {
                this.alertify.error('Failed to delete the Property.');
            });
        });
    }
    //
    postproperty() {
        this.propertyService.registerproperty(this.model).subscribe(() => {
            this.alertify.success('Property Posted Sucessfully.');
            this.propertyPostForm.reset();
        }, error => {
            this.alertify.error('Problem to post the property.');
        });
    }
    cancel() {
        this.alertify.error('Your form canceled. ');
        this.cancelpost.emit(false);
        this.propertyPostForm.reset();
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: src_app_Services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_Services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PropertiesComponent.prototype, "cancelpost", void 0);
PropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-properties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/properties/properties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./properties.component.scss */ "./src/app/Components/properties/properties.component.scss")).default]
    })
], PropertiesComponent);



/***/ }),

/***/ "./src/app/_Models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_Models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginationResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationResult", function() { return PaginationResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PaginationResult {
}


/***/ }),

/***/ "./src/app/_Services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_Services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_2__);



let AlertifyService = class AlertifyService {
    constructor() { }
    confirm(message, okCallback) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["confirm"](message, (e) => {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    }
    success(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["sucess"](message);
    }
    error(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["error"](message);
    }
    warning(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["warning"](message);
    }
    message(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["message"](message);
    }
};
AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertifyService);



/***/ }),

/***/ "./src/app/_Services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_Services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







//import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('../../assets/photo/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    changeMemeberPhoto(photoUrl) {
        this.photoUrl.next(photoUrl);
    }
    login(model) {
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                //This two line is extra for getting photo for nav bar
                localStorage.setItem('user', JSON.stringify(user.user));
                this.currentUser = user.user;
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
                console.log(this.decodedToken);
                this.changeMemeberPhoto(this.currentUser.photoUrl);
            }
        }));
    }
    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
        //return !!token;
    }
    // register(model: any) {
    //   return this.http.post(this.baseUrl + 'register', model);
    // }
    register(user) {
        return this.http.post(this.baseUrl + 'register', user);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_Services/error.interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_Services/error.interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptorService, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return ErrorInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ErrorInterceptorService = class ErrorInterceptorService {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 401) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.statusText);
            }
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const applicationError = error.headers.get('Application _Error');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(applicationError);
                }
                const serverError = error.error;
                let modalStateErrors = '';
                if (serverError.error && serverError.error === 'object') {
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.error[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    }
};
ErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptorService);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptorService,
    multi: true,
};


/***/ }),

/***/ "./src/app/_Services/myjobs.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_Services/myjobs.service.ts ***!
  \*********************************************/
/*! exports provided: MyjobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsService", function() { return MyjobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MyjobsService = class MyjobsService {
    //myjobs:any;
    // httpCleint: any;
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44346/api/myjobs/';
    }
    postmyjob(model) {
        return this.http.post(this.baseUrl + 'postmyjob', model);
    }
    getMyjob() {
        return this.http.get(this.baseUrl);
    }
    getmyjobbyid(id) {
        return this.http.get(this.baseUrl + id);
    }
};
MyjobsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyjobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyjobsService);



/***/ }),

/***/ "./src/app/_Services/property.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_Services/property.service.ts ***!
  \***********************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PropertyService = class PropertyService {
    constructor(http) {
        this.http = http;
        //apiUrl: 'https://localhost:44346/api/';
        //baseUrl = this.apiUrl;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    postProperty(property) {
        return this.http.post(this.baseUrl + 'properties/' + 'postproperty', property);
    }
    getproperty() {
        return this.http.get(this.baseUrl + 'Properties');
    }
    getpropertybyId(id) {
        return this.http.get(this.baseUrl + 'properties/' + id);
    }
    updateProperty(id, property) {
        return this.http.put(this.baseUrl + 'properties/' + id, property);
    }
    getMthod() {
        return this.http.get(this.baseUrl + 'properties');
    }
    registerproperty(model) {
        return this.http.post(this.baseUrl + 'properties/' + 'postproperty', model);
    }
    deleteProperty(id) {
        return this.http.delete(this.baseUrl + 'properties/' + id);
    }
};
PropertyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PropertyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PropertyService);



/***/ }),

/***/ "./src/app/_Services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_Services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Models/pagination */ "./src/app/_Models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






//This line is commented because we used new method to sent token
// const httpOptions ={
//   headers:new HttpHeaders({
//   'Authorization':'Bearer '+localStorage.getItem('token')
//   })
// };
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    // getusers():Observable<User[]>{
    //   return this.http.get<User[]>(this.baseUrl+'users',httpOptions);
    // }
    // getuser(id):Observable<User>{
    //   return this.http.get<User>(this.baseUrl+'users/'+id,httpOptions);
    // }
    //This is the getusers() method with out pagination
    //getusers(): Observable<User[]> {
    // return this.http.get<User[]>(this.baseUrl + 'users');
    // }
    getusers(page, itemsPerPage, userParams, likesParams) {
        const paginatedResult = new _Models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        //filter
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParams === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likesParams === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http.get(this.baseUrl + 'users', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    }
    //   return this.http.get<User[]>(this.baseUrl+'users', { observe: 'response', parms})
    //     .pipe(
    //       map(response =>{
    //     paginatedResult.result = response.body;
    // if(response.headers.get('Pagination') != null)
    // {
    //   paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
    // }
    // return paginatedResult;
    //       })
    //     );
    // }
    getuser(id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    }
    updateUser(id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    }
    setMainPhoto(userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    }
    deletePhoto(userId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    }
    sendLike(id, recipientId) {
        // return this.http.post(this.baseUrl + 'users/'+ id + '/like/' + recipientId, {});
        return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    }
    //messsage
    getMessages(id, page, itemsPerPage, messageContainer) {
        const paginationResult = new _Models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.http.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            paginationResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginationResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginationResult;
        }));
    }
    getMesssageThread(id, recipientId) {
        return this.http.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    }
    sendMessage(id, message) {
        return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
    }
    deleteMessage(id, userId) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    }
    deleteUser(id) {
        return this.http.delete(this.baseUrl + 'users/' + id);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/_guard/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/_guard/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");




//import { Observable } from 'rxjs';
let AuthGuard = class AuthGuard {
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/_guard/prevent_unsaved_change.ts":
/*!**************************************************!*\
  !*** ./src/app/_guard/prevent_unsaved_change.ts ***!
  \**************************************************/
/*! exports provided: PreventUnSavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnSavedChanges", function() { return PreventUnSavedChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreventUnSavedChanges = class PreventUnSavedChanges {
    canDeactivate(component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
};
PreventUnSavedChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PreventUnSavedChanges);



/***/ }),

/***/ "./src/app/_resolver/list_like_resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolver/list_like_resolver.ts ***!
  \*************************************************/
/*! exports provided: LikeListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeListResolver", function() { return LikeListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");







let LikeListResolver = class LikeListResolver {
    constructor(userService, router, alertyfy) {
        this.userService = userService;
        this.router = router;
        this.alertyfy = alertyfy;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParams = 'Likers';
    }
    resolve(route) {
        return this.userService.getusers(this.pageNumber, this.pageSize, null, this.likesParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log('Problem to retriving data.9');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
LikeListResolver.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
LikeListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LikeListResolver);



/***/ }),

/***/ "./src/app/_resolver/m-detail-resolver.ts":
/*!************************************************!*\
  !*** ./src/app/_resolver/m-detail-resolver.ts ***!
  \************************************************/
/*! exports provided: MDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDetailResolver", function() { return MDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");







let MDetailResolver = class MDetailResolver {
    constructor(userService, router, alertyfy) {
        this.userService = userService;
        this.router = router;
        this.alertyfy = alertyfy;
    }
    resolve(route) {
        return this.userService.getuser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertyfy.error('Problem to retriving data.');
            this.router.navigate(['/friends']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MDetailResolver.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MDetailResolver);



/***/ }),

/***/ "./src/app/_resolver/m-edit-resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolver/m-edit-resolver.ts ***!
  \**********************************************/
/*! exports provided: MEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEditResolver", function() { return MEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");








let MEditResolver = class MEditResolver {
    constructor(userService, router, authService, alertity) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.alertity = alertity;
    }
    resolve(route) {
        return this.userService.getuser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertity.error('Problem to retriving your data for users.');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MEditResolver.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _Services_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"] }
];
MEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MEditResolver);



/***/ }),

/***/ "./src/app/_resolver/m-list-resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolver/m-list-resolver.ts ***!
  \**********************************************/
/*! exports provided: MListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MListResolver", function() { return MListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");







let MListResolver = class MListResolver {
    constructor(userService, router, alertyfy) {
        this.userService = userService;
        this.router = router;
        this.alertyfy = alertyfy;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    resolve(route) {
        return this.userService.getusers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log('Problem to retriving data.9');
            this.router.navigate(['/myjob']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MListResolver.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MListResolver);



/***/ }),

/***/ "./src/app/_resolver/message_resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/_resolver/message_resolver.ts ***!
  \***********************************************/
/*! exports provided: MessageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageResolver", function() { return MessageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");








let MessageResolver = class MessageResolver {
    constructor(userService, authService, router, alertyfy) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertyfy = alertyfy;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    resolve(route) {
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MessageResolver.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MessageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessageResolver);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_myjob_myjob_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/myjob/myjob.component */ "./src/app/Components/myjob/myjob.component.ts");
/* harmony import */ var _Components_mynews_mynews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/mynews/mynews.component */ "./src/app/Components/mynews/mynews.component.ts");
/* harmony import */ var _Components_Memebers_makeafriend_makeafriend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Memebers/makeafriend/makeafriend.component */ "./src/app/Components/Memebers/makeafriend/makeafriend.component.ts");
/* harmony import */ var _Components_mycommunity_mycommunity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/mycommunity/mycommunity.component */ "./src/app/Components/mycommunity/mycommunity.component.ts");
/* harmony import */ var _Components_buyandsale_buyandsale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/buyandsale/buyandsale.component */ "./src/app/Components/buyandsale/buyandsale.component.ts");
/* harmony import */ var _Components_myevents_myevents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/myevents/myevents.component */ "./src/app/Components/myevents/myevents.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guard/auth.guard */ "./src/app/_guard/auth.guard.ts");
/* harmony import */ var _Components_Memebers_friends_friends_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Memebers/friends/friends.component */ "./src/app/Components/Memebers/friends/friends.component.ts");
/* harmony import */ var _Components_Memebers_membersdetails_membersdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/Memebers/membersdetails/membersdetails.component */ "./src/app/Components/Memebers/membersdetails/membersdetails.component.ts");
/* harmony import */ var _resolver_m_detail_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_resolver/m-detail-resolver */ "./src/app/_resolver/m-detail-resolver.ts");
/* harmony import */ var _Components_Memebers_editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Memebers/editprofile/editprofile.component */ "./src/app/Components/Memebers/editprofile/editprofile.component.ts");
/* harmony import */ var _resolver_m_edit_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_resolver/m-edit-resolver */ "./src/app/_resolver/m-edit-resolver.ts");
/* harmony import */ var _resolver_m_list_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_resolver/m-list-resolver */ "./src/app/_resolver/m-list-resolver.ts");
/* harmony import */ var _guard_prevent_unsaved_change__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_guard/prevent_unsaved_change */ "./src/app/_guard/prevent_unsaved_change.ts");
/* harmony import */ var _Components_Memebers_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Memebers/register/register.component */ "./src/app/Components/Memebers/register/register.component.ts");
/* harmony import */ var _resolver_list_like_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_resolver/list_like_resolver */ "./src/app/_resolver/list_like_resolver.ts");
/* harmony import */ var _Components_message_message_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/message/message.component */ "./src/app/Components/message/message.component.ts");
/* harmony import */ var _resolver_message_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_resolver/message_resolver */ "./src/app/_resolver/message_resolver.ts");
/* harmony import */ var _Components_properties_properties_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/properties/properties.component */ "./src/app/Components/properties/properties.component.ts");























const routes = [
    { path: 'home', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _Components_Memebers_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'property', component: _Components_properties_properties_component__WEBPACK_IMPORTED_MODULE_22__["PropertiesComponent"] },
    { path: 'myjob', component: _Components_myjob_myjob_component__WEBPACK_IMPORTED_MODULE_4__["MyjobComponent"] },
    { path: 'mynews', component: _Components_mynews_mynews_component__WEBPACK_IMPORTED_MODULE_5__["MynewsComponent"] },
    { path: 'message', component: _Components_message_message_component__WEBPACK_IMPORTED_MODULE_20__["MessageComponent"], resolve: { messages: _resolver_message_resolver__WEBPACK_IMPORTED_MODULE_21__["MessageResolver"] } },
    { path: 'makeafriend', component: _Components_Memebers_makeafriend_makeafriend_component__WEBPACK_IMPORTED_MODULE_6__["MakeafriendComponent"], resolve: { users: _resolver_list_like_resolver__WEBPACK_IMPORTED_MODULE_19__["LikeListResolver"] } },
    { path: 'mycommunity', component: _Components_mycommunity_mycommunity_component__WEBPACK_IMPORTED_MODULE_7__["MycommunityComponent"] },
    { path: 'buyandsale', component: _Components_buyandsale_buyandsale_component__WEBPACK_IMPORTED_MODULE_8__["BuyandsaleComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'myevents', component: _Components_myevents_myevents_component__WEBPACK_IMPORTED_MODULE_9__["MyeventsComponent"] },
    { path: 'friends/editprofile', component: _Components_Memebers_editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_14__["EditprofileComponent"], resolve: { user: _resolver_m_edit_resolver__WEBPACK_IMPORTED_MODULE_15__["MEditResolver"] }, canDeactivate: [_guard_prevent_unsaved_change__WEBPACK_IMPORTED_MODULE_17__["PreventUnSavedChanges"]] },
    { path: 'friends', component: _Components_Memebers_friends_friends_component__WEBPACK_IMPORTED_MODULE_11__["FriendsComponent"], resolve: { users: _resolver_m_list_resolver__WEBPACK_IMPORTED_MODULE_16__["MListResolver"] } },
    { path: 'friends/:id', component: _Components_Memebers_membersdetails_membersdetails_component__WEBPACK_IMPORTED_MODULE_12__["MembersdetailsComponent"], resolve: { user: _resolver_m_detail_resolver__WEBPACK_IMPORTED_MODULE_13__["MDetailResolver"] } },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");




let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        //This for nav photo user
        const user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            this.authService.changeMemeberPhoto(user.photoUrl);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, CustomHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHammerConfig", function() { return CustomHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_myjob_myjob_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/myjob/myjob.component */ "./src/app/Components/myjob/myjob.component.ts");
/* harmony import */ var _Components_myevents_myevents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/myevents/myevents.component */ "./src/app/Components/myevents/myevents.component.ts");
/* harmony import */ var _Components_mynews_mynews_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/mynews/mynews.component */ "./src/app/Components/mynews/mynews.component.ts");
/* harmony import */ var _Components_mycommunity_mycommunity_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/mycommunity/mycommunity.component */ "./src/app/Components/mycommunity/mycommunity.component.ts");
/* harmony import */ var _Components_properties_properties_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/properties/properties.component */ "./src/app/Components/properties/properties.component.ts");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "./src/app/Components/navbar/navbar.component.ts");
/* harmony import */ var _Components_Memebers_makeafriend_makeafriend_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Memebers/makeafriend/makeafriend.component */ "./src/app/Components/Memebers/makeafriend/makeafriend.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Services_myjobs_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_Services/myjobs.service */ "./src/app/_Services/myjobs.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _Components_buyandsale_buyandsale_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/buyandsale/buyandsale.component */ "./src/app/Components/buyandsale/buyandsale.component.ts");
/* harmony import */ var _Components_Memebers_friends_friends_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/Memebers/friends/friends.component */ "./src/app/Components/Memebers/friends/friends.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _Components_Memebers_dispalycard_dispalycard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/Memebers/dispalycard/dispalycard.component */ "./src/app/Components/Memebers/dispalycard/dispalycard.component.ts");
/* harmony import */ var _Components_Memebers_membersdetails_membersdetails_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/Memebers/membersdetails/membersdetails.component */ "./src/app/Components/Memebers/membersdetails/membersdetails.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_guard/auth.guard */ "./src/app/_guard/auth.guard.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_Services/user.service */ "./src/app/_Services/user.service.ts");
/* harmony import */ var _resolver_m_detail_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_resolver/m-detail-resolver */ "./src/app/_resolver/m-detail-resolver.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _Services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_Services/error.interceptor.service */ "./src/app/_Services/error.interceptor.service.ts");
/* harmony import */ var _Components_Memebers_editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/Memebers/editprofile/editprofile.component */ "./src/app/Components/Memebers/editprofile/editprofile.component.ts");
/* harmony import */ var _Services_alertify_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_Services/alertify.service */ "./src/app/_Services/alertify.service.ts");
/* harmony import */ var _resolver_m_edit_resolver__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_resolver/m-edit-resolver */ "./src/app/_resolver/m-edit-resolver.ts");
/* harmony import */ var _resolver_m_list_resolver__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_resolver/m-list-resolver */ "./src/app/_resolver/m-list-resolver.ts");
/* harmony import */ var _guard_prevent_unsaved_change__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_guard/prevent_unsaved_change */ "./src/app/_guard/prevent_unsaved_change.ts");
/* harmony import */ var _Components_Memebers_photoeditor_photoeditor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Components/Memebers/photoeditor/photoeditor.component */ "./src/app/Components/Memebers/photoeditor/photoeditor.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _Components_Memebers_register_register_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Components/Memebers/register/register.component */ "./src/app/Components/Memebers/register/register.component.ts");
/* harmony import */ var _resolver_list_like_resolver__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_resolver/list_like_resolver */ "./src/app/_resolver/list_like_resolver.ts");
/* harmony import */ var _resolver_message_resolver__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_resolver/message_resolver */ "./src/app/_resolver/message_resolver.ts");
/* harmony import */ var _Components_message_message_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Components/message/message.component */ "./src/app/Components/message/message.component.ts");
/* harmony import */ var _Components_Memebers_messagethreadad_messagethreadad_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Components/Memebers/messagethreadad/messagethreadad.component */ "./src/app/Components/Memebers/messagethreadad/messagethreadad.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");































//import { NgxNavbarModule } from 'ngx-bootstrap-navbar';















function tokenGetter() {
    return localStorage.getItem('token');
}
class CustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _Components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _Components_myjob_myjob_component__WEBPACK_IMPORTED_MODULE_12__["MyjobComponent"],
            _Components_myevents_myevents_component__WEBPACK_IMPORTED_MODULE_13__["MyeventsComponent"],
            _Components_mynews_mynews_component__WEBPACK_IMPORTED_MODULE_14__["MynewsComponent"],
            _Components_mycommunity_mycommunity_component__WEBPACK_IMPORTED_MODULE_15__["MycommunityComponent"],
            _Components_properties_properties_component__WEBPACK_IMPORTED_MODULE_16__["PropertiesComponent"],
            _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
            _Components_Memebers_makeafriend_makeafriend_component__WEBPACK_IMPORTED_MODULE_18__["MakeafriendComponent"],
            _Components_buyandsale_buyandsale_component__WEBPACK_IMPORTED_MODULE_23__["BuyandsaleComponent"],
            _Components_Memebers_friends_friends_component__WEBPACK_IMPORTED_MODULE_24__["FriendsComponent"],
            _Components_Memebers_dispalycard_dispalycard_component__WEBPACK_IMPORTED_MODULE_26__["DispalycardComponent"],
            _Components_Memebers_membersdetails_membersdetails_component__WEBPACK_IMPORTED_MODULE_27__["MembersdetailsComponent"],
            _Components_Memebers_editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_33__["EditprofileComponent"],
            _Components_Memebers_photoeditor_photoeditor_component__WEBPACK_IMPORTED_MODULE_38__["PhotoeditorComponent"],
            _Components_Memebers_register_register_component__WEBPACK_IMPORTED_MODULE_40__["RegisterComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"],
            _Components_message_message_component__WEBPACK_IMPORTED_MODULE_43__["MessageComponent"],
            _Components_Memebers_messagethreadad_messagethreadad_component__WEBPACK_IMPORTED_MODULE_44__["MessagethreadadComponent"],
            _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["TabsModule"].forRoot(),
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
            ngx_gallery__WEBPACK_IMPORTED_MODULE_31__["NgxGalleryModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_39__["FileUploadModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
            // NgxNavbarModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: ['localhost:44346'],
                    blacklistedRoutes: ['localhost:44346/api/auth']
                }
            })
            //BsDropdownModule.forRoot()
        ],
        providers: [
            _Services_myjobs_service__WEBPACK_IMPORTED_MODULE_20__["MyjobsService"],
            _Services_authentication_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"],
            _guard_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"],
            _Services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_32__["ErrorInterceptorService"],
            _resolver_m_detail_resolver__WEBPACK_IMPORTED_MODULE_30__["MDetailResolver"],
            _Services_alertify_service__WEBPACK_IMPORTED_MODULE_34__["AlertifyService"],
            _resolver_m_edit_resolver__WEBPACK_IMPORTED_MODULE_35__["MEditResolver"],
            _resolver_m_list_resolver__WEBPACK_IMPORTED_MODULE_36__["MListResolver"],
            _guard_prevent_unsaved_change__WEBPACK_IMPORTED_MODULE_37__["PreventUnSavedChanges"],
            _resolver_list_like_resolver__WEBPACK_IMPORTED_MODULE_41__["LikeListResolver"],
            _resolver_message_resolver__WEBPACK_IMPORTED_MODULE_42__["MessageResolver"],
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"], useClass: CustomHammerConfig }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://localhost:44346/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dines\Desktop\BasicQuestion\AngularUI\H2HAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map