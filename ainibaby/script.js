// 获取页面元素
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const question = document.getElementById('question');
const mainImage = document.getElementById('mainImage');

// 图片路径配置
const heartImage = 'images/heart.png';    // 爱心图片
const sadImage = 'images/sad.png';        // 难过图片
const sadImage2 = 'images/sad2.png';      // 第二次点击难过图片
const sadImage3 = 'images/sad3.png';      // 第三次点击难过图片
const defaultImage = 'images/default.png'; // 备用图片

// 记录"不可以"按钮点击次数
let noClickCount = 0;

// 图片加载失败处理
mainImage.onerror = function() {
    this.src = defaultImage;
};

// “可以”按钮点击事件
yesBtn.addEventListener('click', () => {
    question.textContent = '太好了！爱你宝宝～';
    mainImage.src = heartImage;
    yesBtn.disabled = true;
    noBtn.classList.add('hidden'); // 隐藏"不要"按钮
    document.body.style.backgroundColor = '#f0f8fb';
});

// “不要”按钮鼠标悬停躲避效果（前两次点击有效）
noBtn.addEventListener('mouseover', () => {
    if (noClickCount < 2) {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});

// “不要”按钮点击事件
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // 调整"可以"按钮大小（逐级增大）
    if (noClickCount === 1) {
        yesBtn.style.padding = '18px 44px';
        yesBtn.style.fontSize = '24px';
    } else if (noClickCount === 2) {
        yesBtn.style.padding = '22px 52px';
        yesBtn.style.fontSize = '28px';
    } else if (noClickCount === 3) {
        yesBtn.style.padding = '26px 60px';
        yesBtn.style.fontSize = '32px';
    }
    
    // 调整"不要"按钮大小（逐级缩小）
    if (noClickCount === 1) {
        noBtn.style.padding = '10px 28px';
        noBtn.style.fontSize = '16px';
    } else if (noClickCount === 2) {
        noBtn.style.padding = '6px 20px';
        noBtn.style.fontSize = '12px';
    } else if (noClickCount === 3) {
        noBtn.style.padding = '2px 12px';
        noBtn.style.fontSize = '8px';
    }
    
    switch(noClickCount) {
        case 1:
            question.textContent = '再考虑一下嘛～';
            mainImage.src = sadImage;
            document.body.style.backgroundColor = '#faf0f5';
            break;
        case 2:
            question.textContent = '老婆，我想说话~';
            mainImage.src = sadImage2; // 第二次更换图片
            document.body.style.backgroundColor = '#f8edeb';
            break;
        case 3:
            question.textContent = '球球啦，让我说话嘛...';
            mainImage.src = sadImage3; // 第三次更换图片
            document.body.style.backgroundColor = '#fae8e0';
            noBtn.classList.add('hidden'); // 第三次点击后隐藏"不要"按钮
            break;
    }
});