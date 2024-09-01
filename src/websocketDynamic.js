export function connectWebSocketDynamic(url, params, setData, wsRef, wss) {
    const ws = wsRef.current;
    //console.log(wss);
    
    // Check if the WebSocket instance is not already open or does not exist
    if (!ws || ws.readyState === WebSocket.CLOSED) {
        if (ws && ws.readyState !== WebSocket.CLOSED) {
            ws.close(); // Close the previous connection if it's not closed
        }

        console.log("display");
        // Create a new WebSocket instance
        // if(wss == 1)
        //     {
                console.log("new connection");
                wsRef.current = new WebSocket(url);
            //}

        const newWs = wsRef.current;

        newWs.onopen = () => {
            console.log('Connected to WebSocket server');
            if (params) {
                newWs.send(JSON.stringify(params));
            }
        };

        newWs.onmessage = (response) => {
            try {
                const newData = JSON.parse(response.data);
                setData(newData);
            } catch (e) {
                console.error('Error parsing WebSocket message:', e);
            }
        };

        newWs.onerror = (error) => {
            console.error('WebSocket error:', error);
            // Ensure WebSocket is closed on error
            newWs.close();
        };

        newWs.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return newWs;
    }
    // if(wss == 1)
    // {
    //     if (params && ws.readyState === WebSocket.OPEN) {
    //         ws.send(JSON.stringify(params));
    //     }
    // }
    //else {
    //     console.log("onlyparam");
    //     // WebSocket is already open, send updated parameters
    //     if (params && ws.readyState === WebSocket.OPEN) {
    //         ws.send(JSON.stringify(params));
    //         ws.onmessage = (response) => {
    //             try {
    //                 const newData = JSON.parse(response.data);
    //                 setData(newData);
    //             } catch (e) {
    //                 console.error('Error parsing WebSocket message:', e);
    //             }
    //         };
    //     }
    // }

    // Return the updated WebSocket reference
    return ws;
}
