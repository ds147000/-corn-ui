
---header
sort: 2
---
### 不同的缩放模式

```tsx
import { Image } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <div className="img-list">
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="scaleToFill" />
        <p>scaleToFill</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="aspectFit" />
        <p>aspectFit</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="aspectFill" />
        <p>aspectFill</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="widthFix" />
        <p>widthFix</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="heightFix" />
        <p>heightFix</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="top" />
        <p>top</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="bottom" />
        <p>bottom</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="center" />
        <p>center</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="left" />
        <p>left</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="right" />
        <p>right</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="top left" />
        <p>top left</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="top right" />
        <p>top right</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="bottom left" />
        <p>bottom left</p>
      </div>
      <div className="img-item">
        <Image src="https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF" className="img" mode="bottom right" />
        <p>bottom right</p>
      </div>
    </div>
  )
}

export default Demo
```
```css
.img-list {
  display: flex;
  flex-wrap: wrap;

  .img-item {
    display: flex;
    flex-direction: column;
    margin: 8px;
    text-align: center;

    .img {
      width: 180px;
      height: 180px;
      border: 1px solid #999;
    }
  }
}
```

`mode`属性可以控制图片的缩放属性，可选参数 `scaleToFill` `aspectFit` `aspectFill` `widthFix` `heightFix` `top` `bottom` `center` `left` `right` `top left` `top right` `bottom left` `bottom right`。默认为 `scaleToFill`，下面有参数值的详细说明
