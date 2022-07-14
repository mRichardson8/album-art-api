MSYS_NO_PATHCONV=1 docker run -it \
    -p 3000:5000 \
    -e PORT=5000 \
    --name cover-api \
    --mount type=bind,src="$(pwd)",dst=/code \
    -w /code \
    node:12.18.4 \
    bash -c "npm install && npm run dev"
