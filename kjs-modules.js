var KJS = KJS || {
    Scanner: {},
    Notification: {},
    File: {},
    FTP: {},
    DeviceInfo: {},
    LicenceInfo: {}
};
KJS.FTP = function () {
    return setOptionSettings = function (n) {
        var t = JSON.stringify(n);
        _ftpClient.setOptionSettings(t)
    }, getOptionSettings = function () {
        var n = _ftpClient.getOptionSettings();
        return JSON.parse(n)
    }, connect = function (n, t, i, r) {
        return _ftpClient.connect(n, t, i, r)
    }, quit = function () {
        _ftpClient.quit()
    }, putFile = function (n, t, i) {
        return _ftpClient.putFile(n, t, i)
    }, append = function (n, t, i) {
        return _ftpClient.append(n, t, i)
    }, getFile = function (n, t, i) {
        return _ftpClient.getFile(n, t, i)
    }, dir = function (n) {
        var t = _ftpClient.dir(n);
        return JSON.parse(t)
    }, deleteFile = function (n) {
        return _ftpClient.deleteFile(n)
    }, rename = function (n, t) {
        return _ftpClient.rename(n, t)
    }, createDirectory = function (n) {
        return _ftpClient.createDirectory(n)
    }, deleteDirectory = function (n) {
        return _ftpClient.deleteDirectory(n)
    }, {
        setOptionSettings: setOptionSettings,
        getOptionSettings: getOptionSettings,
        connect: connect,
        quit: quit,
        putFile: putFile,
        append: append,
        getFile: getFile,
        dir: dir,
        rename: rename,
        deleteFile: deleteFile,
        createDirectory: createDirectory,
        deleteDirectory: deleteDirectory
    }
}();
KJS.File = function () {
    return exists = function (n, t) {
        return _fileUtil.exists(n, t)
    }, getDirectoryInfo = function (n, t) {
        var i = _fileUtil.list(n, t);
        return JSON.parse(i)
    }, open = function (n, t) {
        return _fileUtil.open(n, t)
    }, close = function (n) {
        return _fileUtil.close(n)
    }, closeAll = function () {
        _fileUtil.closeAll()
    }, seek = function (n, t) {
        return _fileUtil.seek(n, t)
    }, getLength = function (n) {
        return _fileUtil.getLength(n)
    }, getFilePointer = function (n) {
        return _fileUtil.getFilePointer(n)
    }, readBytes = function (n, t) {
        var i = _fileUtil.readBytes(n, t);
        return JSON.parse(i)
    }, readLine = function (n) {
        return _fileUtil.readLine(n)
    }, writeBytes = function (n, t) {
        var i = JSON.stringify(t);
        return _fileUtil.writeBytes(n, i)
    }, write = function (n, t) {
        return _fileUtil.write(n, t)
    }, createDirectory = function (n, t) {
        return _fileUtil.createDirectory(n, t)
    }, deleteDirectory = function (n, t) {
        return _fileUtil.deleteDirectory(n, t)
    }, copyDirectory = function (n, t, i, r) {
        return _fileUtil.copyDirectory(n, t, i, r)
    }, moveDirectory = function (n, t, i, r) {
        return _fileUtil.moveDirectory(n, t, i, r)
    }, createFile = function (n, t) {
        return _fileUtil.createFile(n, t)
    }, deleteFile = function (n, t) {
        return _fileUtil.deleteFile(n, t)
    }, copyFile = function (n, t, i, r) {
        return _fileUtil.copyFile(n, t, i, r)
    }, moveFile = function (n, t, i, r) {
        return _fileUtil.moveFile(n, t, i, r)
    }, rename = function (n, t, i) {
        return _fileUtil.rename(n, t, i)
    }, {
        exists: exists,
        getDirectoryInfo: getDirectoryInfo,
        open: open,
        close: close,
        closeAll: closeAll,
        seek: seek,
        getLength: getLength,
        getFilePointer: getFilePointer,
        readBytes: readBytes,
        readLine: readLine,
        writeBytes: writeBytes,
        write: write,
        createDirectory: createDirectory,
        deleteDirectory: deleteDirectory,
        copyDirectory: copyDirectory,
        moveDirectory: moveDirectory,
        createFile: createFile,
        deleteFile: deleteFile,
        copyFile: copyFile,
        moveFile: moveFile,
        rename: rename
    }
}();
KJS.Notification = function () {
    return startVibrator = function (n, t, i) {
        return _notificationUtil.startVibrator(n, t, i)
    }, stopVibrator = function () {
        _notificationUtil.stopVibrator()
    }, startLed = function (n, t, i, r) {
        return _notificationUtil.startLed(n, t, i, r)
    }, stopLed = function () {
        _notificationUtil.stopLed()
    }, startBuzzer = function (n, t, i, r) {
        return _notificationUtil.startBuzzer(n, t, i, r)
    }, stopBuzzer = function () {
        _notificationUtil.stopBuzzer()
    }, {
        startVibrator: startVibrator,
        stopVibrator: stopVibrator,
        startLed: startLed,
        stopLed: stopLed,
        startBuzzer: startBuzzer,
        stopBuzzer: stopBuzzer
    }
}();
KJS.Scanner = function () {
    const t = 2,
        n = Object.freeze({
            ScanParams: 0,
            CodeType: 1,
            DataFormat: 2,
            DataOutput: 3,
            UserFeedback: 4,
            TuningParams: 5,
            FloattrigParams: 6,
            UPCEAN: 100,
            JAN: 100,
            C128: 101,
            C39: 102,
            ITF: 103,
            GS1: 104,
            DM: 105,
            QR: 106,
            PDF: 107,
            TOF: 108,
            CODABAR: 109,
            NW7: 109,
            COOP: 110,
            C93: 111,
            COMPOSITE: 112,
            POSTAL: 113,
            OCR: 114,
            Maxi: 115,
            Aztec: 116
        });
    return setReadCallback = function (n) {
        return _scanManager.setReadCallback(n)
    }, clearReadCallback = function () {
        _scanManager.clearReadCallback()
    }, setMultipleReadCallback = function (n) {
        return _scanManager.setMultipleReadCallback(n)
    }, clearMultipleReadCallback = function () {
        _scanManager.clearMultipleReadCallback()
    }, getConfig = function (t) {
        var i = "";
        switch (t) {
            case n.ScanParams:
                i = _scanManager.getScanParams();
                break;
            case n.CodeType:
                i = _scanManager.getCodeType();
                break;
            case n.DataFormat:
                i = _scanManager.getDataFormat();
                break;
            case n.DataOutput:
                i = _scanManager.getDataOutput();
                break;
            case n.UserFeedback:
                i = _scanManager.getUserFeedback();
                break;
            case n.TuningParams:
                i = _scanManager.getTuningParams();
                break;
            case n.UPCEAN:
                i = _scanManager.getCodeParamsUpcEanJan();
                break;
            case n.C128:
                i = _scanManager.getCodeParamsCode128();
                break;
            case n.C39:
                i = _scanManager.getCodeParamsCode39();
                break;
            case n.ITF:
                i = _scanManager.getCodeParamsItf();
                break;
            case n.GS1:
                i = _scanManager.getCodeParamsGs1Databar();
                break;
            case n.DM:
                i = _scanManager.getCodeParamsDatamatrix();
                break;
            case n.QR:
                i = _scanManager.getCodeParamsQrCode();
                break;
            case n.PDF:
                i = _scanManager.getCodeParamsPdf417();
                break;
            case n.TOF:
                i = _scanManager.getCodeParamsIndustrial2Of5();
                break;
            case n.CODABAR:
                i = _scanManager.getCodeParamsCodabarNw7();
                break;
            case n.COOP:
                i = _scanManager.getCodeParamsCoop2Of5();
                break;
            case n.C93:
                i = _scanManager.getCodeParamsCode93();
                break;
            case n.COMPOSITE:
                i = _scanManager.getCodeParamsCompositeGs1_128();
                break;
            case n.POSTAL:
                i = _scanManager.getCodeParamsPostal();
                break;
            case n.OCR:
                i = _scanManager.getCodeParamsOcr();
                break;
            case n.Maxi:
                i = _scanManager.getCodeParamsMaxi();
                break;
            case n.Aztec:
                i = _scanManager.getCodeParamsAztec();
                break;
            case n.FloattrigParams:
                i = _scanManager.getFloattrigParams()
        }
        return JSON.parse(i)
    }, setConfig = function (i, r) {
        var u = JSON.stringify(r);
        switch (i) {
            case n.ScanParams:
                return _scanManager.setScanParams(u);
            case n.CodeType:
                return _scanManager.setCodeType(u);
            case n.DataFormat:
                return _scanManager.setDataFormat(u);
            case n.DataOutput:
                return _scanManager.setDataOutput(u);
            case n.UserFeedback:
                return _scanManager.setUserFeedback(u);
            case n.TuningParams:
                return _scanManager.setTuningParams(u);
            case n.UPCEAN:
                return _scanManager.setCodeParamsUpcEanJan(u);
            case n.C128:
                return _scanManager.setCodeParamsCode128(u);
            case n.C39:
                return _scanManager.setCodeParamsCode39(u);
            case n.ITF:
                return _scanManager.setCodeParamsItf(u);
            case n.GS1:
                return _scanManager.setCodeParamsGs1Databar(u);
            case n.DM:
                return _scanManager.setCodeParamsDatamatrix(u);
            case n.QR:
                return _scanManager.setCodeParamsQrCode(u);
            case n.PDF:
                return _scanManager.setCodeParamsPdf417(u);
            case n.TOF:
                return _scanManager.setCodeParamsIndustrial2Of5(u);
            case n.CODABAR:
                return _scanManager.setCodeParamsCodabarNw7(u);
            case n.COOP:
                return _scanManager.setCodeParamsCoop2Of5(u);
            case n.C93:
                return _scanManager.setCodeParamsCode93(u);
            case n.COMPOSITE:
                return _scanManager.setCodeParamsCompositeGs1_128(u);
            case n.POSTAL:
                return _scanManager.setCodeParamsPostal(u);
            case n.OCR:
                return _scanManager.setCodeParamsOcr(u);
            case n.Maxi:
                return _scanManager.setCodeParamsMaxi(u);
            case n.Aztec:
                return _scanManager.setCodeParamsAztec(u);
            case n.FloattrigParams:
                return _scanManager.setFloattrigParams(u)
        }
        return t
    }, getCodeTypeAllEnabled = function () {
        var n = _scanManager.getCodeTypeAllEnabled();
        return JSON.parse(n)
    }, getCodeTypeAllDisabled = function () {
        var n = _scanManager.getCodeTypeAllDisabled();
        return JSON.parse(n)
    }, startRead = function () {
        return _scanManager.startRead()
    }, stopRead = function () {
        _scanManager.stopRead()
    }, isReading = function () {
        return _scanManager.isReading()
    }, lockScanner = function () {
        return _scanManager.lockScanner()
    }, unlockScanner = function () {
        return _scanManager.unlockScanner()
    }, getConfigGroupId = function () {
        return _scanManager.getConfigGroupId()
    }, changeConfigGroupId = function (n) {
        return _scanManager.changeConfigGroupId(n)
    }, startMultipleRead = function () {
        return _scanManager.startMultipleRead()
    }, stopMultipleRead = function () {
        _scanManager.stopMultipleRead()
    }, {
        ConfigId: n,
        setReadCallback: setReadCallback,
        clearReadCallback: clearReadCallback,
        getConfig: getConfig,
        setConfig: setConfig,
        getCodeTypeAllEnabled: getCodeTypeAllEnabled,
        getCodeTypeAllDisabled: getCodeTypeAllDisabled,
        startRead: startRead,
        stopRead: stopRead,
        isReading: isReading,
        lockScanner: lockScanner,
        unlockScanner: unlockScanner,
        getConfigGroupId: getConfigGroupId,
        changeConfigGroupId: changeConfigGroupId,
        setMultipleReadCallback: setMultipleReadCallback,
        clearMultipleReadCallback: clearMultipleReadCallback,
        startMultipleRead: startMultipleRead,
        stopMultipleRead: stopMultipleRead
    }
}();
KJS.DeviceInfo = function () {
    return getLicenceInfo = function (n) {
        var t = "",
            i = "";
        switch (n) {
            case KJS.LicenceInfo.FunctionType.OCR:
                t = _deviceInfo.getLicenceInfo("OCR");
                i = JSON.parse(t)
        }
        return i
    }, getUnitInfo = () => {
        var n = "";
        return n = _deviceInfo.getUnitInfo(), JSON.parse(n)
    }, {
        getLicenceInfo: getLicenceInfo,
        getUnitInfo: getUnitInfo
    }
}();
KJS.LicenceInfo = function () {
    const n = Object.freeze({
        OCR: 0
    });
    return {
        FunctionType: n
    }
}();
KJS.RFID = (() => {
    const r = -4,
        t = {
            CommonParams: 0,
            SingleReadParams: 1
        },
        n = {};
    n.readTag = (n, t) => JSON.parse(_rfidClient.readTag(JSON.stringify(n), JSON
        .stringify(t)));
    n.openInventory = (n, t) => JSON.parse(_rfidClient.openInventory(JSON.stringify(
        n), JSON.stringify(t)));
    n.closeInventory = () => JSON.parse(_rfidClient.closeInventory());
    n.setReadCallback = n => _rfidClient.setReadCallback(n);
    n.clearReadCallback = () => {
        _rfidClient.clearReadCallback()
    };
    n.startSingleRead = () => JSON.parse(_rfidClient.startSingleRead());
    n.stopSingleRead = () => JSON.parse(_rfidClient.stopSingleRead());
    n.writeTag = (n, t) => JSON.parse(_rfidClient.writeTag(JSON.stringify(n),
        JSON.stringify(t)));
    n.lockTag = (n, t) => JSON.parse(_rfidClient.lockTag(JSON.stringify(n), JSON
        .stringify(t)));
    n.killTag = (n, t) => JSON.parse(_rfidClient.killTag(JSON.stringify(n), JSON
        .stringify(t)));
    n.writeID = (n, t) => JSON.parse(_rfidClient.writeID(JSON.stringify(n), JSON
        .stringify(t)));
    n.setConfig = (n, i) => {
        switch (n) {
            case t.CommonParams:
                return JSON.parse(_rfidClient.setCommonParams(JSON.stringify(i)));
            case t.SingleReadParams:
                return JSON.parse(_rfidClient.setSingleReadParams(JSON.stringify(i)))
        }
        return r
    };
    n.getConfig = n => {
        switch (n) {
            case t.CommonParams:
                return JSON.parse(_rfidClient.getCommonParams());
            case t.SingleReadParams:
                return JSON.parse(_rfidClient.getSingleReadParams())
        }
    };
    n.getFirmwareVersion = () => JSON.parse(_rfidClient.getFirmwareVersion());
    n.getUnitModel = () => JSON.parse(_rfidClient.getUnitModel());
    const i = {};
    return i.createDataFilter = (n, t, i, r) => JSON.parse(_rfidClient.createDataFilter(
        JSON.stringify(n), JSON.stringify(t), JSON.stringify(i), JSON.stringify(r)
    )), i.createTagIDFilter = n => JSON.parse(_rfidClient.createTagIDFilter(
        JSON.stringify(n))), i.createGTINFilter = n => JSON.parse(_rfidClient.createGTINFilter(
            JSON.stringify(n))), i.createInternalCodeFilter = n => JSON.parse(
                _rfidClient.createInternalCodeFilter(JSON.stringify(n))), {
        ConfigId: t,
        RFIDReader: n,
        Filter: i
    }
})();
KJS.Serial = (() => {
    const n = {};
    return n.open = () => JSON.parse(_serialClient.open()), n.isOpened = () =>
        JSON.parse(_serialClient.isOpened()), n.close = () => {
            _serialClient.close()
        }, n.sendData = n => JSON.parse(_serialClient.sendData(n)), n.setCallback =
        n => {
            _serialClient.setCallback(n)
        }, {
        SerialPort: n
    }
})()
