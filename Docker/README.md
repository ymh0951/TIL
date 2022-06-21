도커 이미지 만들기 (tag=폴더 이름)
```
docker build --tag=test .
```

도커 실행 - 포트 3000번 test 폴더 실행
```
docker run --name=test_con -p 4440:3000 test
```
