//
//  UEX_GCD_Manager.m
//  testForBase64
//
//  Created by 赵中良 on 2019/6/5.
//  Copyright © 2019 赵中良. All rights reserved.
//

#import "UEX_GCD_Manager.h"

@implementation UEX_GCD_Manager

static dispatch_semaphore_t sem;
+ (instancetype)sharedManager {
    static UEX_GCD_Manager *pManager = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        pManager = [[[self class] alloc] init];
        sem = dispatch_semaphore_create(1);
    });
    return pManager;
}

- (void)GCD_semaphore_wait{
    dispatch_semaphore_wait(sem,DISPATCH_TIME_FOREVER);
}

- (void)GCD_semaphore_signal{
    dispatch_semaphore_signal(sem);
}

//队列添加方法
- (void)addBlock:(void (^)(dispatch_semaphore_t sem))completeBlock{
    dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    
//    __block dispatch_semaphore_t sem = dispatch_semaphore_create(1);
    
    dispatch_async(queue, ^{
        
            dispatch_semaphore_wait(sem,DISPATCH_TIME_FOREVER);
            
            completeBlock(sem);
    
    });
}


@end
