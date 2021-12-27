import { Button } from 'antd';
import React from 'react';
import './style.less';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <>
    <div className="container container-star">
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
      <div className="star-2"></div>
    </div>
    <div className="container container-bird">
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div className="container-title">
        <div className="title">
          <div className="number">4</div>
          <div className="moon">
            <div className="face">
              <div className="mouth"></div>
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
        <div
          style={{
            marginBottom: '15px',
          }}
          className="subtitle"
        >
          哎呀。看来你拐错弯了。
        </div>
        <Button type="primary" onClick={() => history.push('/')}>
          回到首页
        </Button>
      </div>
    </div>
  </>
);

export default NoFoundPage;
