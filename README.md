# computerapi
노드 라이브러리, express를 이용해서 api를 만들어서 데시보드로 전송하는 프로그램입니다.<br>
아직 어떤것이 들어갈지 구성이 다 안되었으니 추후 개발 하단후 공지하겟습니다.

# 현재 api 형식
```json
 {
    "cpu": {
        "model": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "usage": 0,
        "clock": [{
                    "core": 0,
                    "clock": 3263.25
                }, {
                    "core": 1,
                    "clock": 3263.25…],
                "top5": [{
                        "pid": 3498,
                        "name": "node",
                        "cpu": 80,
                        "mem": {
                            "private": 18640896,
                            …]
                    },
                    "ram": {
                        "totalMemMb": 7905.95,
                        "usedMemMb": 2402.64,
                        "freeMemMb": 5503.31,
                        "usedMemPercentage": 30.39,
                        "freeMemPercentage": 69.61
                    },
                    "netstats": {
                        "total": {
                            "inputMb": 0,
                            "outputMb": 0
                        },
                        "enp4s0": {
                            "inputMb": 0,
                            "outputMb": 0
                        }
                    }
                }
               
```
### Cpu
모델하고 사용량 클럭 정보를 보여줌니다.
또 친구의 권의로 인해 cpu프로세서 많이 먹는 5위를 선정해서 정보를 제공합니다.

### 램
램은 단순 사용량만 보여줌니다.

### 네트워크
네트워크는 종합하고 이더넷을 보여주는데 이더넷은 하나씩 추가 될떄 마다 하나씩 추가되어서 정보를 제공합니다.
