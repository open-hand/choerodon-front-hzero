#!/bin/bash
set -e

find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_BASE_PATH ${BUILD_BASE_PATH:-/} g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s /BUILD_PUBLIC_URL/ ${BUILD_PUBLIC_URL:-/} g"
find /usr/share/nginx/html -name '*.html' | xargs sed -i "s /BUILD_PUBLIC_URL/ ${BUILD_PUBLIC_URL:-/} g"
find /usr/share/nginx/html -name '*.css' | xargs sed -i "s /BUILD_PUBLIC_URL/ ${BUILD_PUBLIC_URL:-/} g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_API_HOST $BUILD_API_HOST g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_CLIENT_ID $BUILD_CLIENT_ID g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_WEBSOCKET_HOST $BUILD_WEBSOCKET_HOST g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_PLATFORM_VERSION $BUILD_PLATFORM_VERSION g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_IM_ENABLE $BUILD_IM_ENABLE g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_IM_WEBSOCKET_HOST $BUILD_IM_WEBSOCKET_HOST g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_TRACE_LOG_ENABLE $BUILD_TRACE_LOG_ENABLE g"
find /usr/share/nginx/html -name '*.js' | xargs sed -i "s BUILD_CUSTOMIZE_ICON_NAME $BUILD_CUSTOMIZE_ICON_NAME g"


exec "$@"
