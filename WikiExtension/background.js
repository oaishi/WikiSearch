var serverhost = 'http://127.0.0.1:8000';

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		  
			  
			var url = serverhost + '/wiki/get_wiki_summary/?topic='+ encodeURIComponent(request.topic) ;
			
			console.log(url);
			
			//var url = "http://127.0.0.1:8000/wiki/get_wiki_summary/?topic=%22COVID19%22"	
			fetch(url)
			.then(response => response.json())
			.then(response => sendResponse({farewell: response}))
			.catch(error => console.log(error))
				
			return true;  // Will respond asynchronously.
		  
	});

	