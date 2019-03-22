/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 1.2.2(5618dbdb4f72c31da0555b463daa3b053decf40a)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/json/workerManager",["require","exports"],e)}(function(e,n){function t(e){var n,t,o=new r(function(e,r){n=e,t=r},function(){});return e.then(n,t),o}var r=monaco.Promise,o=12e4,i=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>o&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o;return t(this._getClient().then(function(e){o=e}).then(function(t){return e._worker.withSyncedResources(n)}).then(function(e){return o}))},e}();n.WorkerManager=i}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}(function(e,n){var t;!function(e){function n(e,n){return{line:e,character:n}}function t(e){var n=e;return A.defined(n)&&A.number(n.line)&&A.number(n.character)}e.create=n,e.is=t}(t=n.Position||(n.Position={}));var r;!function(e){function n(e,n,r,o){if(A.number(e)&&A.number(n)&&A.number(r)&&A.number(o))return{start:t.create(e,n),end:t.create(r,o)};if(t.is(e)&&t.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+r+", "+o+"]")}function r(e){var n=e;return A.defined(n)&&t.is(n.start)&&t.is(n.end)}e.create=n,e.is=r}(r=n.Range||(n.Range={}));var o;!function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return A.defined(n)&&r.is(n.range)&&(A.string(n.uri)||A.undefined(n.uri))}e.create=n,e.is=t}(o=n.Location||(n.Location={}));var i;!function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(i=n.DiagnosticSeverity||(n.DiagnosticSeverity={}));var a;!function(e){function n(e,n,t,r,o){var i={range:e,message:n};return A.defined(t)&&(i.severity=t),A.defined(r)&&(i.code=r),A.defined(o)&&(i.source=o),i}function t(e){var n=e;return A.defined(n)&&r.is(n.range)&&A.string(n.message)&&(A.number(n.severity)||A.undefined(n.severity))&&(A.number(n.code)||A.string(n.code)||A.undefined(n.code))&&(A.string(n.source)||A.undefined(n.source))}e.create=n,e.is=t}(a=n.Diagnostic||(n.Diagnostic={}));var c;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var o={title:e,command:n};return A.defined(t)&&t.length>0&&(o.arguments=t),o}function t(e){var n=e;return A.defined(n)&&A.string(n.title)&&A.string(n.title)}e.create=n,e.is=t}(c=n.Command||(n.Command={}));var u;!function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}e.replace=n,e.insert=t,e.del=r}(u=n.TextEdit||(n.TextEdit={}));var s;!function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return A.defined(n)&&p.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(s=n.TextDocumentEdit||(n.TextDocumentEdit={}));var d=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(u.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(u.replace(e,n))},e.prototype["delete"]=function(e){this.edits.push(u.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),f=function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e?(this._workspaceEdit=e,e.changes.forEach(function(e){var t=new d(e.edits);n._textEditChanges[e.textDocument.uri]=t})):this._workspaceEdit={changes:[]}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(p.is(e)){var n=e,t=this._textEditChanges[n.uri];if(!t){var r=[],o={textDocument:n,edits:r};this._workspaceEdit.changes.push(o),t=new d(r),this._textEditChanges[n.uri]=t}return t}return this._textEditChanges[e]},e}();n.WorkspaceChange=f;var l;!function(e){function n(e){return{uri:e}}function t(e){var n=e;return A.defined(n)&&A.string(n.uri)}e.create=n,e.is=t}(l=n.TextDocumentIdentifier||(n.TextDocumentIdentifier={}));var p;!function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return A.defined(n)&&A.string(n.uri)&&A.number(n.version)}e.create=n,e.is=t}(p=n.VersionedTextDocumentIdentifier||(n.VersionedTextDocumentIdentifier={}));var m;!function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return A.defined(n)&&A.string(n.uri)&&A.string(n.languageId)&&A.number(n.version)&&A.string(n.text)}e.create=n,e.is=t}(m=n.TextDocumentItem||(n.TextDocumentItem={}));var g;!function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18}(g=n.CompletionItemKind||(n.CompletionItemKind={}));var h;!function(e){e.PlainText=1,e.Snippet=2}(h=n.InsertTextFormat||(n.InsertTextFormat={}));var v;!function(e){function n(e){return{label:e}}e.create=n}(v=n.CompletionItem||(n.CompletionItem={}));var y;!function(e){function n(e,n){return{items:e?e:[],isIncomplete:!!n}}e.create=n}(y=n.CompletionList||(n.CompletionList={}));var k;!function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n}(k=n.MarkedString||(n.MarkedString={}));var C;!function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(C=n.ParameterInformation||(n.ParameterInformation={}));var b;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var o={label:e};return A.defined(n)&&(o.documentation=n),A.defined(t)?o.parameters=t:o.parameters=[],o}e.create=n}(b=n.SignatureInformation||(n.SignatureInformation={}));var E;!function(e){e.Text=1,e.Read=2,e.Write=3}(E=n.DocumentHighlightKind||(n.DocumentHighlightKind={}));var T;!function(e){function n(e,n){var t={range:e};return A.number(n)&&(t.kind=n),t}e.create=n}(T=n.DocumentHighlight||(n.DocumentHighlight={}));var x;!function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18}(x=n.SymbolKind||(n.SymbolKind={}));var _;!function(e){function n(e,n,t,r,o){var i={name:e,kind:n,location:{uri:r,range:t}};return o&&(i.containerName=o),i}e.create=n}(_=n.SymbolInformation||(n.SymbolInformation={}));var S;!function(e){function n(e){return{diagnostics:e}}function t(e){var n=e;return A.defined(n)&&A.typedArray(n.diagnostics,a.is)}e.create=n,e.is=t}(S=n.CodeActionContext||(n.CodeActionContext={}));var O;!function(e){function n(e,n){var t={range:e};return A.defined(n)&&(t.data=n),t}function t(e){var n=e;return A.defined(n)&&r.is(n.range)&&(A.undefined(n.command)||c.is(n.command))}e.create=n,e.is=t}(O=n.CodeLens||(n.CodeLens={}));var w;!function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return A.defined(n)&&A.number(n.tabSize)&&A["boolean"](n.insertSpaces)}e.create=n,e.is=t}(w=n.FormattingOptions||(n.FormattingOptions={}));var I=function(){function e(){}return e}();n.DocumentLink=I,function(e){function n(e,n){return{range:e,target:n}}function t(e){var n=e;return A.defined(n)&&r.is(n.range)&&(A.undefined(n.target)||A.string(n.target))}e.create=n,e.is=t}(I=n.DocumentLink||(n.DocumentLink={})),n.DocumentLink=I,n.EOL=["\n","\r\n","\r"];var K;!function(e){function n(e,n,t,r){return new L(e,n,t,r)}function t(e){var n=e;return!!(A.defined(n)&&A.string(n.uri)&&(A.undefined(n.languageId)||A.string(n.languageId))&&A.number(n.lineCount)&&A.func(n.getText)&&A.func(n.positionAt)&&A.func(n.offsetAt))}e.create=n,e.is=t}(K=n.TextDocument||(n.TextDocument={}));var N;!function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(N=n.TextDocumentSaveReason||(n.TextDocumentSaveReason={}));var A,L=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(){return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var o=n.charAt(r);t="\r"===o||"\n"===o,"\r"===o&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),r=0,o=n.length;if(0===o)return t.create(0,e);for(;r<o;){var i=Math.floor((r+o)/2);n[i]>e?o=i:r=i+1}var a=r-1;return t.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){function n(e){return"undefined"!=typeof e}function t(e){return"undefined"==typeof e}function r(e){return e===!0||e===!1}function o(e){return"[object String]"===u.call(e)}function i(e){return"[object Number]"===u.call(e)}function a(e){return"[object Function]"===u.call(e)}function c(e,n){return Array.isArray(e)&&e.every(n)}var u=Object.prototype.toString;e.defined=n,e.undefined=t,e["boolean"]=r,e.string=o,e.number=i,e.func=a,e.typedArray=c}(A||(A={}))}),define("vscode-languageserver-types",["vscode-languageserver-types/main"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/json/languageFeatures",["require","exports","vscode-languageserver-types"],e)}(function(e,n){function t(e){switch(e){case m.DiagnosticSeverity.Error:return monaco.Severity.Error;case m.DiagnosticSeverity.Warning:return monaco.Severity.Warning;case m.DiagnosticSeverity.Information:case m.DiagnosticSeverity.Hint:default:return monaco.Severity.Info}}function r(e,n){var r="number"==typeof n.code?String(n.code):n.code;return{severity:t(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:r,source:n.source}}function o(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function i(e){if(e)return{start:o(e.getStartPosition()),end:o(e.getEndPosition())}}function a(e){if(e)return new h(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function c(e){var n=monaco.languages.CompletionItemKind;switch(e){case m.CompletionItemKind.Text:return n.Text;case m.CompletionItemKind.Method:return n.Method;case m.CompletionItemKind.Function:return n.Function;case m.CompletionItemKind.Constructor:return n.Constructor;case m.CompletionItemKind.Field:return n.Field;case m.CompletionItemKind.Variable:return n.Variable;case m.CompletionItemKind.Class:return n.Class;case m.CompletionItemKind.Interface:return n.Interface;case m.CompletionItemKind.Module:return n.Module;case m.CompletionItemKind.Property:return n.Property;case m.CompletionItemKind.Unit:return n.Unit;case m.CompletionItemKind.Value:return n.Value;case m.CompletionItemKind.Enum:return n.Enum;case m.CompletionItemKind.Keyword:return n.Keyword;case m.CompletionItemKind.Snippet:return n.Snippet;case m.CompletionItemKind.Color:return n.Color;case m.CompletionItemKind.File:return n.File;case m.CompletionItemKind.Reference:return n.Reference}return n.Property}function u(e){if(e)return{range:a(e.range),text:e.newText}}function s(e){if(e)return Array.isArray(e)?e:[e]}function d(e){return{uri:g.parse(e.uri),range:a(e.range)}}function f(e){var n=monaco.languages.SymbolKind;switch(e){case m.SymbolKind.File:return n.Array;case m.SymbolKind.Module:return n.Module;case m.SymbolKind.Namespace:return n.Namespace;case m.SymbolKind.Package:return n.Package;case m.SymbolKind.Class:return n.Class;case m.SymbolKind.Method:return n.Method;case m.SymbolKind.Property:return n.Property;case m.SymbolKind.Field:return n.Field;case m.SymbolKind.Constructor:return n.Constructor;case m.SymbolKind.Enum:return n.Enum;case m.SymbolKind.Interface:return n.Interface;case m.SymbolKind.Function:return n.Function;case m.SymbolKind.Variable:return n.Variable;case m.SymbolKind.Constant:return n.Constant;case m.SymbolKind.String:return n.String;case m.SymbolKind.Number:return n.Number;case m.SymbolKind.Boolean:return n.Boolean;case m.SymbolKind.Array:return n.Array}return n.Function}function l(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}function p(e,n){return n.cancel&&e.onCancellationRequested(function(){return n.cancel()}),n}var m=e("vscode-languageserver-types"),g=monaco.Uri,h=monaco.Range,v=function(){function e(e,n){var t=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var r=function(e){var n=e.getModeId();if(n===t._languageId){var r;t._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(r),r=setTimeout(function(){return t._doValidate(e.uri,n)},500)}),t._doValidate(e.uri,n)}},o=function(e){monaco.editor.setModelMarkers(e,t._languageId,[]);var n=e.uri.toString(),r=t._listener[n];r&&(r.dispose(),delete t._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(r)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e),t._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),r(e.model),t._resetSchema(e.model.uri)})),this._disposables.push({dispose:function(){for(var e in t._listener)t._listener[e].dispose()}}),monaco.editor.getModels().forEach(r)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(n){n.resetSchema(e.toString())})},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var o=t.map(function(n){return r(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,o)})}).then(void 0,function(e){console.error(e)})},e}();n.DiagnostcsAdapter=v;var y=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){var r=(e.getWordUntilPosition(n),e.uri);return p(t,this._worker(r).then(function(e){return e.doComplete(r.toString(),o(n))}).then(function(e){if(e){var n=e.items.map(function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:c(e.kind)};return e.textEdit&&(n.range=a(e.textEdit.range),n.insertText=e.textEdit.newText),e.insertTextFormat===m.InsertTextFormat.Snippet&&(n.insertText={value:n.insertText}),n});return{isIncomplete:e.isIncomplete,items:n}}}))},e}();n.CompletionAdapter=y;var k=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return p(t,this._worker(r).then(function(e){return e.doHover(r.toString(),o(n))}).then(function(e){if(e)return{range:a(e.range),contents:s(e.contents)}}))},e}();n.HoverAdapter=k;var C=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return p(n,this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,containerName:e.containerName,kind:f(e.kind),location:d(e.location)}})}))},e}();n.DocumentSymbolAdapter=C;var b=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return p(t,this._worker(r).then(function(e){return e.format(r.toString(),null,l(n)).then(function(e){if(e&&0!==e.length)return e.map(u)})}))},e}();n.DocumentFormattingEditProvider=b;var E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var o=e.uri;return p(r,this._worker(o).then(function(e){return e.format(o.toString(),i(n),l(t)).then(function(e){if(e&&0!==e.length)return e.map(u)})}))},e}();n.DocumentRangeFormattingEditProvider=E}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vscode-nls/vscode-nls",["require","exports"],e)}(function(e,n){function t(e,n){var t;return t=0===n.length?e:e.replace(/\{(\d+)\}/g,function(e,t){var r=t[0];return"undefined"!=typeof n[r]?n[r]:e})}function r(e,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return t(n,r)}function o(e){return r}function i(e){return o}n.loadMessageBundle=o,n.config=i}),define("vscode-nls",["vscode-nls/vscode-nls"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("jsonc-parser/main",["require","exports","vscode-nls"],e)}(function(e,n){function t(e,n){function t(n,t){for(var r=0,o=0;r<n||!t;){var i=e.charCodeAt(l);if(i>=48&&i<=57)o=16*o+i-48;else if(i>=65&&i<=70)o=16*o+i-65+10;else{if(!(i>=97&&i<=102))break;o=16*o+i-97+10}l++,r++}return r<n&&(o=-1),o}function a(e){l=e,m="",h=0,v=y.Unknown,k=g.None}function c(){var n=l;if(48===e.charCodeAt(l))l++;else for(l++;l<e.length&&i(e.charCodeAt(l));)l++;if(l<e.length&&46===e.charCodeAt(l)){if(l++,!(l<e.length&&i(e.charCodeAt(l))))return k=g.UnexpectedEndOfNumber,e.substring(n,l);for(l++;l<e.length&&i(e.charCodeAt(l));)l++}var t=l;if(l<e.length&&(69===e.charCodeAt(l)||101===e.charCodeAt(l)))if(l++,(l<e.length&&43===e.charCodeAt(l)||45===e.charCodeAt(l))&&l++,l<e.length&&i(e.charCodeAt(l))){for(l++;l<e.length&&i(e.charCodeAt(l));)l++;t=l}else k=g.UnexpectedEndOfNumber;return e.substring(n,t)}function u(){for(var n="",r=l;;){if(l>=p){n+=e.substring(r,l),k=g.UnexpectedEndOfString;break}var i=e.charCodeAt(l);if(34===i){n+=e.substring(r,l),l++;break}if(92!==i){if(o(i)){n+=e.substring(r,l),k=g.UnexpectedEndOfString;break}l++}else{if(n+=e.substring(r,l),l++,l>=p){k=g.UnexpectedEndOfString;break}switch(i=e.charCodeAt(l++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var a=t(4,!0);a>=0?n+=String.fromCharCode(a):k=g.InvalidUnicode;break;default:k=g.InvalidEscapeCharacter}r=l}}return n}function s(){if(m="",k=g.None,h=l,l>=p)return h=p,v=y.EOF;var n=e.charCodeAt(l);if(r(n)){do l++,m+=String.fromCharCode(n),n=e.charCodeAt(l);while(r(n));return v=y.Trivia}if(o(n))return l++,m+=String.fromCharCode(n),13===n&&10===e.charCodeAt(l)&&(l++,m+="\n"),v=y.LineBreakTrivia;switch(n){case 123:return l++,v=y.OpenBraceToken;case 125:return l++,v=y.CloseBraceToken;case 91:return l++,v=y.OpenBracketToken;case 93:return l++,v=y.CloseBracketToken;case 58:return l++,v=y.ColonToken;case 44:return l++,v=y.CommaToken;case 34:return l++,m=u(),v=y.StringLiteral;case 47:var t=l-1;if(47===e.charCodeAt(l+1)){for(l+=2;l<p&&!o(e.charCodeAt(l));)l++;return m=e.substring(t,l),v=y.LineCommentTrivia}if(42===e.charCodeAt(l+1)){l+=2;for(var a=p-1,s=!1;l<a;){var f=e.charCodeAt(l);if(42===f&&47===e.charCodeAt(l+1)){l+=2,s=!0;break}l++}return s||(l++,k=g.UnexpectedEndOfComment),m=e.substring(t,l),v=y.BlockCommentTrivia}return m+=String.fromCharCode(n),l++,v=y.Unknown;case 45:if(m+=String.fromCharCode(n),l++,l===p||!i(e.charCodeAt(l)))return v=y.Unknown;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return m+=c(),v=y.NumericLiteral;default:for(;l<p&&d(n);)l++,n=e.charCodeAt(l);if(h!==l){switch(m=e.substring(h,l)){case"true":return v=y.TrueKeyword;case"false":return v=y.FalseKeyword;case"null":return v=y.NullKeyword}return v=y.Unknown}return m+=String.fromCharCode(n),l++,v=y.Unknown}}function d(e){if(r(e)||o(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:return!1}return!0}function f(){var e;do e=s();while(e>=y.LineCommentTrivia&&e<=y.Trivia);return e}void 0===n&&(n=!1);var l=0,p=e.length,m="",h=0,v=y.Unknown,k=g.None;return{setPosition:a,getPosition:function(){return l},scan:n?f:s,getToken:function(){return v},getTokenValue:function(){return m},getTokenOffset:function(){return h},getTokenLength:function(){return l-h},getTokenError:function(){return k}}}function r(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function o(e){return 10===e||13===e||8232===e||8233===e}function i(e){return e>=48&&e<=57}function a(e,n){var r,o,i=t(e),a=[],c=0;do switch(o=i.getPosition(),r=i.scan()){case y.LineCommentTrivia:case y.BlockCommentTrivia:case y.EOF:c!==o&&a.push(e.substring(c,o)),void 0!==n&&a.push(i.getTokenValue().replace(/[^\r\n]/g,n)),c=i.getPosition()}while(r!==y.EOF);return a.join("")}function c(e){switch(e){case k.InvalidSymbol:return v("error.invalidSymbol","Invalid symbol");case k.InvalidNumberFormat:return v("error.invalidNumberFormat","Invalid number format");case k.PropertyNameExpected:return v("error.propertyNameExpected","Property name expected");case k.ValueExpected:return v("error.valueExpected","Value expected");case k.ColonExpected:return v("error.colonExpected","Colon expected");case k.CommaExpected:return v("error.commaExpected","Comma expected");case k.CloseBraceExpected:return v("error.closeBraceExpected","Closing brace expected");case k.CloseBracketExpected:return v("error.closeBracketExpected","Closing bracket expected");case k.EndOfFileExpected:return v("error.endOfFileExpected","End of file expected");default:return""}}function u(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return"null"}}function s(e,n){function t(e,n,t,r){a.value=e,a.offset=n,a.length=t,a.type=r,a.columnOffset=void 0,i=a}var r=[],o=new Object,i=void 0,a={value:void 0,offset:void 0,length:void 0,type:void 0},c=!1;try{m(e,{onObjectBegin:function(e,t){if(n<=e)throw o;i=void 0,c=n>e,r.push("")},onObjectProperty:function(e,i,a){if(n<i)throw o;if(t(e,i,a,"property"),r[r.length-1]=e,n<=i+a)throw o},onObjectEnd:function(e,t){if(n<=e)throw o;i=void 0,r.pop()},onArrayBegin:function(e,t){if(n<=e)throw o;i=void 0,r.push(0)},onArrayEnd:function(e,t){if(n<=e)throw o;i=void 0,r.pop()},onLiteralValue:function(e,r,i){if(n<r)throw o;if(t(e,r,i,u(e)),n<=r+i)throw o},onSeparator:function(e,t,a){if(n<=t)throw o;if(":"===e&&"property"===i.type)i.columnOffset=t,c=!1,i=void 0;else if(","===e){var u=r[r.length-1];"number"==typeof u?r[r.length-1]=u+1:(c=!0,r[r.length-1]=""),i=void 0}}})}catch(s){if(s!==o)throw s}return""===r[r.length-1]&&r.pop(),{path:r,previousNode:i,isAtPropertyKey:c,matches:function(e){for(var n=0,t=0;n<e.length&&t<r.length;t++)if(e[n]===r[t]||"*"===e[n])n++;else if("**"!==e[n])return!1;return n===e.length}}}function d(e,n,t){function r(e){Array.isArray(i)?i.push(e):o&&(i[o]=e)}void 0===n&&(n=[]);var o=null,i=[],a=[],c={onObjectBegin:function(){var e={};r(e),a.push(i),i=e,o=null},onObjectProperty:function(e){o=e},onObjectEnd:function(){i=a.pop()},onArrayBegin:function(){var e=[];r(e),a.push(i),i=e,o=null},onArrayEnd:function(){i=a.pop()},onLiteralValue:r,onError:function(e){n.push({error:e})}};return m(e,c,t),i[0]}function f(e,n,t){function r(e){"property"===i.type&&(i.length=e-i.offset,i=i.parent)}function o(e){return i.children.push(e),e}void 0===n&&(n=[]);var i={type:"array",offset:-1,length:-1,children:[]},a={onObjectBegin:function(e){i=o({type:"object",offset:e,length:-1,parent:i,children:[]})},onObjectProperty:function(e,n,t){i=o({type:"property",offset:n,length:-1,parent:i,children:[]}),i.children.push({type:"string",value:e,offset:n,length:t,parent:i})},onObjectEnd:function(e,n){i.length=e+n-i.offset,i=i.parent,r(e+n)},onArrayBegin:function(e,n){i=o({type:"array",offset:e,length:-1,parent:i,children:[]})},onArrayEnd:function(e,n){i.length=e+n-i.offset,i=i.parent,r(e+n)},onLiteralValue:function(e,n,t){o({type:u(e),offset:n,length:t,parent:i,value:e}),r(n+t)},onSeparator:function(e,n,t){"property"===i.type&&(":"===e?i.columnOffset=n:","===e&&r(n))},onError:function(e){n.push({error:e})}};m(e,a,t);var c=i.children[0];return c&&delete c.parent,c}function l(e,n){if(e){for(var t=e,r=0,o=n;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==t.type)return;for(var a=!1,c=0,u=t.children;c<u.length;c++){var s=u[c];if(s.children[0].value===i){t=s.children[1],a=!0;break}}if(!a)return}else{var d=i;if("array"!==t.type||d<0||d>=t.children.length)return;t=t.children[d]}}return t}}function p(e){if("array"===e.type)return e.children.map(p);if("object"===e.type){for(var n={},t=0,r=e.children;t<r.length;t++){var o=r[t];n[o.children[0].value]=p(o.children[1])}return n}return e.value}function m(e,n,r){function o(e){return e?function(){return e(m.getTokenOffset(),m.getTokenLength())}:function(){return!0}}function i(e){return e?function(n){return e(n,m.getTokenOffset(),m.getTokenLength())}:function(){return!0}}function a(){for(;;){var e=m.scan();switch(e){case y.LineCommentTrivia:case y.BlockCommentTrivia:_&&c(k.InvalidSymbol);break;case y.Unknown:c(k.InvalidSymbol);break;case y.Trivia:case y.LineBreakTrivia:break;default:return e}}}function c(e,n,t){if(void 0===n&&(n=[]),void 0===t&&(t=[]),x(e),n.length+t.length>0)for(var r=m.getToken();r!==y.EOF;){if(n.indexOf(r)!==-1){a();break}if(t.indexOf(r)!==-1)break;r=a()}}function u(e){var n=m.getTokenValue();return e?E(n):h(n),a(),!0}function s(){switch(m.getToken()){case y.NumericLiteral:var e=0;try{e=JSON.parse(m.getTokenValue()),"number"!=typeof e&&(c(k.InvalidNumberFormat),e=0)}catch(n){c(k.InvalidNumberFormat)}E(e);break;case y.NullKeyword:E(null);break;case y.TrueKeyword:E(!0);break;case y.FalseKeyword:E(!1);break;default:return!1}return a(),!0}function d(){return m.getToken()!==y.StringLiteral?(c(k.PropertyNameExpected,[],[y.CloseBraceToken,y.CommaToken]),!1):(u(!1),m.getToken()===y.ColonToken?(T(":"),a(),p()||c(k.ValueExpected,[],[y.CloseBraceToken,y.CommaToken])):c(k.ColonExpected,[],[y.CloseBraceToken,y.CommaToken]),!0)}function f(){g(),a();for(var e=!1;m.getToken()!==y.CloseBraceToken&&m.getToken()!==y.EOF;)m.getToken()===y.CommaToken?(e||c(k.ValueExpected,[],[]),T(","),a()):e&&c(k.CommaExpected,[],[]),d()||c(k.ValueExpected,[],[y.CloseBraceToken,y.CommaToken]),e=!0;return v(),m.getToken()!==y.CloseBraceToken?c(k.CloseBraceExpected,[y.CloseBraceToken],[]):a(),!0}function l(){C(),a();for(var e=!1;m.getToken()!==y.CloseBracketToken&&m.getToken()!==y.EOF;)m.getToken()===y.CommaToken?(e||c(k.ValueExpected,[],[]),T(","),a()):e&&c(k.CommaExpected,[],[]),p()||c(k.ValueExpected,[],[y.CloseBracketToken,y.CommaToken]),e=!0;return b(),m.getToken()!==y.CloseBracketToken?c(k.CloseBracketExpected,[y.CloseBracketToken],[]):a(),!0}function p(){switch(m.getToken()){case y.OpenBracketToken:return l();case y.OpenBraceToken:return f();case y.StringLiteral:return u(!0);default:return s()}}var m=t(e,!1),g=o(n.onObjectBegin),h=i(n.onObjectProperty),v=o(n.onObjectEnd),C=o(n.onArrayBegin),b=o(n.onArrayEnd),E=i(n.onLiteralValue),T=i(n.onSeparator),x=i(n.onError),_=r&&r.disallowComments;return a(),m.getToken()===y.EOF||(p()?(m.getToken()!==y.EOF&&c(k.EndOfFileExpected,[],[]),!0):(c(k.ValueExpected,[],[]),!1))}var g,h=e("vscode-nls"),v=h.loadMessageBundle();!function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter"}(g=n.ScanError||(n.ScanError={}));var y;!function(e){e[e.Unknown=0]="Unknown",e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.EOF=16]="EOF"}(y=n.SyntaxKind||(n.SyntaxKind={})),n.createScanner=t,n.stripComments=a;var k;!function(e){e[e.InvalidSymbol=0]="InvalidSymbol",e[e.InvalidNumberFormat=1]="InvalidNumberFormat",e[e.PropertyNameExpected=2]="PropertyNameExpected",e[e.ValueExpected=3]="ValueExpected",e[e.ColonExpected=4]="ColonExpected",e[e.CommaExpected=5]="CommaExpected",e[e.CloseBraceExpected=6]="CloseBraceExpected",e[e.CloseBracketExpected=7]="CloseBracketExpected",e[e.EndOfFileExpected=8]="EndOfFileExpected"}(k=n.ParseErrorCode||(n.ParseErrorCode={})),n.getParseErrorMessage=c,n.getLocation=s,n.parse=d,n.parseTree=f,n.findNodeAtLocation=l,n.getNodeValue=p,n.visit=m}),define("jsonc-parser",["jsonc-parser/main"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/json/tokenization",["require","exports","jsonc-parser"],e)}(function(e,n){function t(e){return{getInitialState:function(){return new i(null,null,(!1))},tokenize:function(n,t,o,i){return r(e,n,t,o,i)}}}function r(e,t,r,a,c){void 0===a&&(a=0);var u=0,s=!1;switch(r.scanError){case o.ScanError.UnexpectedEndOfString:t='"'+t,u=1;break;case o.ScanError.UnexpectedEndOfComment:t="/*"+t,u=2}var d,f,l=o.createScanner(t),p=r.lastWasColon;for(f={tokens:[],endState:r.clone()};;){var m=a+l.getPosition(),g="";if(d=l.scan(),d===o.SyntaxKind.EOF)break;if(m===a+l.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(l.getPosition(),3));switch(s&&(m-=u),s=u>0,d){case o.SyntaxKind.OpenBraceToken:g=n.TOKEN_DELIM_OBJECT,p=!1;break;case o.SyntaxKind.CloseBraceToken:g=n.TOKEN_DELIM_OBJECT,p=!1;break;case o.SyntaxKind.OpenBracketToken:g=n.TOKEN_DELIM_ARRAY,p=!1;break;case o.SyntaxKind.CloseBracketToken:g=n.TOKEN_DELIM_ARRAY,p=!1;break;case o.SyntaxKind.ColonToken:g=n.TOKEN_DELIM_COLON,
p=!0;break;case o.SyntaxKind.CommaToken:g=n.TOKEN_DELIM_COMMA,p=!1;break;case o.SyntaxKind.TrueKeyword:case o.SyntaxKind.FalseKeyword:g=n.TOKEN_VALUE_BOOLEAN,p=!1;break;case o.SyntaxKind.NullKeyword:g=n.TOKEN_VALUE_NULL,p=!1;break;case o.SyntaxKind.StringLiteral:g=p?n.TOKEN_VALUE_STRING:n.TOKEN_PROPERTY_NAME,p=!1;break;case o.SyntaxKind.NumericLiteral:g=n.TO`�$    `�$                    �b"            �`"    ȳ$            ��$    �
      ��$            se o.SyntaxKind.BlockCommentTrivia:g=n.TOKEN_COMMENT_BLOCK}f.endState=new i(r.getStateData(),l.getTokenError(),p),f.tokens.push({startIndex:m,scopes:g})}return f}var o=e("jsonc-parser");n.createTokenizationSupport=t,n.TOKEN_DELIM_OBJECT="delimiter.bracket.json",n.TOKEN_DELIM_ARRAY="delimiter.array.json",n.TOKEN_DELIM_COLON="delimiter.colon.json",n.TOKEN_DELIM_COMMA="delimiter.comma.json",n.TOKEN_VALUE_BOOLEAN="keyword.json",n.TOKEN_VALUE_NULL="keyword.json",n.TOKEN_VALUE_STRING="string.value.json",n.TOKEN_VALUE_NUMBER="number.json",n.TOKEN_PROPERTY_NAME="string.key.json",n.TOKEN_COMMENT_BLOCK="comment.block.json",n.TOKEN_COMMENT_LINE="comment.line.json";var i=function(){function e(e,n,t){this._state=e,this.scanError=n,this.lastWasColon=t}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(n){return n===this||!!(n&&n instanceof e)&&(this.scanError===n.scanError&&this.lastWasColon===n.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}()}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/json/jsonMode",["require","exports","./workerManager","./languageFeatures","./tokenization"],e)}(function(e,n){function t(e){var n=[],t=new r.WorkerManager(e);n.push(t);var c=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},u=e.languageId;n.push(monaco.languages.registerCompletionItemProvider(u,new o.CompletionAdapter(c))),n.push(monaco.languages.registerHoverProvider(u,new o.HoverAdapter(c))),n.push(monaco.languages.registerDocumentSymbolProvider(u,new o.DocumentSymbolAdapter(c))),n.push(monaco.languages.registerDocumentFormattingEditProvider(u,new o.DocumentFormattingEditProvider(c))),n.push(monaco.languages.registerDocumentRangeFormattingEditProvider(u,new o.DocumentRangeFormattingEditProvider(c))),n.push(new o.DiagnostcsAdapter(u,c)),n.push(monaco.languages.setTokensProvider(u,i.createTokenizationSupport(!0))),n.push(monaco.languages.setLanguageConfiguration(u,a))}var r=e("./workerManager"),o=e("./languageFeatures"),i=e("./tokenization");n.setupMode=t;var a={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}});