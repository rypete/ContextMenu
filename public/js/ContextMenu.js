export class ContextMenu {
    constructor(options) {
        this.id = Math.random() * 1000000;
        this.options = options;
        this.windows = [];
        this.width = 150;
        this.style = null;
        this.eventListeners = {
            "click": []
        }

        // Finds the depth of the extend options to know how many windows to precreate.
        const depths = [];
        options.forEach(opt => {
            depths.push(opt.extends && opt.extends.length > 0 ? findDepth(opt.extends, 1) : 0);
        });
        this.depth = Math.max(...depths);


        // Precreate the windows base on the depth found.
        for(let x = 0; x <= this.depth; x++){
            const w = new fin.desktop.Window({url:"about:blank", name: `${x}:${this.id}`, shadow: true, showTaskbarIcon: false, autoShow: false, saveWindowState: false, defaultWidth: this.width, defaultHeight: 50, alwaysOnTop: true, frame: false, resizable: false, maximizable: false}, ()=>{this.decorateWindow(w)});
            this.windows.push(w);

            // If we are the first window we need to add the blurred event to hide the windows on onfocus
            if(x===0) {
                w.addEventListener("blurred", (e)=>{
                    this.hide();
                });
            }
        }
    }

    /**
     * Adds event listeners to the context menu class to allow for passback on when a context item has been clicked.
     * @param {string} action Action to listen for ("click")
     * @param {Function} cb Callback when an item is clicked.
     */
    addEventListener(action = "click", cb) {
        this.eventListeners["click"].push(cb);
    }
    
    /**
     * Sets the CSS style to be used in the windows.
     * @param {CSS} style CSS Style(s)
     */
    setStyle(style){
        this.style = style;

        this.windows.forEach(w => this.decorateWindow(w));
    }

    /**
     * Hides the context menu
     */
    hide(){
        this.windows.forEach( w=>w.hide() );
    }

    /**
     * Shows the context menu at the specified coordinates
     * @param {number} x X Coordinate
     * @param {number} y Y Coordinate
     */
    show(x,y) {
        this.renderWindowContent(this.windows[0], this.options, {x,y});
        this.windows[0].setBounds(x,y, this.width, outerHeight(this.windows[0].getNativeWindow().document.getElementsByTagName("ul")[0]));
        this.windows[0].show();
        this.windows[0].focus();
    };

    /**
     * Applies the CSS to the window.
     * @param {fin.OpenfinWindow} win The Window to Decorate
     */
    decorateWindow(win) {
        if(win.getNativeWindow().document.getElementById("contextStyle")){
            win.getNativeWindow().document.getElementById("contextStyle")[0].remove();
        }
        
        const decorationCssEl = document.createElement("style");
        decorationCssEl.id = "contextStyle";
        decorationCssEl.type = "text/css";
        const css = this.style || ` 
            * {margin:0px; padding:0px;}

            body {
                height: 100%; width:100%;
                overflow:hidden;
            }

            ul {
                list-style: none;
                width:100%;
                margin:1px;
            }   
    
            li {
                height: 24px;
                display: flex;
                align-items: flex-start;
                align-items: center;
                font-family: 'Segoe UI';
                font-size: 12px;
                user-select: none;
                cursor: pointer;
            }
    
            li:hover{
                background-color: #C5C5C5;
            }

            ::-webkit-scrollbar-button{ display: none; height: 13px; border-radius: 0px; background-color: #AAA; } 
            ::-webkit-scrollbar-button:hover{ background-color: #AAA; } 
            ::-webkit-scrollbar-thumb{ background-color: #CCC; } 
            ::-webkit-scrollbar-thumb:hover{ background-color: #CCC; } 
            ::-webkit-scrollbar-track{ background-color: #efefef; } 
            ::-webkit-scrollbar-track:hover{ background-color: #CCC; } 
            ::-webkit-scrollbar{ display:none; }
        `;

        decorationCssEl.appendChild(document.createTextNode(css));
        win.getNativeWindow().document.head.appendChild(decorationCssEl);
    };

    /**
     * Renders in the page content and setup data in the window.
     * @param {fin.OpenfinWindow} win 
     * @param {*} page The Page from the JSON data for this window.
     * @param {x: number, y:number} bounds The x,y bounds of this window.
     */
    renderWindowContent(win, page, bounds){
        // Removes the UL element from the window
        if(win.getNativeWindow().document.body.getElementsByTagName("ul").length > 0){
            win.getNativeWindow().document.body.getElementsByTagName("ul")[0].remove();
        }

        /**
         * The current window number, based on depth of the page.
         */
        const currentWindow = parseInt(win.name.split(":")[0]);

        // Creates the UL element to be added to the window.
        const listEl = document.createElement("ul");

        // For each option in the page we create an LI element + event listeners for hover
        page.forEach((opt, i) => {
            const liEl = document.createElement("li");
            liEl.textContent = opt.label;

            liEl.onmousedown = ()=>{
                if(!opt.extends || opt.extends.length === 0){
                    this.eventListeners["click"].forEach(cb => cb(opt));
                    this.hide();
                }
            };

            liEl.onmouseenter =  (evt) =>{
                // Hide all further windows in case of mouse moving backwards in windows (Current - 1);
                for(let x = currentWindow + 2; x < this.windows.length; x++){
                    this.windows[x].hide();
                }

                // If there are extendables from this page item then we need to create listeners for the next window to be created
                if(opt.extends && opt.extends.length > 0){
                    // x, Y of the next window
                    const newX = bounds.x + this.width;
                    // Y based on where the current li is at
                    const newY = bounds.y + (i * outerHeight(this.windows[currentWindow].getNativeWindow().document.getElementsByTagName("li")[0]));

                    this.renderWindowContent(this.windows[currentWindow+1], opt.extends, {x: newX, y: newY});
                    this.windows[currentWindow+1].setBounds(newX, newY, this.width, outerHeight(this.windows[currentWindow+1].getNativeWindow().document.getElementsByTagName("ul")[0]));
                    this.windows[currentWindow+1].show(true);
                    this.windows[currentWindow+1].bringToFront();
                } else {
                    if(this.windows[currentWindow+1]){
                        this.windows[currentWindow+1].hide();
                    }
                }
            };

            listEl.appendChild(liEl);
        });

        win.getNativeWindow().document.body.appendChild(listEl);
    }

}

/**
 * Finds the depth of extendables in our JSON data.
 * @param {Array} a Array to calculate against
 * @param {number} count The current count of the branch
 */
const findDepth = (a, count) => {
    return Math.max(...a.map((ext) => {
        return ext.extends && ext.extends.length > 0 ? findDepth(ext.extends, count+1) : count
    }));
}

/**
 * Finds the total height of an element (includes margin + border + padding);
 * @param {HTMLElement} el 
 */
const outerHeight = (el) => {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);
  
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }
