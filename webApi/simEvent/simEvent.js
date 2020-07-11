const simEventClick = (dom) => {
    // const event = document.createEvent('MouseEvent');
    // event.initMouseEvent() 新标准这些api被废弃了 使用新的构造函数来代替
    const event = new MouseEvent('click', {
        // clientX: 80,
        // clientY: 80,
    });
    dom.dispatchEvent(event)
}