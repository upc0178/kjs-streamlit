import streamlit as st
import streamlit.components.v1 as components

def main():
    st.link_button("js file", 'file:///storage/emulated/0/Download/index.html')
    components.html(
        """

        <script src="file:///storage/emulated/0/Download/kjs-modules.js"></script>
        <button onclick="onBuzzerButton()">Buzzer</button>
        <script>

            window.onload = function() {
            //Set Callback Event as a Scan Event
                KJS.Scanner.setReadCallback('resultCallback')
            }

            //Event on code scanned.
            function resultCallback(result) {
                document.getElementById("result").innerText = result.mStringData;
            }

            //Scan
            function onStartButton() {
            KJS.Scanner.startRead();
            }

            function onStopButton() {
            KJS.Scanner.stopRead();
            }

            //Notification
            function onBuzzerButton() {
                //startBuzzer(tone, onPeriod, offPeriod, repeatCount);
                KJS.Notification.startBuzzer(16,100,100,2);
            }

            function onLEDButton() {
                //startLed(color, onPeriod, offPeriod, repeatCount);
                KJS.Notification.startLed(1,1000,0,1);
            }

            function onVibratorButton() {
                //startVibrator(onPeriod, offPeriod, repeatCount);
                KJS.Notification.startVibrator(1000,200,2);
            }


        </script>
        """,
        height=600,
    )

if __name__ == '__main__':
    main()