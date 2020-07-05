import * as React from "react";

function LuvLogo(props) {
  return (
    <svg width={220} height={161} fill="none" {...props}>
      <path
        d="M176.888 11.033c-2.115-5.944-7.756-12.088-14.707-10.88-3.526-.402-7.354 1.008-10.678 2.015-3.525 1.108-7.051 2.519-10.174 4.432-3.022-2.82-6.749-4.734-10.678-5.44-.1-.1-.201-.1-.302-.2-10.375-2.317-17.125 4.835-23.37 12.188-7.656 9.167-14.606 19.643-27.903 20.248-.302 0-.504.1-.605.302-.1-.101-.201-.101-.302-.101-10.073-2.619-26.392.1-32.738 9.469-3.727 2.317-5.44 5.943-4.936 10.275.302 2.82 2.518 5.54 5.339 5.842 2.417 3.425 6.144 5.944 10.375 6.649.504 1.51 1.813 2.82 3.425 2.619.302 5.64 3.526 11.181 8.26 14.103.907 6.144 2.72 12.289 6.951 16.923.403 3.122.604 8.764 4.23 9.368 2.52 2.216 8.16-.403 9.57-2.921v-.101c1.713-.302 3.425-.907 4.634-2.015 2.922-2.72-.604-6.648-3.223-7.756h-.101c-.705-2.922-1.612-6.346-3.324-8.865-.806-3.626-1.511-7.152-2.418-10.778-1.007-4.03-3.525-6.447-5.64-9.771a2.4 2.4 0 00.604-1.108v-.202c.805-.1 1.712-.302 2.619-.604l.1-.101c.101.1.302.201.504.201 8.36.202 15.412.303 23.169 3.929 4.936 2.317 9.972 5.943 14.405 9.167 9.066 6.648 19.643 11.886 30.421 14.908.302.101.605 0 .806-.1.302 0 .504-.101.806-.303 9.368-11.08 15.211-24.176 20.65-37.573 5.742-14.103 9.469-29.011 4.231-43.82zm-20.247-8.764c-4.533 2.82-7.656 7.656-9.57 12.793-.907-2.72-2.518-5.238-4.533-7.353 4.533-2.821 9.167-4.332 14.103-5.44zM67.794 54.952c0 .101 0 .101 0 0 1.108 2.72 2.518 5.239 4.835 7.153 2.317 1.813 4.936 2.216 7.656 2.316-19.543 4.231-20.953-29.514-4.231-29.514.504.1.906.1 1.41.201-4.23 1.108-7.555 3.224-9.469 7.555-1.612 3.627-1.914 8.663-.201 12.29zm-26.292-2.316c-.403-2.922.806-5.742 2.82-7.656 0 0 0 .1-.1.1-2.015 4.332-1.41 8.966.806 12.693-1.914-1.007-3.224-2.72-3.526-5.137zm40.294 54.799c.1-.101.302-.101.402-.202 1.109-.503 2.217-.806 3.325-1.007-.504.302-1.008.604-1.612.806-.705.201-1.41.403-2.115.403zm-2.418-34.451c1.108.504 1.108 1.108.604 2.115-.201.403-.503.705-.705 1.108-.302-.201-.403-.705-.503-1.007-.202-.504-.303-1.007-.504-1.41-.302-.705-1.511-2.216-1.41-3.224.403 1.31 1.31 1.914 2.518 2.418zm1.612 1.914c.1-.605.1-1.108-.101-1.612-.201-.604-.806-.806-1.31-1.007-.503-.202-.906-.403-1.41-.605-.504-.201-.806-.705-1.108-1.108.302-.1.604-.201.907-.403.403.705 1.108 1.21 1.813 1.612.806.504 1.712 1.007 1.51 2.216 0 .302-.1.605-.301.907zm-14.607-7.454c-.302 0-.201.402.101.402 1.713 0 3.022-.201 4.634.504.907.403 3.022.1 4.03.1 1.007-.1 2.115-.503 3.021-1.107.302.806.705 1.31 1.31 2.115a9.46 9.46 0 011.209 1.813c-.806-.503-1.612-1.108-2.519-1.51 0-.101-.1-.101-.201-.101-.504-.101-.907.201-1.41.403-.202.1-.202.201-.202.302-.705.906.907 3.223 1.209 3.928.403.907.302 2.015 1.007 2.82.605.706 1.713.303 2.317-.2.1 0 .302-.101.403-.202.403-.504.806-1.209 1.007-1.914.403 1.108.705 2.216 1.008 3.324.805 3.022 1.41 6.246 2.619 9.066.302 1.814 1.007 3.526 1.712 5.34.504 1.51.504 3.323 1.511 4.532-1.51.605-3.324 0-4.835.605a.315.315 0 000 .604c.907.403 2.115.201 3.123.1.806-.1 1.611-.301 2.216-.805l.1.1c1.008.404 1.915 1.109 2.418 1.915-.806.302-1.31.805-2.317.906-1.007.101-2.115.101-2.921-.604-.302-.202-.705.302-.403.604 1.31 1.31 4.936 1.511 5.943-.201.403 1.108.101 2.316-1.813 2.921-1.31.504-2.72.806-4.03 1.007-2.618.403-5.036 1.108-6.85 3.022-2.517-1.612-2.215-4.835-3.222-7.353.1-.202.2-.504.1-.705-.403-.907-1.007-1.511-1.712-2.317-1.612-1.914-2.317-3.929-2.921-6.246-.806-2.82-1.21-6.144-2.62-8.764-.503-2.518-3.727-3.828-5.036-5.943-1.813-2.82-2.116-6.749-3.224-9.771-.201-.705-1.209-.504-1.209.201v.202c-.604-.202-1.007-.403-1.41-.907-.1-.1-.201-.201-.403-.302 0-.302-.201-.705-.503-.806-3.627-1.209-6.347-2.216-9.167-4.936-5.037-4.835-4.231-12.591-.202-17.628 4.332-5.44 15.715-7.354 23.975-7.152-13.398 4.03-11.685 33.343 6.648 30.724-3.626 3.525-8.058 1.208-12.49 1.913zm48.755 5.338c-4.23-2.518-7.857-5.238-12.491-7.051-6.749-2.619-13.095-2.518-20.247-2.317-.1 0-.202 0-.302.1-6.145-.2-10.477-2.618-13.096-8.058-1.208-4.23-1.51-7.857-.302-12.39 1.41-5.238 6.447-5.943 10.477-7.757 7.554-.402 14.505-4.432 19.945-9.368 4.029-3.727 6.547-8.864 9.972-13.196-4.029 10.275 1.209 23.773 6.347 33.947 4.734 9.369 10.375 18.535 16.822 26.695 4.13 5.238 9.167 11.584 14.707 16.218-5.137-1.813-10.073-3.929-15.009-6.145-6.044-2.72-11.081-7.353-16.823-10.678zm53.49-13.498c-4.735 11.282-10.073 22.161-18.031 31.63-.202-.1-.504-.201-.706-.201-11.181-9.267-19.844-22.967-27.298-35.156-8.865-14.506-23.37-40.394-3.022-51.878.302-.201.403-.403.302-.705 3.223-1.007 6.749-.705 10.174-.403h.201c7.757 1.914 15.513 8.16 15.614 15.916v.1c0 .102 0 .102-.101.202-.302 1.008 1.31 1.511 1.612.504.302-.202.504-.504.403-1.008v-.2c2.317-7.455 6.85-15.413 15.312-16.521 11.584-1.511 14.404 16.016 14.707 23.874.403 11.584-4.735 23.168-9.167 33.846z"
        fill="#fff"
      />
      <path
        d="M155.633 45.08c-2.014-.402-4.13-.503-6.245-.402.101-2.418.302-5.037-.907-7.052-.302-.403-.705-.503-1.108-.403-.302-.1-.806.101-.806.504v.1c-.1.202-.1.504 0 .706.101 2.115.202 4.13.302 6.245a40.49 40.49 0 00-5.036.605c-.101 0-.101 0-.202.1-.201 0-.503.101-.705.101-1.007.202-1.007 1.813 0 2.015 2.015.302 4.029.201 6.044 0 0 2.418-.101 4.936.806 7.253.202.705 1.41.806 1.511 0 .504-2.418.302-4.936.202-7.455.604 0 1.208 0 1.813-.1H152.913c.907-.101 1.814-.101 2.72-.302.907-.202.907-1.713 0-1.914zM71.823 85.777c.504 2.015 1.31 4.13 2.216 6.044 1.108 2.216 2.015 4.634 3.425 6.648v.101c.403 1.008.705 1.209 1.813 1.41.101 0 .202 0 .202-.1.705-1.31-.202-3.425-.202-4.835-.201-3.023-1.813-6.145-2.921-8.966-1.209-2.921-4.332-8.562-7.152-10.275-.1-.1-.202 0-.302.101v.1c0-.1-.202-.1-.202.102.403 1.712 1.108 3.324 1.713 5.036.403 1.41.705 3.123 1.41 4.634zm-2.82-9.57c.1-.201 5.842 8.059 6.144 8.764 1.209 2.116 2.116 4.835 3.022 7.152.504 1.511.806 3.022.806 4.634 0-.604.705 4.734-1.007 2.015v-.101c-2.72-3.828-4.13-8.562-5.944-12.894-.805-3.223-2.115-6.245-3.122-9.368.1-.1.1-.1.1-.202zM75.147 78.323c0-1.21-.705-2.216-1.51-3.123-.404-.504-.907-.806-1.411-1.209-.806-.705-.806-1.612-.907-2.619 0-.201-.201-.201-.302 0-.201 2.921 2.418 4.634 3.425 7.051.1.403.705.303.705-.1zM4.03 129.596C3.525 139.669.503 149.34 0 159.413c0 .403.403.806.806.605 7.152-2.216 14.405-3.022 21.758-4.332.705-.101.504-1.309-.201-1.209-3.526.202-6.95.705-10.476 1.209-2.317.403-4.533.806-6.75 1.41-2.417.605-4.029 2.116-3.727-1.208.806-8.865 3.727-17.327 3.324-26.393.101-.503-.705-.503-.705.101z"
        fill="#fff"
      />
      <path
        d="M17.225 132.92c-.805 3.425-4.432 17.931 3.123 16.823 5.641-.806 5.641-11.282 5.641-15.412 0-1.209-1.712-1.209-1.813 0-.302 4.13 0 10.073-2.82 13.296-1.109 1.31-3.023.706-3.828-.503-1.008-1.511-.907-3.627-.907-5.339 0-2.921.403-5.943.907-8.865-.101-.1-.303-.201-.303 0zM29.112 135.439c-1.209 6.346.302 12.491 1.612 18.736.1.605 1.007.806 1.41.403 5.44-6.245 6.548-15.513 7.757-23.37.201-1.209-1.511-1.713-1.814-.504-1.712 7.857-2.518 16.218-7.252 22.867.503.101 1.007.101 1.51.201-1.611-6.044-2.619-11.886-2.619-18.132 0-.403-.503-.503-.604-.201zM59.735 133.525c-.806 6.346-4.835 17.528 0 22.967 2.418 2.72 5.339 4.634 9.066 3.224 3.425-1.31 5.037-5.843 4.734-9.167 0-.705-1.108-.907-1.208-.202-.907 3.728-1.914 8.966-7.052 8.16-4.633-.705-6.044-5.742-6.245-9.57-.202-5.238 1.612-10.275 1.612-15.513 0-.504-.806-.403-.907.101z"
        fill="#fff"
      />
      <path
        d="M49.863 145.714c7.454.302 15.11-.907 22.262-2.72 2.317-.605 5.339-1.31 7.152-2.922 1.209-1.108.705-1.611.907-2.82.1-.302 0-.705-.202-.907-1.31-1.108-4.936-.403-4.734 1.914.403 3.022 2.417 3.123 4.331 1.008.706-.806-.503-2.015-1.208-1.209.604-.705-.403-1.31.1-.302.303.805-1.51 1.511-2.014 1.712-2.519 1.209-5.34 1.813-8.059 2.317-6.044 1.309-12.39 2.216-18.535 2.216-1.108 0-1.108 1.612 0 1.713zM77.665 143.094c-.705 4.433-.503 8.865-.402 13.398 0 1.108 1.813 1.108 1.712 0-.403-4.432-.705-8.865-1.108-13.297.1-.201-.1-.201-.202-.101zM86.732 128.891c-.907 9.973-1.108 19.945-1.511 29.918 0 .504.604 1.007 1.007.806 3.526-1.31 7.353-1.612 10.88-2.922 1.006-.402.603-2.014-.404-1.611-3.525 1.41-7.353 1.611-10.879 3.022.302.302.705.503 1.007.806.303-9.973.806-19.946.504-29.918 0-.504-.604-.504-.604-.101zM55.504 133.928c.202-.907.202-1.713.202-2.619.1-1.008.302-1.814-.303-2.72-.201-.302-.705-.403-.906 0-.504 1.007-.202 1.612-.1 2.619.1.906.2 1.914.503 2.82.1.202.503.303.604-.1zM111.713 144.001c-.302 5.137.806 10.275-.402 15.312-.202 1.007 1.208 1.41 1.511.402 1.41-5.036-.303-10.677-.403-15.714a.354.354 0 00-.706 0zM124.607 126.776c-2.619 8.562-3.122 18.031-.604 26.694.806 2.821 3.223 5.742 6.245 6.145 5.037.705 8.059-3.022 9.268-7.555.201-.806-1.007-1.41-1.41-.605-2.216 4.836-7.455 9.469-11.685 3.828-2.217-2.921-2.519-6.447-2.519-9.872-.101-6.144.605-12.289 1.41-18.333 0-.605-.604-.806-.705-.302z"
        fill="#fff"
      />
      <path
        d="M111.512 138.159c4.835-3.022-2.821-5.44-2.216-1.612.604 3.526 3.526 3.626 6.648 3.727 7.354.201 14.405-.504 21.557-2.216.605-.101.302-1.108-.302-.907-4.734 1.31-9.267 1.813-14.203 2.015-.504 0-12.391-.302-11.887-1.31-.101.101.101.403.403.303zM153.619 128.186c-.303 10.275-.303 20.65-.605 30.925 0 1.209 1.813 1.209 1.914 0 .202-3.324 1.31-6.346 3.425-8.965 4.029-5.037 4.332 4.231 4.432 5.842.303 3.728 3.325 4.433 6.447 3.224.806-.302.504-1.511-.403-1.31-5.741.907-4.331-2.921-4.835-6.95-.201-1.814-1.309-2.922-2.921-3.627-4.432-1.813-7.857 9.268-8.16 11.887h1.914c.504-10.275 1.511-20.852-.1-31.127 0-.806-1.108-.503-1.108.101zM168.023 142.389c-.705 4.03-1.712 12.29 4.332 12.793 6.044.504 6.648-8.663 6.648-12.893 0-.605-.906-.706-1.108-.101-.906 3.022-.604 10.275-5.036 10.678-4.13.402-4.936-7.858-4.634-10.477 0-.1-.202-.1-.202 0zM181.824 144.807c-.907 4.835-.705 9.872-1.209 14.808-.101 1.007 1.41 1.007 1.612 0 .302-2.418.806-5.037 1.813-7.253 1.31-2.72 3.929-3.626 6.649-4.231.604-.1.503-1.209-.202-1.108-5.842.504-9.267 7.454-9.973 12.592h1.612c.504-4.835 1.108-9.872.605-14.707 0-.504-.806-.705-.907-.101zM188.573 143.195c2.619.302 5.238-.403 7.857-.302 2.317.101 4.634.504 6.951.403.907 0 .907-1.31 0-1.41-4.533-.403-10.577-.907-15.009.201-.605.202-.403 1.007.201 1.108z"
        fill="#fff"
      />
      <path
        d="M195.524 131.51c-.504 5.339-5.238 36.969 8.965 26.191 1.209-.907-.101-2.72-1.31-1.713-6.044 4.735-6.95-1.712-6.849-6.245.1-6.044.403-12.189.302-18.233.101-.806-1.008-.806-1.108 0zM217.685 145.613c-2.619-3.325-9.972-.403-7.857 3.828 1.511 2.921 4.634 2.216 7.353 2.82 3.022.705 1.511 3.929.101 5.238-1.108 1.008-2.518 1.31-3.928 1.31-2.72 0-4.03-2.519-5.843-4.03-.403-.403-1.209 0-1.007.605 2.014 6.145 11.181 6.85 13.297.403.705-2.216-.504-4.735-2.922-4.835-2.216-.101-5.842-.303-6.044-3.224-.1-1.309 1.411-2.115 2.418-2.518 1.309-.504 2.82.604 3.928 1.209.403.402.806-.303.504-.806z"
        fill="#fff"
      />
    </svg>
  );
}

export default LuvLogo;
