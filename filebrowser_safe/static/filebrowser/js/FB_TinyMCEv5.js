var FileBrowserDialogue = {
    fileSubmit : function (FileURL) {
        console.log('on submit', FileURL);
        window.parent.postMessage({
          action: 'chooseUrl',
          content: FileURL
        }, '*');

        window.parent.postMessage({
          mceAction: 'close',
        }, '*');
    },
}
