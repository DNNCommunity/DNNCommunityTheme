<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:template match="/*">
		<xsl:apply-templates select="root" />
	</xsl:template>
	<xsl:template match="root">
		<ul class="navbar-nav ms-auto mt-2 mt-lg-0">
			<xsl:apply-templates select="node">
				<xsl:with-param name="level" select="0"/>
			</xsl:apply-templates>
		</ul>
	</xsl:template>
	<xsl:template match="node">
		<xsl:param name="level" />
		<li>
			<xsl:attribute name="class">
				<xsl:text>nav-item</xsl:text>
				<xsl:if test="@selected=1"> active</xsl:if>
			</xsl:attribute>
			<!-- Has children-->
			<xsl:choose>
				<xsl:when test="node">
					<a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<xsl:attribute name="class">
							<xsl:text>nav-link dropdown-toggle</xsl:text>
						</xsl:attribute>
						<xsl:attribute name="id">
							<xsl:text>navbarDropdown</xsl:text>
							<xsl:value-of select="count(preceding-sibling::node)+1" />
						</xsl:attribute>
						<xsl:choose>
							<xsl:when test="@icon !=''">
								<img src="{@icon}" title="{@title}" />
							</xsl:when>
						</xsl:choose>
						<span>
							<xsl:value-of select="@text" />
						</span>
					</a>
					<xsl:if test="node">
						<ul>
							<xsl:attribute name="class">
								<xsl:text>dropdown-menu dropdown-menu-end</xsl:text>
							</xsl:attribute>
							<xsl:apply-templates select="node">
								<xsl:with-param name="level" select="$level + 1" />
							</xsl:apply-templates>
						</ul>
					</xsl:if>
				</xsl:when>
				<!-- Has No children-->
				<xsl:otherwise>
					<a href="{@url}">
						<xsl:attribute name="class">
							<xsl:text>nav-link</xsl:text>
						</xsl:attribute>
						<xsl:attribute name="id">
							<xsl:text>navbarDropdown</xsl:text>
							<xsl:value-of select="count(preceding-sibling::node)+1" />
						</xsl:attribute>
						<xsl:choose>
							<xsl:when test="@icon !=''">
								<img src="{@icon}" title="{@title}" />
							</xsl:when>
						</xsl:choose>
						<span>
							<xsl:value-of select="@text" />
						</span>
					</a>
				</xsl:otherwise>
			</xsl:choose>
		</li>
	</xsl:template>
</xsl:stylesheet>