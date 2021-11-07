//pixi参数
let option = {
    width: 280, //宽度
    height: 280, // 高度
    transparent: true, // 透明度
    antialias: true, //使得字体的边界和几何图形更加圆滑
    resolution: 1 //分辨率和像素密度
}

// 创建一个pixi应用
let app = new PIXI.Application(option);
// 获取渲染器
let renderer = app.renderer;
// 获取dom
let playground = document.getElementById('px-render');
// 把 Pixi 创建的 canvas 添加到页面上
playground.appendChild(renderer.view);

//设置别名
let TextureCache = PIXI.utils.TextureCache; // 存储缓存纹理
let Texture = PIXI.Texture;
let Rectangle = PIXI.Rectangle;
let AnimatedSprite = PIXI.extras.AnimatedSprite;


//叫 SpriteUtilities 的库，该库包含许多有用的函数，用于创建Pixi精灵并使它们更易于使用。
let su = new SpriteUtilities(PIXI);

//需要加载的雪碧图的地址（该图片服务器端已做跨域处理）
let imgURL = "../images/lxy-lm.png";
// let imgURL ='https://www.kkkk1000.com/images/learnPixiJS-AnimatedSprite/dnf.png'

//加载图像，加载完成后执行setup函数
PIXI.loader.add(imgURL).load(setup);


function setup() {

    //创建纹理数组
    let frames = su.filmstrip(imgURL, 280, 280);
    // let frames = su.filmstrip(imgURL, 80, 143);
    //创建动画精灵
    let pixie = new PIXI.extras.AnimatedSprite(frames);

    //设置动画精灵的速度
    pixie.animationSpeed = 0.3;

    //把动画精灵添加到舞台
    app.stage.addChild(pixie);
    //播放动画精灵
    pixie.play();
}