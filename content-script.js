
class Constant {
  static SHARED_SPAN_DATA_TOOLTIP_TEXT = "공유됨";

  static PRESENTATION_SRC = "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.openxmlformats-officedocument.presentationml.presentation";
  
}

// https://drive.google.com/file/d/19rq39o2QDUIiUW4dxo7GHzcmUkjNJZo5/view?usp=drive_link
// https://docs.google.com/document/d/1PW5SpDj996oj0DQERC-s5KIugd6U79J8/edit?usp=drive_link
class DriveHandler {
  sharedContents = [];

  getSharedContent = () => {
    const elements = document.querySelectorAll(`span[data-tooltip='${Constant.SHARED_SPAN_DATA_TOOLTIP_TEXT}']`);
    this.sharedContents = elements;

    return elements;
  }

  getContentType = () => {
    const dataWrapper = element.parentNode.parentNode;
    const icon = dataWrapper.firstChild.firstChild.firstChild.firstChild.firstChild;

    dataWrapper.chil
  }

  getDataURL = (element) => {
    const dataWrapper = element.parentNode.parentNode.parentNode.parentNode;

    const dataId = dataWrapper.getAttribute("data-id");
    return dataId
  }

  addButtons = () => {
    for (let i = 0; i < this.sharedContents.length; i++) {
      const target = this.sharedContents[i];
      console.log(this.getDataURL(target))
    }
  }
}

const interval = setInterval(() => {
  const driveHandler = new DriveHandler();
  
  driveHandler.getSharedContent();

  driveHandler.addButtons()
  // console.log(driveHandler.sharedContents);
}, 1000);