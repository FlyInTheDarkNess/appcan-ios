//
//  UEX_GCD_Manager.h
//  testForBase64
//
//  Created by 赵中良 on 2019/6/5.
//  Copyright © 2019 赵中良. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef void(^AddBlock)(void);

@interface UEX_GCD_Manager : NSObject

/**
 获取单例
 
 @return 单例对象
 */
+ (instancetype)sharedManager;

//等待降低信号量
- (void)GCD_semaphore_wait;

//提高信号量
- (void)GCD_semaphore_signal;

@property (nonatomic,assign) AddBlock addBlock;

//队列添加方法
- (void)addBlock:(void (^)(dispatch_semaphore_t sem))completeBlock;

@end

NS_ASSUME_NONNULL_END
