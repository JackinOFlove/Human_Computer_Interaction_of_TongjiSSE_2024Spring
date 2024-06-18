//这里存储着济事楼四楼的每个房间的信息：房间号、房间描述(包括房间名称、房间用途和相关人员)
const JishiRooms = [
    { number: '401', descriptions: '同济大学软件学院招牌🏫', image: "url('./images/401.jpg')" },
    { number: '402', descriptions: '济事楼四楼大厅棋牌室🎲', image: "url('./images/402.jpg')" },
    { number: '403', descriptions: '济事楼四楼西边卫生间🚻', image: "url('./images/403.jpg')" },
    { number: '404', descriptions: '济事楼四楼图书角📖', image: "url('./images/404.jpg')" },
    { number: '405', descriptions: '济事楼四楼南边男卫生间🚻', image: "url('./images/405.jpg')" },
    { number: '406', descriptions: '济事楼四楼南边女卫生间🚻', image: "url('./images/406.jpg')" },
    { number: '407', descriptions: '赵生捷 研究生工作室🧑‍💻👩‍💻', image: "url('./images/407.jpg')" },
    { number: '408', descriptions: '济事楼四楼台球乒乓球室🏓🎱', image: "url('./images/408.jpg')" },
    { number: '409', descriptions: '杜庆峰 研究生工作室🧑‍💻👩‍💻', image: "url('./images/409.jpg')" },
    { number: '410', descriptions: '张颖 王冬青 李江峰 夏波涌老师的教研室🧑👩', image: "url('./images/410.jpg')" },
    { number: '412', descriptions: '刘岩 张惠娟 孙萍 罗怡桂老师的教研室🧑👩', image: "url('./images/412.jpg')" },
    { number: '413', descriptions: '教育部工程研究中心实验室🔬', image: "url('./images/413.jpg')" },
    { number: '414', descriptions: '同济大学软件学院介绍室🏢', image: "url('./images/414.jpg')" },
    { number: '415', descriptions: '同济大学软件学院强电间415⚡', image: "url('./images/415.jpg')" },
    { number: '416', descriptions: '杨旻 多媒体教学机房🏢', image: "url('./images/416.jpg')" },
    { number: '418L', descriptions: '张林 江建慧 刘琴老师的教授办公室🧑👩', image: "url('./images/418L.jpg')" },
    { number: '418R', descriptions: '袁时金 研究生工作室🧑‍💻👩‍💻', image: "url('./images/418R.jpg')" },
    { number: '419', descriptions: '同济大学软件学院软件技术研究中心🔬', image: "url('./images/419.jpg')" },
    { number: '420', descriptions: '电梯、签到打卡和邮箱处📨📬', image: "url('./images/420.jpg')" },
    { number: '426', descriptions: '多媒体教学小教室🏢', image: "url('./images/426.jpg')" },
    { number: '428', descriptions: '网络与服务器管理室🌍', image: "url('./images/428.jpg')" },
    { number: '430', descriptions: '多媒体教学大机房🏢', image: "url('./images/430.jpg')" },
    { number: '432', descriptions: '同济大学软件学院党员之家🧑‍💼👩‍💼', image: "url('./images/432.jpg')" },
    { number: '434', descriptions: '讲课教室🏢', image: "url('./images/434.jpg')" },
    { number: '441', descriptions: '同济大学软件学院会议室🗣️', image: "url('./images/441.jpg')" },
    { number: '443', descriptions: '陈梁 杨旻老师的办公室🧑', image: "url('./images/443.jpg')" },
    { number: '445', descriptions: '同济大学软件学院强电间445⚡', image: "url('./images/445.jpg')" },
    { number: '446', descriptions: '葛蕾 焦嘉欣 钟梦莹 陈璞皎 严海洲老师的学生工作办公室🧑👩', image: "url('./images/446.jpg')" },
    { number: '447', descriptions: '济事楼四楼北边卫生间🚻', image: "url('./images/447.jpg')" },
    { number: '448', descriptions: '王彩霞 杨丹老师的同济大学软件学院教务处👩', image: "url('./images/448.jpg')" },
    { number: '450', descriptions: '赵生捷院长的同济大学软件学院院长办公室🧑', image: "url('./images/450.jpg')" },
    { number: '451', descriptions: '党员办公室🧑‍💻👩‍💻', image: "url('./images/451.jpg')" },
    { number: '455', descriptions: '同济大学软件学院健身房💪', image: "url('./images/455.jpg')" },
    { number: '456', descriptions: '张晓雅 闫鹏 林伊凡 钱银飞 张晶老师的学院办公室🧑👩', image: "url('./images/456.jpg')" },
]

