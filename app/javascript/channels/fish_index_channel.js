import consumer from "./consumer"

consumer.subscriptions.create("FishIndexChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the fish_index!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected to the fish_index!");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel

    function addRow(id, content_data){
      var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
      var row = document.createElement("TR")
      var td1 = document.createElement("TD")
      td1.appendChild(document.createTextNode(content_data[0]))
      var td2 = document.createElement("TD")
      td2.appendChild (document.createTextNode(content_data[1]))
      var td3 = document.createElement("TD")
      td3.appendChild(document.createTextNode(content_data[2]))
      var td4 = document.createElement("TD")
      td4.appendChild (document.createTextNode(content_data[3]))
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      tbody.appendChild(row);
    }

    addRow('myTable', data.content)
  }
});