//这里存储着显示的三张图片的位置：左边，中间和右边
const imageOrder = [
    { imageLoacation: 'left' },
    { imageLoacation: 'middle' },
    { imageLoacation: 'right' }
]

//当前图片：软件学院招牌401
var currentImage = 33;
//找到页面预留的上的container
const container = document.querySelector('.container');

//左箭头
const leftArrow = document.createElement('div');
leftArrow.innerHTML = `🢀`;
leftArrow.classList.add("left-arrow");
leftArrow.style = "display: flex; flex-direction: column; justify-content: center; cursor: pointer;font-size:40px;";
leftArrow.addEventListener('click', leftPressed);

//右箭头
const rightArrow = document.createElement('div');
rightArrow.innerHTML = `🢂`;
rightArrow.classList.add("right-arrow");
rightArrow.style = "display: flex; flex-direction: column; justify-content: center; cursor: pointer;font-size:40px;";
rightArrow.addEventListener('click', rightPressed);

updateUI(currentImage);

//搜索内容的找到和绑定
search = document.getElementById('search-content');
search.addEventListener('keyup', searchRooms);

//按键快捷键的找到和绑定
collectionButton = document.getElementsByClassName("clickbutton");
for (let i = 0; i < collectionButton.length; i++) {
    collectionButton[i].addEventListener('click', () => { buttonPressed(i); });
}

//按键快捷键绑定的函数
function buttonPressed(i) {
    container.innerHTML = "";
    currentImage = i + 33;
    updateUI(currentImage);
}

//左箭头按键绑定的函数
function leftPressed() {
    container.innerHTML = "";
    currentImage = (currentImage + JishiRooms.length - 1) % JishiRooms.length;
    updateUI(currentImage);
}

//右箭头按键绑的函数
function rightPressed() {
    container.innerHTML = "";
    currentImage = (currentImage + 1) % JishiRooms.length;
    updateUI(currentImage);
}

//以currentImage为传入参数更新container中的图片显示UI
function updateUI(currentImage) {
    container.appendChild(leftArrow);
    imageOrder.forEach(data => {
        index = imageOrder.indexOf(data);
        const panel = document.createElement('div');
        panel.classList.add('panel', data.imageLoacation);
        let room = JishiRooms[(currentImage + index) % JishiRooms.length];
        panel.style.backgroundImage = room.image;
        panel.innerHTML = `
            <h3 style="font-family: 'Times New Roman';margin-top: 420px;opacity: 1;text-align: center;font-size:36px;">${room.number}</h3>
            <p style="font-family: 'Times New Roman';margin-top: -40px;opacity: 1;text-align: center;font-size:18px;">${room.descriptions}</p>`;
        container.appendChild(panel);
    })
    container.appendChild(rightArrow);
}

//关键词搜索函数的实现
function searchRooms() {
    if (search.value !== null && search.value != "") {
        container.innerHTML = "";
        JishiRooms.forEach(room => {
            if (room.number.includes(search.value) || room.descriptions.includes(search.value)) {
                const panel = document.createElement('div');
                panel.classList.add('panel', 'middle');
                panel.style.backgroundImage = room.image;
                panel.innerHTML = ` <h3 style="font-family: 'Times New Roman';margin-top:  420px;opacity: 1;text-align: center;font-size:36px;">${room.number}</h3>
                                    <p style="font-family: 'Times New Roman';margin-top: -40px;opacity: 1;text-align: center;font-size:18px;">${room.descriptions}</p>`;
                container.appendChild(panel);
            }
        })
        if (container.childNodes.length == 0) {
            const panel = document.createElement('div');
            panel.classList.add('panel', 'middle');
            panel.innerHTML = `<p style="opacity: 1; color: black; margin-left: 550px;margin-top:100px;font-size:35px;font-weight:bold;">啊哦!无搜索结果😭</p>`;
            container.appendChild(panel);
        }
    } else {
        container.innerHTML = "";
        updateUI(currentImage);
    }
}